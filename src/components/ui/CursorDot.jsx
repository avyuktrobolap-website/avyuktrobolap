"use client";

import { useEffect, useRef } from "react";

export default function CursorDot() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Hide default cursor globally
    document.documentElement.style.cursor = "none";

    let mouseX = 0,
      mouseY = 0;
    let ringX = 0,
      ringY = 0;
    let rafId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Dot follows cursor instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };

    // Ring follows with smooth lag
    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
      document.documentElement.style.cursor = "";
    };
  }, []);

  return (
    <>
      {/* Small solid dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ willChange: "transform" }}
      >
        <div className="w-[8px] h-[8px] rounded-full bg-[#F5B800] -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Outer ring with lag */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ willChange: "transform" }}
      >
        <div className="w-[36px] h-[36px] rounded-full border border-[#F5B800]/60 -translate-x-1/2 -translate-y-1/2" />
      </div>
    </>
  );
}
