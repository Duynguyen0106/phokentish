import { createHmac, timingSafeEqual } from "crypto";
import type { Booking } from "@/lib/types";

export const BOOKING_RECEIPT_COOKIE = "pho_kentish_booking_receipt";

/** Compact booking fields needed to render the confirmation page. */
export type BookingReceipt = Pick<
  Booking,
  | "id"
  | "referenceCode"
  | "locationSlug"
  | "customerName"
  | "customerEmail"
  | "customerPhone"
  | "date"
  | "time"
  | "partySize"
  | "seatingPreference"
  | "specialRequests"
  | "status"
  | "source"
  | "confirmationSentAt"
  | "createdAt"
  | "updatedAt"
>;

function receiptSecret(): string {
  return (
    process.env.BOOKING_RECEIPT_SECRET?.trim() ||
    process.env.CRON_SECRET?.trim() ||
    process.env.ADMIN_PASSWORD?.trim() ||
    "pho-kentish-booking-receipt"
  );
}

function toBase64Url(value: string | Buffer): string {
  return Buffer.from(value)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function fromBase64Url(value: string): Buffer {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/");
  const pad = padded.length % 4 === 0 ? "" : "=".repeat(4 - (padded.length % 4));
  return Buffer.from(padded + pad, "base64");
}

export function toBookingReceipt(booking: Booking): BookingReceipt {
  return {
    id: booking.id,
    referenceCode: booking.referenceCode,
    locationSlug: booking.locationSlug,
    customerName: booking.customerName,
    customerEmail: booking.customerEmail,
    customerPhone: booking.customerPhone,
    date: booking.date,
    time: booking.time,
    partySize: booking.partySize,
    seatingPreference: booking.seatingPreference,
    specialRequests: booking.specialRequests,
    status: booking.status,
    source: booking.source,
    confirmationSentAt: booking.confirmationSentAt,
    createdAt: booking.createdAt,
    updatedAt: booking.updatedAt,
  };
}

export function signBookingReceipt(booking: Booking | BookingReceipt): string {
  const payload = toBase64Url(JSON.stringify(toBookingReceipt(booking as Booking)));
  const signature = createHmac("sha256", receiptSecret())
    .update(payload)
    .digest("base64url");
  return `${payload}.${signature}`;
}

export function verifyBookingReceipt(token: string | undefined | null): BookingReceipt | null {
  if (!token) return null;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return null;

  const expected = createHmac("sha256", receiptSecret())
    .update(payload)
    .digest("base64url");

  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;

  try {
    const parsed = JSON.parse(fromBase64Url(payload).toString("utf8")) as BookingReceipt;
    if (!parsed?.referenceCode || !parsed?.customerName || !parsed?.date) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function receiptToBooking(receipt: BookingReceipt): Booking {
  return {
    ...receipt,
    customerId: "",
  };
}
