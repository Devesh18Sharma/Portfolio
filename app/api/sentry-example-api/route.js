import { NextResponse } from "next/server";

// A faulty API route to test Sentry's error monitoring
export function GET() {
  if (process.env.NODE_ENV === 'development') {
    throw new Error("Sentry Example API Route Error");
  }
  return NextResponse.json({ data: "Testing Sentry Error..." });
}
