import type { D1Database } from "@cloudflare/workers-types";

export type CloudflareEnv = {
  DB?: D1Database;
  ADMIN_PASSWORD?: string;
  NEXT_PUBLIC_SITE_URL?: string;
  STAFF_NOTIFICATION_EMAIL?: string;
  BOOKING_RECEIPT_SECRET?: string;
  CRON_SECRET?: string;
  RESEND_API_KEY?: string;
  EMAIL_FROM?: string;
};

/** Returns the D1 binding when running on Cloudflare (Workers / OpenNext). */
export async function getD1(): Promise<D1Database | null> {
  try {
    const { getCloudflareContext } = await import("@opennextjs/cloudflare");
    const { env } = getCloudflareContext();
    const db = (env as CloudflareEnv | undefined)?.DB;
    return db ?? null;
  } catch {
    return null;
  }
}

export async function isD1Configured(): Promise<boolean> {
  return Boolean(await getD1());
}
