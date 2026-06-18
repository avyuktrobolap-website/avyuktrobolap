"use client";
import { useEffect, useState } from "react";

export default function IntroAnimation() {
  const [phase, setPhase] = useState("visible"); // 'visible' | 'slideUp' | 'done'

  useEffect(() => {
    // After logo reveal + text fade-in + small pause, start slide up
    const slideTimer = setTimeout(() => {
      setPhase("slideUp");
    }, 2800);

    // After slide up animation (0.8s), remove from DOM
    const doneTimer = setTimeout(() => {
      setPhase("done");
    }, 3600);

    return () => {
      clearTimeout(slideTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        backgroundColor: "#060f1a",
        transform: phase === "slideUp" ? "translateY(-100%)" : "translateY(0)",
        transition:
          phase === "slideUp"
            ? "transform 1s cubic-bezier(0.76, 0, 0.24, 1)"
            : "none",
      }}
    >
      {/* Logo image */}
      <div
        className="w-48 h-auto"
        style={{
          opacity: 0,
          transform: "scale(0.85)",
          filter: "drop-shadow(0 0 18px rgba(212, 168, 67, 0.35))",
          animation: "logoReveal 1s ease forwards 0.3s",
        }}
      >
        <img
          src="/avyukt-icon.png"
          alt="Avyukt Robolap"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Text — appears after logo reveal finishes */}
      <div
        style={{
          opacity: 0,
          letterSpacing: "0.25em",
          paddingLeft: "2.5em",
          animation: "fadeInText 0.8s ease forwards 1.5s",
        }}
      >
        <p
          className="text-[#D4A843] text-sm font-semibold uppercase text-center"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          AVYUKT ROBOLAP
        </p>
        <div
          className="mt-2 mx-auto h-[1px] bg-[#D4A843]"
          style={{
            width: 0,
            animation: "expandLine 0.6s ease forwards 1.9s",
          }}
        />
      </div>

      <style>{`
        @keyframes logoReveal {
          from { opacity: 0; transform: scale(0.85); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeInText {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes expandLine {
          from { width: 0; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}
