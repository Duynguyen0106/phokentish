-- Pho Kentish durable booking store (Cloudflare D1 / SQLite)

CREATE TABLE IF NOT EXISTS customers (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  notes TEXT,
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS bookings (
  id TEXT PRIMARY KEY,
  reference_code TEXT NOT NULL UNIQUE,
  location_slug TEXT NOT NULL,
  customer_id TEXT,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  booking_date TEXT NOT NULL,
  booking_time TEXT NOT NULL,
  party_size INTEGER NOT NULL,
  seating_preference TEXT NOT NULL DEFAULT 'no_preference',
  special_requests TEXT,
  status TEXT NOT NULL DEFAULT 'confirmed',
  source TEXT NOT NULL DEFAULT 'website',
  reminder_sent_at TEXT,
  confirmation_sent_at TEXT,
  seated_at_table TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS blackout_dates (
  id TEXT PRIMARY KEY,
  location_slug TEXT,
  blackout_date TEXT NOT NULL,
  reason TEXT
);

CREATE INDEX IF NOT EXISTS bookings_date_location_idx
  ON bookings (location_slug, booking_date, booking_time);
CREATE INDEX IF NOT EXISTS bookings_status_idx ON bookings (status);
CREATE INDEX IF NOT EXISTS customers_email_idx ON customers (email);
CREATE INDEX IF NOT EXISTS customers_phone_idx ON customers (phone);
CREATE INDEX IF NOT EXISTS blackout_date_idx ON blackout_dates (blackout_date);
