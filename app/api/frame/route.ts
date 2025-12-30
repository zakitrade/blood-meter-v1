import { NextResponse } from "next/server";

const DOMAIN = "https://blood-meter-v1.vercel.app";

export async function GET() {
  return NextResponse.json({
    image: `${DOMAIN}/og.png`,
    buttons: [
      {
        label: "🩸 Enter BLOOD",
        action: "post",
      },
    ],
    post_url: `${DOMAIN}/api/frame`,
    state: {
      step: "landing",
      blood: 0,
    },
  });
}

export async function POST(req: Request) {
  const body = await req.json();

  const prevBlood =
    typeof body?.state?.blood === "number" ? body.state.blood : 0;

  const blood = Math.min(prevBlood + 10, 100);

  return NextResponse.json({
    image: `${DOMAIN}/og.png`,
    buttons: [
      {
        label: `🩸 Blood Level: ${blood}%`,
        action: "post",
      },
      {
        label: blood >= 100 ? "✅ Join Whitelist" : "⏳ Charging...",
        action: "post",
      },
    ],
    post_url: `${DOMAIN}/api/frame`,
    state: {
      step: "meter",
      blood,
    },
  });
}

