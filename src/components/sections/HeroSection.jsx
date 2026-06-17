"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// ─── Stat counter hook ───────────────────────────────────────────────────────
function useCountUp(target, duration = 1800, start = false) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return value;
}

// ─── Single stat item ─────────────────────────────────────────────────────────
function StatItem({ value, suffix = "+", label, started }) {
  const count = useCountUp(value, 1800, started);
  return (
    <div className="flex flex-col gap-1">
      <span
        className="text-[#F5B800] text-3xl md:text-4xl font-bold leading-none"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {count}
        {suffix}
      </span>
      <span className="text-white/50 text-[11px] tracking-[0.18em] uppercase">
        {label}
      </span>
    </div>
  );
}

// ─── Specialty badge ──────────────────────────────────────────────────────────
function SpecialtyBadge() {
  return (
    <div className="inline-flex items-center gap-2 border border-[#F5B800]/50 px-4 py-2 w-fit">
      <span className="w-[6px] h-[6px] rounded-full bg-[#F5B800]" />
      <span className="text-white text-[11px] tracking-[0.22em] uppercase font-medium">
        Robotic &amp; Advanced Laparoscopic Surgery
      </span>
    </div>
  );
}

// ─── Gold Standard Badge ──────────────────────────────────────────────────────
function GoldStandardBadge() {
  return (
    <div className="inline-flex items-center gap-4 border border-[#F5B800]/30 bg-[#F5B800]/5 px-6 py-3 w-fit lg:w-[85%]">
      {/* <div className="w-[3px] h-12 bg-[#F5B800] shrink-0" /> */}
      <div className="flex flex-col leading-tight gap-[2px]">
        <span className="text-white/70 text-[13px] tracking-[0.2em] uppercase text-center">
          Robotic &amp; Advanced Laparoscopic Surgery
        </span>
        <span className="text-[#F5B800] lg:text-[36px] text-[20px] font-bold tracking-[0.12em] uppercase">
          The Gold Standard
        </span>
        <span className="text-white/80 text-[15px] tracking-[0.1em] text-center">
          for any abdominal condition
        </span>
      </div>
    </div>
    // <div className="inline-flex items-center gap-3 border border-[#F5B800]/30 bg-[#F5B800]/5 px-4 py-2 w-fit">
    //   <div className="w-[2px] h-9 bg-[#F5B800] shrink-0" />
    //   <div className="flex flex-col leading-tight">
    //     <span className="text-white/40 text-[9px] tracking-[0.2em] uppercase">
    //       Laparoscopic Surgery
    //     </span>
    //     <span className="text-[#F5B800] text-[15px] font-bold tracking-[0.12em] uppercase">
    //       The Gold Standard
    //     </span>
    //     <span className="text-white/40 text-[9px] tracking-[0.1em]">
    //       for any abdominal condition
    //     </span>
    //   </div>
    // </div>
  );
}

