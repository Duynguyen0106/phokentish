import { randomUUID } from "crypto";
import type { D1Database } from "@cloudflare/workers-types";
import { filterBookingsNeedingReminder } from "../bookings/reminders";
import type {
  BlackoutDate,
  Booking,
  BookingStatus,
  CreateBookingInput,
  Customer,
  LocationSlug,
  SeatingPreference,
} from "../types";

type BookingRow = {
  id: string;
  reference_code: string;
  location_slug: string;
  customer_id: string | null;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  booking_date: string;
  booking_time: string;
  party_size: number;
  seating_preference: string;
  special_requests: string | null;
  status: string;
  source: string;
  reminder_sent_at: string | null;
  confirmation_sent_at: string | null;
  seated_at_table: string | null;
  created_at: string;
  updated_at: string;
};

type CustomerRow = {
  id: string;
  name: string;
  email: string;
  phone: string;
  notes: string | null;
  created_at: string;
};

function mapBooking(row: BookingRow): Booking {
  return {
    id: row.id,
    referenceCode: row.reference_code,
    locationSlug: row.location_slug as LocationSlug,
    customerId: row.customer_id ?? "",
    customerName: row.customer_name,
    customerEmail: row.customer_email,
    customerPhone: row.customer_phone,
    date: row.booking_date,
    time: row.booking_time.slice(0, 5),
    partySize: row.party_size,
    seatingPreference: row.seating_preference as SeatingPreference,
    specialRequests: row.special_requests || undefined,
    status: row.status as BookingStatus,
    source: row.source as Booking["source"],
    reminderSentAt: row.reminder_sent_at || undefined,
    confirmationSentAt: row.confirmation_sent_at || undefined,
    seatedAtTable: row.seated_at_table || undefined,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

function mapCustomer(row: CustomerRow): Customer {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    phone: row.phone,
    notes: row.notes || undefined,
    createdAt: row.created_at,
  };
}

function generateReferenceCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let suffix = "";
  for (let i = 0; i < 4; i++) {
    suffix += chars[Math.floor(Math.random() * chars.length)];
  }
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  return `PK-KT-${date}-${suffix}`;
}

export async function d1FindOrCreateCustomer(
  db: D1Database,
  input: { name: string; email: string; phone: string },
): Promise<Customer> {
  const email = input.email.trim().toLowerCase();
  const phone = input.phone.trim();
  const existing = await db
    .prepare(
      `SELECT * FROM customers WHERE lower(email) = ? OR phone = ? LIMIT 1`,
    )
    .bind(email, phone)
    .first<CustomerRow>();

  if (existing) {
    await db
      .prepare(`UPDATE customers SET name = ?, email = ?, phone = ? WHERE id = ?`)
      .bind(input.name.trim(), email, phone, existing.id)
      .run();
    return mapCustomer({
      ...existing,
      name: input.name.trim(),
      email,
      phone,
    });
  }

  const customer: Customer = {
    id: randomUUID(),
    name: input.name.trim(),
    email,
    phone,
    createdAt: new Date().toISOString(),
  };
  await db
    .prepare(
      `INSERT INTO customers (id, name, email, phone, notes, created_at)
       VALUES (?, ?, ?, ?, NULL, ?)`,
    )
    .bind(
      customer.id,
      customer.name,
      customer.email,
      customer.phone,
      customer.createdAt,
    )
    .run();
  return customer;
}

export async function d1GetBookingsForSlot(
  db: D1Database,
  locationSlug: string,
  date: string,
  time: string,
): Promise<Booking[]> {
  const { results } = await db
    .prepare(
      `SELECT * FROM bookings
       WHERE location_slug = ? AND booking_date = ? AND booking_time = ?
         AND status != 'cancelled'`,
    )
    .bind(locationSlug, date, time)
    .all<BookingRow>();
  return (results ?? []).map(mapBooking);
}

