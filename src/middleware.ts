import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import {
  type NextFetchEvent,
  type NextRequest,
  NextResponse,
} from "next/server";

const maxRequests = 100;
const duration = "1m";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.cachedFixedWindow(maxRequests, duration),
  ephemeralCache: new Map(),
  analytics: true,
});

export default async function middleware(
  request: NextRequest,
  event: NextFetchEvent,
): Promise<Response | undefined> {
  console.log("Middleware hitted");

  const ip = request.ip ?? "127.0.0.1";

  const { success, pending, limit, reset, remaining } = await ratelimit.limit(
    `ratelimit_middleware_${ip}`,
  );
  event.waitUntil(pending);

  const res = success
    ? NextResponse.next()
    : NextResponse.json(
        { error: "Rate limit exceeded" },
        { status: 429, statusText: "Too Many Requests" },
      );

  res.headers.set("X-RateLimit-Limit", limit.toString());
  res.headers.set("X-RateLimit-Remaining", remaining.toString());
  res.headers.set("X-RateLimit-Reset", reset.toString());
  return res;
}

export const config = {};
