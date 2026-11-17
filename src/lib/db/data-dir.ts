import path from "path";

/** Writable directory for local JSON fallback (dev / serverless without Supabase). */
export function getDataDir(): string {
  if (process.env.PHO_KENTISH_DATA_DIR) {
    return process.env.PHO_KENTISH_DATA_DIR;
  }

  // Ephemeral serverless runtimes only allow writes under /tmp
  if (
    process.env.VERCEL ||
    process.env.AWS_LAMBDA_FUNCTION_NAME ||
    process.env.CF_PAGES ||
    process.env.CLOUDFLARE_ENV ||
    typeof (globalThis as { WebSocketPair?: unknown }).WebSocketPair !==
      "undefined"
  ) {
    return path.join("/tmp", "pho-kentish-data");
  }

  return path.join(process.cwd(), ".data");
}

export function isServerlessRuntime(): boolean {
  return Boolean(
    process.env.VERCEL ||
      process.env.AWS_LAMBDA_FUNCTION_NAME ||
      process.env.CF_PAGES ||
      process.env.CLOUDFLARE_ENV,
  );
}