export async function d1CreateBooking(
  db: D1Database,
  input: CreateBookingInput,
): Promise<Booking> {
  const customer = await d1FindOrCreateCustomer(db, {
    name: input.name,
    email: input.email,
    phone: input.phone,
  });
  const now = new Date().toISOString();
  const booking: Booking = {
    id: randomUUID(),
    referenceCode: generateReferenceCode(),
    locationSlug: input.locationSlug,
    customerId: customer.id,
    customerName: input.name.trim(),
    customerEmail: customer.email,
    customerPhone: customer.phone,
    date: input.date,
    time: input.time,
    partySize: input.partySize,
    seatingPreference: input.seatingPreference,
    specialRequests: input.specialRequests?.trim(),
    status: "confirmed",
    source: input.source ?? "website",
    createdAt: now,
    updatedAt: now,
  };

  await db
    .prepare(
      `INSERT INTO bookings (
         id, reference_code, location_slug, customer_id, customer_name,
         customer_email, customer_phone, booking_date, booking_time, party_size,
         seating_preference, special_requests, status, source,
         reminder_sent_at, confirmation_sent_at, seated_at_table,
         created_at, updated_at
       ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NULL, NULL, NULL, ?, ?)`,
    )
    .bind(
      booking.id,
      booking.referenceCode,
      booking.locationSlug,
      booking.customerId,
      booking.customerName,
      booking.customerEmail,
      booking.customerPhone,
      booking.date,
      booking.time,
      booking.partySize,
      booking.seatingPreference,
      booking.specialRequests ?? null,
      booking.status,
      booking.source,
      booking.createdAt,
      booking.updatedAt,
    )
    .run();

  return booking;
}

export async function d1GetBookingById(
  db: D1Database,
  id: string,
): Promise<Booking | null> {
  const row = await db
    .prepare(`SELECT * FROM bookings WHERE id = ? LIMIT 1`)
    .bind(id)
    .first<BookingRow>();
  return row ? mapBooking(row) : null;
}

export async function d1GetBookingByReference(
  db: D1Database,
  referenceCode: string,
): Promise<Booking | null> {
  const row = await db
    .prepare(`SELECT * FROM bookings WHERE reference_code = ? LIMIT 1`)
    .bind(referenceCode)
    .first<BookingRow>();
  return row ? mapBooking(row) : null;
}

export async function d1ListBookings(
  db: D1Database,
  filters?: {
    locationSlug?: string;
    date?: string;
    from?: string;
    to?: string;
    status?: BookingStatus;
  },
): Promise<Booking[]> {
  const clauses: string[] = [];
  const binds: unknown[] = [];
  if (filters?.locationSlug) {
    clauses.push("location_slug = ?");
    binds.push(filters.locationSlug);
  }
  if (filters?.date) {
    clauses.push("booking_date = ?");
    binds.push(filters.date);
  }
  if (filters?.from) {
    clauses.push("booking_date >= ?");
    binds.push(filters.from);
  }
  if (filters?.to) {
    clauses.push("booking_date <= ?");
    binds.push(filters.to);
  }
  if (filters?.status) {
    clauses.push("status = ?");
    binds.push(filters.status);
  }
  const where = clauses.length ? `WHERE ${clauses.join(" AND ")}` : "";
  const { results } = await db
    .prepare(
      `SELECT * FROM bookings ${where}
       ORDER BY booking_date DESC, booking_time DESC, created_at DESC`,
    )
    .bind(...binds)
    .all<BookingRow>();
  return (results ?? []).map(mapBooking);
}

