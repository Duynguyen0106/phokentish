import { isSupabaseConfigured } from "../supabase/client";

/**
 * Bookings can always be created.
 * - D1 (Cloudflare): durable shared store for Workers
 * - Supabase: durable shared store
 * - Local JSON: works in all environments so guests are never blocked;
 *   on ephemeral runtimes this uses /tmp (instance-local). A signed receipt
 *   cookie keeps the confirmation page working across instances.
 */
export function canPersistBookings(): boolean {
  return true;
}

export function bookingPersistenceError(): string {
  return "Booking storage is not configured. Deploy with Cloudflare D1 or add Supabase credentials.";
}

/** Sync hint — prefer getStorageBackend() for accurate runtime detection. */
export function isUsingDurableBookingStore(): boolean {
  return (
    isSupabaseConfigured() ||
    Boolean(process.env.CF_PAGES || process.env.CLOUDFLARE_ENV) ||
    process.env.NEXT_PUBLIC_SITE_URL?.includes("workers.dev") === true
  );
}
