"use client";

import { useEffect } from "react";
import sdk from "@farcaster/frame-sdk";

export default function MiniApp() {
  useEffect(() => {
    sdk.actions.ready();
  }, []);

  return (
    <main style={{ padding: 24 }}>
      <h1>🩸 BLOOD MINI APP</h1>
      <p>Status: Ready</p>

      <button
        onClick={() => alert("Blood Meter +1 🩸")}
        style={{
          padding: 12,
          marginTop: 12,
          borderRadius: 8,
          background: "red",
          color: "white",
          border: "none",
        }}
      >
        Increase Blood
      </button>
    </main>
  );
}