export async function d1UpdateBooking(
  db: D1Database,
  id: string,
  updates: Partial<{
    date: string;
    time: string;
    partySize: number;
    seatingPreference: SeatingPreference;
    specialRequests: string;
    status: BookingStatus;
    seatedAtTable: string;
    reminderSentAt: string;
    confirmationSentAt: string;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
  }>,
): Promise<Booking | null> {
  const existing = await d1GetBookingById(db, id);
  if (!existing) return null;

  const next: Booking = {
    ...existing,
    date: updates.date ?? existing.date,
    time: updates.time ?? existing.time,
    partySize: updates.partySize ?? existing.partySize,
    seatingPreference: updates.seatingPreference ?? existing.seatingPreference,
    specialRequests:
      updates.specialRequests !== undefined
        ? updates.specialRequests
        : existing.specialRequests,
    status: updates.status ?? existing.status,
    seatedAtTable:
      updates.seatedAtTable !== undefined
        ? updates.seatedAtTable
        : existing.seatedAtTable,
    reminderSentAt:
      updates.reminderSentAt !== undefined
        ? updates.reminderSentAt
        : existing.reminderSentAt,
    confirmationSentAt:
      updates.confirmationSentAt !== undefined
        ? updates.confirmationSentAt
        : existing.confirmationSentAt,
    customerName: updates.customerName ?? existing.customerName,
    customerEmail: updates.customerEmail ?? existing.customerEmail,
    customerPhone: updates.customerPhone ?? existing.customerPhone,
    updatedAt: new Date().toISOString(),
  };

  await db
    .prepare(
      `UPDATE bookings SET
         booking_date = ?, booking_time = ?, party_size = ?,
         seating_preference = ?, special_requests = ?, status = ?,
         seated_at_table = ?, reminder_sent_at = ?, confirmation_sent_at = ?,
         customer_name = ?, customer_email = ?, customer_phone = ?,
         updated_at = ?
       WHERE id = ?`,
    )
    .bind(
      next.date,
      next.time,
      next.partySize,
      next.seatingPreference,
      next.specialRequests ?? null,
      next.status,
      next.seatedAtTable ?? null,
      next.reminderSentAt ?? null,
      next.confirmationSentAt ?? null,
      next.customerName,
      next.customerEmail,
      next.customerPhone,
      next.updatedAt,
      id,
    )
    .run();

  return next;
}

export async function d1ListCustomers(
  db: D1Database,
  search?: string,
): Promise<Customer[]> {
  if (search?.trim()) {
    const q = `%${search.trim().toLowerCase()}%`;
    const { results } = await db
      .prepare(
        `SELECT * FROM customers
         WHERE lower(name) LIKE ? OR lower(email) LIKE ? OR phone LIKE ?
         ORDER BY created_at DESC`,
      )
      .bind(q, q, q)
      .all<CustomerRow>();
    return (results ?? []).map(mapCustomer);
  }
  const { results } = await db
    .prepare(`SELECT * FROM customers ORDER BY created_at DESC`)
    .all<CustomerRow>();
  return (results ?? []).map(mapCustomer);
}

export async function d1UpdateCustomerNotes(
  db: D1Database,
  id: string,
  notes: string,
): Promise<Customer | null> {
  const existing = await db
    .prepare(`SELECT * FROM customers WHERE id = ? LIMIT 1`)
    .bind(id)
    .first<CustomerRow>();
  if (!existing) return null;
  await db
    .prepare(`UPDATE customers SET notes = ? WHERE id = ?`)
    .bind(notes, id)
    .run();
  return mapCustomer({ ...existing, notes });
}

export async function d1ListBookingsForCustomer(
  db: D1Database,
  customerId: string,
): Promise<Booking[]> {
  const { results } = await db
    .prepare(
      `SELECT * FROM bookings WHERE customer_id = ?
       ORDER BY booking_date DESC, booking_time DESC`,
    )
    .bind(customerId)
    .all<BookingRow>();
  return (results ?? []).map(mapBooking);
}

export async function d1GetCustomerStats(
  db: D1Database,
  customerId: string,
): Promise<{ total: number; completed: number; cancelled: number; noShow: number }> {
  const bookings = await d1ListBookingsForCustomer(db, customerId);
  return {
    total: bookings.length,
    completed: bookings.filter((b) => b.status === "completed").length,
    cancelled: bookings.filter((b) => b.status === "cancelled").length,
    noShow: bookings.filter((b) => b.status === "no_show").length,
  };
}

