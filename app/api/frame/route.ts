import { NextResponse } from "next/server";

/**
 * Simple Farcaster Frame-compatible endpoint
 * Safe for Vercel + Next.js 14
 * No external dependencies
 */

export async function GET() {
  return NextResponse.json({
    message: "BLOOD Meter API is alive 🩸",
    status: "ok",
  });
}

export async function POST() {
  return NextResponse.json({
    version: "vNext",
    image: "https://blood-meter-v1.vercel.app/og.png",
    buttons: [
      {
        label: "Donate Blood 🩸",
        action: "post",
      },
    ],
  });
}