// ─── Specialty strip icons (SVGs matching the banner) ─────────────────────────
const SPECIALTY_ICONS = [
  {
    label: "Hernia",
    serviceId: "service-hernia-repair",
    svg: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
      >
        <path
          d="M20 6C14 6 10 10.5 10 16c0 4 2.5 7 4 10.5h12C27.5 23 30 20 30 16c0-5.5-4-10-10-10z"
          fill="#F5B800"
          fillOpacity="0.15"
          stroke="#F5B800"
          strokeWidth="1.5"
        />
        <path
          d="M15 26.5c0 2.5 1 5 5 5s5-2.5 5-5"
          stroke="#F5B800"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M17 16c0-1.7 1.3-3 3-3"
          stroke="#F5B800"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Gall Bladder",
    serviceId: "service-gallbladder",
    svg: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
      >
        <path
          d="M20 7v5"
          stroke="#F5B800"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M16 10h8"
          stroke="#F5B800"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <ellipse
          cx="20"
          cy="22"
          rx="7"
          ry="9"
          fill="#F5B800"
          fillOpacity="0.15"
          stroke="#F5B800"
          strokeWidth="1.5"
        />
        <path
          d="M16 20c1-2 3-3 5-2"
          stroke="#F5B800"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Appendix",
    serviceId: "service-appendix",
    svg: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
      >
        <rect
          x="14"
          y="6"
          width="12"
          height="16"
          rx="6"
          fill="#F5B800"
          fillOpacity="0.15"
          stroke="#F5B800"
          strokeWidth="1.5"
        />
        <path
          d="M20 22 Q24 28 22 34"
          stroke="#F5B800"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Tumor",
    serviceId: "service-tumor-surgery",
    svg: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
      >
        <circle
          cx="20"
          cy="20"
          r="8"
          fill="#F5B800"
          fillOpacity="0.15"
          stroke="#F5B800"
          strokeWidth="1.5"
        />
        <circle cx="20" cy="20" r="3" fill="#F5B800" fillOpacity="0.4" />
        <circle
          cx="26"
          cy="14"
          r="2.5"
          fill="#F5B800"
          fillOpacity="0.3"
          stroke="#F5B800"
          strokeWidth="1"
        />
        <circle
          cx="13"
          cy="26"
          r="1.8"
          fill="#F5B800"
          fillOpacity="0.3"
          stroke="#F5B800"
          strokeWidth="1"
        />
        <path
          d="M23 17 L24.5 15"
          stroke="#F5B800"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M17 23 L15 25"
          stroke="#F5B800"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Trauma",
    serviceId: "service-emergency-surgery",
    svg: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
      >
        <path
          d="M22 6l-4 10H12l8 6-3 12 11-16h-7L22 6z"
          fill="#F5B800"
          fillOpacity="0.15"
          stroke="#F5B800"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Emergency",
    serviceId: "service-emergency-surgery",
    svg: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
      >
        <path
          d="M20 6L6 32h28L20 6z"
          fill="#F5B800"
          fillOpacity="0.15"
          stroke="#F5B800"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <line
          x1="20"
          y1="18"
          x2="20"
          y2="25"
          stroke="#F5B800"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="20" cy="28.5" r="1.2" fill="#F5B800" />
      </svg>
    ),
  },
  {
    label: "Bariatric",
    serviceId: "service-bariatric-surgery",
    svg: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
      >
        <path
          d="M14 10 Q12 18 14 24 Q16 30 20 31 Q24 30 26 24 Q28 18 26 10 Q23 7 20 7 Q17 7 14 10z"
          fill="#F5B800"
          fillOpacity="0.15"
          stroke="#F5B800"
          strokeWidth="1.5"
        />
        <path
          d="M17 18 Q20 21 23 18"
          stroke="#F5B800"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Robotic",
    serviceId: "service-robotic-surgery",
    hidden: true,
    svg: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
      >
        <rect
          x="12"
          y="14"
          width="16"
          height="14"
          rx="3"
          fill="#F5B800"
          fillOpacity="0.15"
          stroke="#F5B800"
          strokeWidth="1.5"
        />
        <circle cx="17" cy="21" r="2" fill="#F5B800" fillOpacity="0.5" />
        <circle cx="23" cy="21" r="2" fill="#F5B800" fillOpacity="0.5" />
        <path
          d="M16 14v-3M24 14v-3"
          stroke="#F5B800"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12 24H8M28 24h4"
          stroke="#F5B800"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

// ─── Specialty Strip ──────────────────────────────────────────────────────────
function SpecialtyStrip() {
  const handleScroll = (serviceId) => {
    const el = document.getElementById(serviceId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="grid grid-cols-4 sm:grid-cols-7 gap-[1px] border border-[#F5B800]/20 w-fit bg-[#F5B800]/20">
      {SPECIALTY_ICONS.map((item) => (
        <button
          key={item.label}
          onClick={() => handleScroll(item.serviceId)}
          className={`flex flex-col items-center gap-2 px-3 py-3 bg-[#080d1a] hover:bg-[#F5B800]/10 transition-colors duration-200 cursor-pointer min-w-[60px] ${item.hidden ? "sm:hidden" : ""}`}
        >
          {item.svg}
          <span className="text-white/50 text-[8px] tracking-[0.12em] uppercase text-center leading-tight font-medium">
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function HeroSection() {
  const router = useRouter();
  const sectionRef = useRef(null);
  const [statsStarted, setStatsStarted] = useState(false);

  // Start counter animation when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleBooking = () => {
    router.push("/booking");
  };

  return (
    <>
      <section
        id="hero"
        ref={sectionRef}
        className="relative min-h-screen flex items-center overflow-hidden bg-[#080d1a]"
      >
        {/* ── Background image ── */}
        {/* Replace src with your actual background image path e.g. /images/hero/hero-bg.jpg */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt=""
            fill
            priority
            className="object-cover object-center opacity-30"
            sizes="100vw"
          />
          {/* Dark gradient overlay — stronger on left where text lives */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#080d1a] via-[#080d1a]/80 to-[#080d1a]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-transparent to-transparent" />
        </div>

        {/* ── Content ── */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-10 md:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            {/* Left — Text content */}
            <div className="flex flex-col gap-7">
              {/* <SpecialtyBadge /> */}

              <GoldStandardBadge />
              {/* <SpecialtyStrip /> */}

              {/* Headline */}
              <div className="flex flex-col gap-2 max-w-[480px]">
                <h1
                  className="text-white text-3xl sm:text-4xl md:text-2xl font-bold leading-[1.1] tracking-tight "
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Precision in Motion.
                </h1>
                <h1
                  className="text-[#F5B800] text-3xl sm:text-4xl md:text-2xl font-bold leading-[1.1] tracking-tight italic"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Excellence in Outcomes.
                </h1>
              </div>

              {/* Doctor info card — gold left border */}
              <div className="border-[#F5B800] flex flex-col gap-2 max-w-[480px]">
                <p
                  className="text-[#F5B800] text-[40px] font-semibold italic"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Dr. Abhishek Jaimalani
                </p>
                <p
                  className="text-[#F5B800] text-[40px] font-semibold italic"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  (Maheshwari)
                </p>
                <p className="text-white/80 text-[15px] tracking-[0.1em] uppercase mb-5">
                  MS, FMAS, FMITGO (Italy)
                </p>
                <SpecialtyStrip />

                {/* <p className="text-white/60 text-[14px] leading-relaxed mt-1">
                  Pioneering robotic surgical techniques with a focus on
                  minimally invasive precision and rapid patient recovery.
                </p> */}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mt-1">
                <button
                  onClick={handleBooking}
                  className="bg-[#F5B800] text-[#080d1a] text-[15px] tracking-[0.2em] font-extrabold uppercase px-8 py-6 hover:bg-[#F5B800]/90 transition-colors duration-200 cursor-pointer border-none"
                >
                  Book Appointment
                </button>
                <button
                  onClick={() => {
                    const el = document.querySelector("#expertise");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-transparent text-white/80 text-[15px] tracking-[0.2em] font-extrabold uppercase px-8 py-6 border border-white/20 hover:border-[#F5B800]/50 hover:text-white transition-all duration-200 cursor-pointer"
                >
                  View Expertise
                </button>
              </div>

              {/* Stats row */}
              {/* <div className="flex flex-wrap gap-8 pt-4 mt-2 border-t border-white/10">
                <StatItem
                  value={500}
                  suffix="+"
                  label="Surgeries Performed"
                  started={statsStarted}
                />
                <StatItem
                  value={12}
                  suffix="+"
                  label="Years Experience"
                  started={statsStarted}
                />
                <StatItem
                  value={98}
                  suffix="%"
                  label="Patient Satisfaction"
                  started={statsStarted}
                />
              </div> */}
            </div>

            {/* Right — Doctor photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-[300px] h-[380px] sm:w-[360px] sm:h-[450px] md:w-[420px] md:h-[520px] group">
                {/* Gold border frame */}
                {/* <div className="absolute inset-0 border border-[#F5B800]/25 translate-x-3 translate-y-3" /> */}
                {/* Layer 1 — innermost, tight */}
                <div className="absolute inset-0 border border-[#F5B800]/60" />
                {/* Layer 2 — medium offset */}
                <div className="absolute inset-0 border border-[#F5B800]/35 translate-x-3 translate-y-3" />
                {/* Layer 3 — outermost, hover expands */}
                <div className="absolute inset-0 border border-[#F5B800]/20 translate-x-6 translate-y-6 transition-all duration-500 group-hover:translate-x-8 group-hover:translate-y-8 group-hover:border-[#F5B800]/40" />

                {/* Photo container */}
                <div className="relative w-full h-full bg-[#111827] overflow-hidden">
                  {/* 
                  Replace src below with the actual doctor image path
                  e.g. /images/doctors/dr-abhishek.jpg
                  once you have the real photo
                */}
                  <div className="w-full h-full flex items-center justify-center bg-[#111827]">
                    <div className="flex flex-col items-center gap-3 text-white/20">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <span className="text-[11px] tracking-widest uppercase">
                        Doctor Photo
                      </span>
                    </div>
                  </div>

                  {/* Uncomment below and remove the placeholder div above once you have the real image */}

                  <Image
                    src="/images/dr-abhishek.jpeg"
                    alt="Dr. Abhishek Jaimalani"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 300px, 420px"
                  />
                </div>

                {/* Subtle gold glow bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#F5B800]/10 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to explore */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="text-white/30 text-[10px] tracking-[0.25em] uppercase">
            Scroll to Explore
          </span>
          <svg
            className="text-white/30 animate-bounce"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div> */}

        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#080d1a] to-transparent z-10 pointer-events-none" />
      </section>

      {/* Stats plate — separate dark band */}
      <div className="bg-[#050a14] border-t border-b border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatItem
              value={5000}
              suffix="+"
              label="Procedures"
              started={statsStarted}
            />
            <StatItem
              value={12}
              suffix=""
              label="Years Exp"
              started={statsStarted}
            />
            <StatItem
              value={100}
              suffix=""
              label="% Precision"
              started={statsStarted}
            />
            <StatItem
              value={50}
              suffix="+"
              label="Variety of Surgery"
              started={statsStarted}
            />
          </div>
        </div>
      </div>
    </>
  );
}
