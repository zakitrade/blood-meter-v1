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
    },
  });
}

export async function POST(req: Request) {
  const body = await req.json();

  return NextResponse.json({
    image: `${DOMAIN}/og.png`,
    buttons: [
      {
        label: "🧬 Check Blood Meter",
        action: "post",
      },
    ],
    post_url: `${DOMAIN}/api/frame`,
    state: {
      step: "meter",
    },
  });
}
