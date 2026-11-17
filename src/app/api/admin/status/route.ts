import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth/admin";
import { getEnvStatus } from "@/lib/env";
import { getStorageBackend } from "@/lib/db/store";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const env = getEnvStatus();
  const storage = await getStorageBackend();
  const storageLabel =
    storage === "d1"
      ? "Cloudflare D1"
      : storage === "supabase"
        ? "Supabase"
        : "local file store";

  return NextResponse.json({
    storage: storageLabel,
    services: env,
  });
}