export async function d1GetBookingStats(
  db: D1Database,
  days = 7,
): Promise<{
  total: number;
  confirmed: number;
  seated: number;
  completed: number;
  cancelled: number;
  noShow: number;
  covers: number;
}> {
  const from = new Date();
  from.setDate(from.getDate() - (days - 1));
  const fromStr = from.toISOString().slice(0, 10);
  const bookings = await d1ListBookings(db, { from: fromStr });
  return {
    total: bookings.length,
    confirmed: bookings.filter((b) => b.status === "confirmed").length,
    seated: bookings.filter((b) => b.status === "seated").length,
    completed: bookings.filter((b) => b.status === "completed").length,
    cancelled: bookings.filter((b) => b.status === "cancelled").length,
    noShow: bookings.filter((b) => b.status === "no_show").length,
    covers: bookings
      .filter((b) => b.status !== "cancelled")
      .reduce((sum, b) => sum + b.partySize, 0),
  };
}

export async function d1GetBookingsNeedingReminder(
  db: D1Database,
): Promise<Booking[]> {
  const { results } = await db
    .prepare(
      `SELECT * FROM bookings
       WHERE status = 'confirmed' AND reminder_sent_at IS NULL`,
    )
    .all<BookingRow>();
  return filterBookingsNeedingReminder((results ?? []).map(mapBooking));
}

type BlackoutRow = {
  id: string;
  location_slug: string | null;
  blackout_date: string;
  reason: string | null;
};

function mapBlackout(row: BlackoutRow): BlackoutDate {
  return {
    id: row.id,
    locationSlug: (row.location_slug as LocationSlug) || undefined,
    date: row.blackout_date,
    reason: row.reason || undefined,
  };
}

export async function d1ListBlackoutDates(
  db: D1Database,
  filters?: { locationSlug?: string; from?: string; to?: string },
): Promise<BlackoutDate[]> {
  const clauses: string[] = [];
  const binds: unknown[] = [];
  if (filters?.from) {
    clauses.push("blackout_date >= ?");
    binds.push(filters.from);
  }
  if (filters?.to) {
    clauses.push("blackout_date <= ?");
    binds.push(filters.to);
  }
  const where = clauses.length ? `WHERE ${clauses.join(" AND ")}` : "";
  const { results } = await db
    .prepare(
      `SELECT * FROM blackout_dates ${where} ORDER BY blackout_date ASC`,
    )
    .bind(...binds)
    .all<BlackoutRow>();

  let rows = (results ?? []).map(mapBlackout);
  if (filters?.locationSlug) {
    rows = rows.filter(
      (b) => !b.locationSlug || b.locationSlug === filters.locationSlug,
    );
  }
  return rows;
}

export async function d1CreateBlackoutDate(
  db: D1Database,
  input: { locationSlug?: LocationSlug; date: string; reason?: string },
): Promise<BlackoutDate> {
  const entry: BlackoutDate = {
    id: randomUUID(),
    locationSlug: input.locationSlug,
    date: input.date,
    reason: input.reason?.trim(),
  };
  await db
    .prepare(
      `INSERT INTO blackout_dates (id, location_slug, blackout_date, reason)
       VALUES (?, ?, ?, ?)`,
    )
    .bind(
      entry.id,
      entry.locationSlug ?? null,
      entry.date,
      entry.reason ?? null,
    )
    .run();
  return entry;
}

export async function d1DeleteBlackoutDate(
  db: D1Database,
  id: string,
): Promise<boolean> {
  const result = await db
    .prepare(`DELETE FROM blackout_dates WHERE id = ?`)
    .bind(id)
    .run();
  return (result.meta?.changes ?? 0) > 0;
}
