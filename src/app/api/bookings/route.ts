import { NextRequest, NextResponse } from "next/server";
import { isSlotAvailable } from "@/lib/bookings/availability";
import {
  BOOKING_RECEIPT_COOKIE,
  signBookingReceipt,
} from "@/lib/bookings/receipt";
import { bookingPersistenceError } from "@/lib/db/persistence";
import { createBooking } from "@/lib/db/store";
import { sendBookingConfirmation } from "@/lib/notifications/send";
import { bookingSchema } from "@/lib/validation/booking";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = bookingSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid booking data" },
        { status: 400 },
      );
    }

    const data = parsed.data;
    const available = await isSlotAvailable(
      data.locationSlug,
      data.date,
      data.time,
      data.partySize,
    );

    if (!available) {
      return NextResponse.json(
        { error: "This time slot is no longer available. Please choose another." },
        { status: 409 },
      );
    }

    const booking = await createBooking({
      locationSlug: data.locationSlug,
      date: data.date,
      time: data.time,
      partySize: data.partySize,
      seatingPreference: data.seatingPreference,
      name: data.name,
      email: data.email,
      phone: data.phone,
      specialRequests: data.specialRequests,
    });

    try {
      await sendBookingConfirmation(booking);
    } catch (notifyError) {
      // Booking is saved — do not fail the request if email/SMS fails
      console.error("[api/bookings:notify]", notifyError);
    }

    const response = NextResponse.json({
      id: booking.id,
      referenceCode: booking.referenceCode,
    });

    // Signed receipt so the confirmation page works even if the
    // serverless instance that wrote /tmp is not the one that renders it.
    response.cookies.set({
      name: BOOKING_RECEIPT_COOKIE,
      value: signBookingReceipt(booking),
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (error) {
    console.error("[api/bookings]", error);
    const message =
      error instanceof Error ? error.message : "Failed to create booking";
    return NextResponse.json(
      { error: message.includes("Supabase") ? bookingPersistenceError() : message },
      { status: 500 },
    );
  }
}
