"use client";
import { useEffect, useState } from "react";

export default function IntroAnimation() {
  const [phase, setPhase] = useState("visible"); // 'visible' | 'slideUp' | 'done'

  useEffect(() => {
    // After 3s (draw 2.5s + small pause), start slide up
    const slideTimer = setTimeout(() => {
      setPhase("slideUp");
    }, 3000);

    // After slide up animation (0.8s), remove from DOM
    const doneTimer = setTimeout(() => {
      setPhase("done");
    }, 3800);

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
      {/* Logo SVG */}
      <div className="w-48 h-48">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          {/* Main A + robotic arm shape */}
          <path
            d="M60 160 L100 40 L140 160 M80 100 L120 100 M100 40 C100 40 130 30 140 50 C150 70 130 90 100 80"
            fill="none"
            stroke="#D4A843"
            strokeDasharray="600"
            strokeDashoffset="600"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            style={{ animation: "drawMain 3s ease forwards 0.5s" }}
          />
          {/* Secondary thread detail */}
          <path
            d="M100 40 Q110 20 120 40 T140 40"
            fill="none"
            opacity="0.6"
            stroke="#D4A843"
            strokeDasharray="100"
            strokeDashoffset="100"
            strokeWidth="1.5"
            style={{ animation: "drawSecondary 1.5s ease forwards 1.5s" }}
          />
        </svg>
      </div>

      {/* Text — appears after logo draw finishes */}
      <div
        style={{
          opacity: 0,
          letterSpacing: "0.25em",
          animation: "fadeInText 0.8s ease forwards 2.6s",
        }}
      >
        <p
          className="text-[#D4A843] text-sm font-semibold tracking-[0.25em] uppercase"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          AVYUKT ROBOLAP
        </p>
        <div
          className="mt-2 mx-auto h-[1px] bg-[#D4A843]"
          style={{
            width: 0,
            animation: "expandLine 0.6s ease forwards 3s",
          }}
        />
      </div>

      <style>{`
        @keyframes drawMain {
          from { stroke-dashoffset: 600; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes drawSecondary {
          from { stroke-dashoffset: 100; }
          to   { stroke-dashoffset: 0; }
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
