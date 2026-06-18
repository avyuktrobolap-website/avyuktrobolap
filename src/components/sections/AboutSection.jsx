"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ABOUT_SLIDES = [
  {
    src: "/images/dr-training.png",
    alt: "Dr. Abhishek Jaimalani - International fellowship with Prof. Francesco Corcione, Naples, Italy",
    caption: "International fellowship with Prof. Francesco Corcione, Naples, Italy",
    tag: "Fellowship Training",
  },
  {
    src: "/images/with Grandmaster.jpeg",
    alt: "Dr. Abhishek Jaimalani - With Grandmaster Vishwanathan Anand at AWRSC conference, Chennai",
    caption: "With Grandmaster Vishwanathan Anand at AWRSC conference, Chennai",
    tag: "Conferences & Events",
  },
  {
    src: "/images/Vinci robotic platform.jpeg",
    alt: "Dr. Abhishek Jaimalani - Operating on da Vinci robotic platform",
    caption: "Operating on da Vinci robotic platform",
    tag: "Robotic Surgery",
  },
  {
    src: "/images/Vinci robotic platform_2.jpeg",
    alt: "Dr. Abhishek Jaimalani - Operating on da Vinci robotic platform",
    caption: "Operating on da Vinci robotic platform",
    tag: "Robotic Surgery",
  },
  {
    src: "/images/with Dr. C. Palanivelu sir.jpeg",
    alt: "Dr. Abhishek Jaimalani - FMAS convocation, with Dr. C. Palanivelu sir",
    caption: "FMAS convocation, with Dr. C. Palanivelu sir",
    tag: "FMAS Convocation",
  },
  {
    src: "/images/Media coverage.jpeg",
    alt: "Dr. Abhishek Jaimalani - Media coverage",
    caption: "Media coverage",
    tag: "Media & Press",
  },
];

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [fade, setFade] = useState(true);

  const intervalRef = useRef(null);
  const total = ABOUT_SLIDES.length;

  const goNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev >= total - 1 ? 0 : prev + 1));
      setFade(true);
    }, 200);
  };

  const goPrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev <= 0 ? total - 1 : prev - 1));
      setFade(true);
    }, 200);
  };

  useEffect(() => {
    if (isHovered) {
      clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev >= total - 1 ? 0 : prev + 1));
        setFade(true);
      }, 200);
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, [isHovered, total]);

  return (
    <section id="about" className="bg-[#080d1a] py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 lg:gap-5 items-center lg:ml-10">
          {/* ── Left — Slider of images ── */}
          <div className="relative flex flex-col justify-center lg:justify-start">
            {/* Outer decorative border container */}
            <div className="relative w-full max-w-[500px]">
              {/* Gold accent line — top left corner */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-[#F5B800]/60 z-10 pointer-events-none" />
              {/* Gold accent line — bottom right corner */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-[#F5B800]/60 z-10 pointer-events-none" />

              {/* Image wrapper — grayscale → color on hover */}
              <div
                className="relative overflow-hidden group border border-white/10 bg-[#060f1a]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div
                  className="relative w-full aspect-[4/5]"
                  style={{
                    opacity: fade ? 1 : 0,
                    transition: "opacity 0.2s ease-in-out",
                  }}
                >
                  <Image
                    src={ABOUT_SLIDES[currentIndex].src}
                    alt={ABOUT_SLIDES[currentIndex].alt}
                    fill
                    className="object-cover object-center transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0"
                    sizes="(max-width: 768px) 100vw, 500px"
                    priority={currentIndex === 0}
                  />

                  {/* Subtle dark overlay that fades out on hover */}
                  <div className="absolute inset-0 bg-[#080d1a]/25 group-hover:bg-transparent transition-all duration-700 pointer-events-none" />

                  {/* Dark gradient for text legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#080d1a]/95 via-[#080d1a]/70 to-transparent pointer-events-none" />

                  {/* Caption label — overlays the bottom of the image and fades with it */}
                  <div className="absolute bottom-0 left-0 right-0 px-6 py-6 z-10 pointer-events-none">
                    <span className="text-[#F5B800] text-[10px] tracking-[0.2em] uppercase font-semibold block mb-1.5">
                      {ABOUT_SLIDES[currentIndex].tag}
                    </span>
                    <p className="text-white/90 text-[13.5px] leading-relaxed font-medium">
                      {ABOUT_SLIDES[currentIndex].caption}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider controls (Dots and arrow buttons) */}
            <div className="w-full max-w-[500px] flex items-center justify-between mt-6 px-1">
              {/* Pagination Dots */}
              <div className="flex gap-2">
                {ABOUT_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setFade(false);
                      setTimeout(() => {
                        setCurrentIndex(idx);
                        setFade(true);
                      }, 200);
                    }}
                    className={`h-[4px] rounded-full transition-all duration-300 ${
                      idx === currentIndex ? "w-6 bg-[#F5B800]" : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex gap-3">
                <button
                  onClick={goPrev}
                  className="w-9 h-9 rounded-full border border-[#F5B800]/40 text-[#F5B800] flex items-center justify-center hover:bg-[#F5B800] hover:text-[#080d1a] hover:border-[#F5B800] transition-colors duration-300"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={goNext}
                  className="w-9 h-9 rounded-full border border-[#F5B800]/40 text-[#F5B800] flex items-center justify-center hover:bg-[#F5B800] hover:text-[#080d1a] hover:border-[#F5B800] transition-colors duration-300"
                  aria-label="Next slide"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
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
