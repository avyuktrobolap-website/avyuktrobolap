"use client";

import Image from "next/image";

const HIGHLIGHTS = [
  "Fellowship in Minimally Invasive Surgery (Italy)",
  "Advanced Robotic GI Surgery Training",
  "Pioneer in Day-Care Laparoscopic Procedures",
];

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 mt-[2px]"
    >
      <circle cx="12" cy="12" r="11" stroke="#F5B800" strokeWidth="1.5" />
      <path
        d="M7.5 12l3 3 6-6"
        stroke="#F5B800"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#080d1a] py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 lg:gap-5 items-center lg:ml-10">
          {/* ── Left — B&W image that reveals colour on hover ── */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Outer decorative border */}
            <div className="relative w-full max-w-[500px]">
              {/* Gold accent line — top left corner */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-[#F5B800]/60 z-10 pointer-events-none" />
              {/* Gold accent line — bottom right corner */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-[#F5B800]/60 z-10 pointer-events-none" />

              {/* Image wrapper — grayscale → color on hover */}
              <div className="relative overflow-hidden group border border-white/10">
                <div className="relative w-full aspect-[4/5]">
                  <Image
                    src="/images/dr-training.png"
                    alt="Dr. Abhishek Jaimalani during international surgical training"
                    fill
                    className="object-cover object-center transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />

                  {/* Subtle dark overlay that fades out on hover */}
                  <div className="absolute inset-0 bg-[#080d1a]/20 group-hover:bg-transparent transition-all duration-700 pointer-events-none" />
                </div>

                {/* Hover label */}
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-[#080d1a]/80 to-transparent px-5 py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[#F5B800] text-[11px] tracking-[0.2em] uppercase">
                    International Fellowship Training
                  </p>
                </div>
              </div>

              {/* Placeholder — remove this div once you add the real image */}
              {/*
              <div className="w-full aspect-[4/5] bg-[#111827] flex items-center justify-center border border-white/10">
                <div className="flex flex-col items-center gap-3 text-white/20">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="m21 15-5-5L5 21" />
                  </svg>
                  <span className="text-[11px] tracking-widest uppercase">Training Photo</span>
                </div>
              </div>
              */}
            </div>
          </div>

          {/* ── Right — Text content ── */}
          <div className="flex flex-col gap-7">
            {/* Gold rule */}
            <div className="w-24 h-[2px] bg-[#F5B800]" />

            {/* Heading */}
            <h2
              className="text-white text-3xl sm:text-4xl md:text-[42px] font-bold leading-[1.15]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              International Training
              <br />
              <span>&amp; Excellence</span>
            </h2>

            {/* Body copy */}
            <p className="text-white/55 text-[15px] leading-[1.85] max-w-[480px]">
              With advanced fellowships from prestigious institutions in Italy
              and across India, Dr. Abhishek Jaimalani brings world-class
              robotic expertise to every surgical procedure. His commitment to
              the &ldquo;Gold Standard&rdquo; of surgical care is reflected in
              his precision-first approach.
            </p>

            {/* Highlight bullets */}
            <ul className="flex flex-col gap-4">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-white/75 text-[14px] leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Download CV */}
            <div className="pt-2">
              <a
                href="/Abhishek_resume.pdf"
                download
                className="inline-flex items-center gap-3 text-[#F5B800] text-[12px] tracking-[0.2em] uppercase font-semibold border-b border-[#F5B800]/40 pb-1 hover:border-[#F5B800] transition-colors duration-200 group"
              >
                <span>Download Curriculum Vitae (cv)</span>
                <span className="group-hover:translate-y-[2px] transition-transform duration-200">
                  <DownloadIcon />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
