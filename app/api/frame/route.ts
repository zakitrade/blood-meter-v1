
import { frames } from "frames.js";

export const runtime = "nodejs";

let globalCount = 0;
const userCount: Record<number, number> = {};

function getStatus(count: number) {
  if (count >= 10) return "Critical";
  if (count >= 5) return "Overclocked";
  if (count >= 3) return "Stable";
  if (count >= 1) return "Fresh Donor";
  return "Dormant";
}

export const POST = frames(async (ctx) => {
  const fid = ctx.message?.fid ?? 0;
  const button = ctx.message?.button;

  if (button === 1 && fid) {
    globalCount += 1;
    userCount[fid] = (userCount[fid] || 0) + 1;
  }

  const status = getStatus(userCount[fid] || 0);
  const percent = Math.min(100, globalCount % 100);

  return {
    image: "https://your-domain.vercel.app/og.png",
    text: `🩸 BLOOD METER\n\nGlobal Level: ${percent}%\nYour Status: ${status}`,
    buttons: [
      { label: "Donate Blood", action: "post" },
      {
        label: "Share",
        action: "link",
        target:
          "https://warpcast.com/~/compose?text=I%20donated%20blood.%20The%20meter%20is%20still%20hungry.%20%F0%9F%A9%B8",
      },
    ],
  };
});
