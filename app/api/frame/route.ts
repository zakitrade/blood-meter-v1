export const runtime = "edge";

export async function POST() {
  return new Response(
    JSON.stringify({
      version: "vNext",
      image: "blood-meter-v1.vercel.app/og.png",
      buttons: [
        {
          label: "Donate Blood",
          action: "post"
        }
      ]
    }),
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}

