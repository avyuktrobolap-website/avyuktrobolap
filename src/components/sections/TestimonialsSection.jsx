"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/constants/testimonials";

const StarRating = ({ rating }) => (
  <div className="flex gap-1 mb-5">
    {Array.from({ length: rating }).map((_, i) => (
      <svg
        key={i}
        className="w-5 h-5 text-[#D4A843] fill-[#D4A843]"
        viewBox="0 0 20 20"
      >
        <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ testimonial }) => (
  <div className="flex-1 min-w-0 bg-[#0d1b2e] border border-[#1e2d42] rounded-sm p-7 flex flex-col gap-4 relative min-h-[350px]">
    {/* Gold left accent bar */}
    <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#D4A843] rounded-full" />

    <StarRating rating={testimonial.rating} />

    <p className="text-gray-300 text-lg leading-relaxed italic flex-1">
      "{testimonial.review}"
    </p>

    <p className="text-[#D4A843] text-md font-semibold tracking-[0.15em] uppercase mt-2">
      {testimonial.name}
    </p>
  </div>
);

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [fade, setFade] = useState(true);

  const intervalRef = useRef(null);

  const total = testimonials.length;
  const visibleCount = 3;
  // Total unique starting positions
  const maxIndex = total - visibleCount;

  //   const goNext = () => {
  //     setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  //   };
  const goNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      setFade(true);
    }, 200);
  };

  //   const goPrev = () => {
  //     setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  //   };
  const goPrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
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
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
        setFade(true);
      }, 200);
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, [isHovered]);

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + visibleCount,
  );

  return (
    <section
      id="testimonial"
      className="bg-[#060f1a] py-20 px-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-[#D4A843] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
          Patient Stories
        </p>
        <h2 className="text-white text-4xl md:text-5xl font-bold font-serif">
          Trusted by Hundreds
        </h2>
      </div>

      {/* Dot indicator */}
      {/* <div className="flex justify-center mb-10">
        <div className="w-2 h-2 rounded-full bg-[#D4A843]" />
      </div> */}

      {/* Cards */}
      <div className="max-w-6xl mx-auto">
        {/* <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500"
          style={{
            opacity: fade ? 1 : 0,
            transition: "opacity 0.2s ease-in-out",
          }}
        >
          {visibleTestimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div> */}

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          style={{
            opacity: fade ? 1 : 0,
            transition: "opacity 0.2s ease-in-out",
          }}
        >
          {visibleTestimonials.map((t, i) => (
            <div
              key={t.id}
              className={`transition-all duration-300 ${i !== 1 ? "hidden md:block" : ""}`}
              style={{
                filter: i === 1 ? "none" : "blur(2px)",
                opacity: i === 1 ? 1 : 0.25,
                transform: i === 1 ? "scale(1.02)" : "scale(0.97)",
              }}
            >
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={goPrev}
            className="w-11 h-11 rounded-full border border-[#D4A843] text-[#D4A843] flex items-center justify-center hover:bg-[#D4A843] hover:text-[#060f1a] transition-colors duration-300"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goNext}
            className="w-11 h-11 rounded-full border border-[#D4A843] text-[#D4A843] flex items-center justify-center hover:bg-[#D4A843] hover:text-[#060f1a] transition-colors duration-300"
            aria-label="Next testimonials"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
