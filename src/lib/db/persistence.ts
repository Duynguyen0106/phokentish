import { isSupabaseConfigured } from "../supabase/client";

/**
 * Bookings can always be created.
 * - Supabase: durable shared store (recommended for production)
 * - Local JSON: works in all environments so guests are never blocked;
 *   on Vercel this uses /tmp (instance-local). A signed receipt cookie
 *   keeps the confirmation page working across instances.
 */
export function canPersistBookings(): boolean {
  return true;
}

export function bookingPersistenceError(): string {
  return "Booking storage is not configured. Add Supabase credentials to .env.local.";
}

export function isUsingDurableBookingStore(): boolean {
  return isSupabaseConfigured();
}
