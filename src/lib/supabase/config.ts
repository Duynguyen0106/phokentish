/**
 * Supabase is optional. Without env vars the admin/booking stores use local JSON.
 * For production on Vercel, set NEXT_PUBLIC_SUPABASE_URL + keys (see .env.example).
 */
export const DEFAULT_SUPABASE_URL = "";

export const DEFAULT_SUPABASE_PUBLISHABLE_KEY = "";

export function resolveSupabaseUrl(): string {
  return process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() || DEFAULT_SUPABASE_URL;
}

export function resolveSupabasePublishableKey(): string {
  return (
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?.trim() ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim() ||
    DEFAULT_SUPABASE_PUBLISHABLE_KEY
  );
}

export function isUsingDefaultSupabaseConfig(): boolean {
  return (
    !process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() ||
    !(
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?.trim() ||
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim()
    )
  );
}
