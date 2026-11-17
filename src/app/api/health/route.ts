import { NextResponse } from "next/server";
import { getEnvStatus } from "@/lib/env";
import { getStorageBackend } from "@/lib/db/store";

export async function GET() {
  const env = getEnvStatus();
  const storage = await getStorageBackend();

  return NextResponse.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    storage,
    services: {
      database: storage === "d1" || storage === "supabase" ? "configured" : env.database,
      email: env.email,
      sms: env.sms,
      admin: env.admin,
      cron: env.cron,
    },
    productionReady: env.productionReady || storage === "d1",
    warnings: env.warnings,
  });
}
