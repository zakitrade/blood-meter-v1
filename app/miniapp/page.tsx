"use client";

import { useEffect } from "react";

export default function MiniApp() {
  useEffect(() => {
    // IMPORTANT: Farcaster Mini App ready signal
    if (typeof window !== "undefined") {
      // @ts-ignore
      window.farcaster?.actions?.ready?.();
    }
  }, []);

  return (
    <main
      style={{
        padding: 24,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1>🩸 BLOOD MINI APP</h1>
      <p>Status: App Loaded</p>
      <button
        onClick={() => alert("Blood +1 🩸")}
        style={{
          padding: 12,
          borderRadius: 8,
          background: "#b30000",
          color: "#fff",
          border: "none",
          marginTop: 12,
        }}
      >
        Increase Blood
      </button>
    </main>
  );
}

