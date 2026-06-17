"use client";
import { useState } from "react";

const videos = [
  {
    id: 1,
    youtubeId: "ZcigAo8GTVU",
    title: "What to expect after laparoscopic herniasurgery?",
    featured: true,
  },
  {
    id: 2,
    youtubeId: "59klh3e_D8A",
    title: "Hernia surgery ke baad routine life kab start kar sakte hain?",
  },
  {
    id: 3,
    youtubeId: "AqLB0hBJfUg",
    title: "Can hernia come back after surgery?",
  },
  {
    id: 4,
    youtubeId: "WRB-bzAE2E0",
    title: "Is hernia treatment possible without surgery?",
  },
  {
    id: 5,
    youtubeId: "gN_qL8lUEbs",
    title: "Hernia kahan-kahan ho sakta he?",
  },
];

const featured = videos.find((v) => v.featured);
const rest = videos.filter((v) => !v.featured);

function getThumbnail(youtubeId) {
  return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
}

function PlayIcon() {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="26" cy="26" r="26" fill="#D4A843" fillOpacity="0.15" />
      <circle cx="26" cy="26" r="25" stroke="#D4A843" strokeWidth="1.5" />
      <polygon points="21,17 38,26 21,35" fill="#D4A843" />
    </svg>
  );
}

function SmallPlayIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="18" cy="18" r="18" fill="#D4A843" fillOpacity="0.15" />
      <circle cx="18" cy="18" r="17" stroke="#D4A843" strokeWidth="1.5" />
      <polygon points="15,11 26,18 15,25" fill="#D4A843" />
    </svg>
  );
}

function FeaturedCard({ video }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block relative rounded-sm overflow-hidden group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-video overflow-hidden">
        <img
          src={getThumbnail(video.youtubeId)}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Dark overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background:
              "linear-gradient(to top, #060f1a 0%, rgba(6,15,26,0.45) 50%, rgba(6,15,26,0.2) 100%)",
            opacity: hovered ? 0.85 : 0.7,
          }}
        />

        {/* Gold left accent */}
        <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#D4A843]" />

        {/* Play button */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-transform duration-300"
          style={{ transform: hovered ? "scale(1.1)" : "scale(1)" }}
        >
          <PlayIcon />
        </div>

        {/* Title bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-[#D4A843] text-xs font-semibold tracking-[0.2em] uppercase mb-2">
            Featured
          </p>
          <h3 className="text-white text-xl md:text-2xl font-bold leading-snug">
            {video.title}
          </h3>
        </div>
      </div>
    </a>
  );
}

function SmallCard({ video }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-4 items-start group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail */}
      <div className="relative flex-shrink-0 w-36 md:w-44 aspect-video rounded-sm overflow-hidden">
        <img
          src={getThumbnail(video.youtubeId)}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            backgroundColor: "rgba(6,15,26,0.45)",
            opacity: hovered ? 0.6 : 0.4,
          }}
        />
        {/* Gold left accent */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#D4A843]" />

        {/* Play */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-transform duration-300"
          style={{ transform: hovered ? "scale(1.1)" : "scale(1)" }}
        >
          <SmallPlayIcon />
        </div>
      </div>

      {/* Title */}
      <div className="flex-1 pt-1">
        <p
          className="text-white text-sm font-medium leading-snug transition-colors duration-200"
          style={{ color: hovered ? "#D4A843" : "white" }}
        >
          {video.title}
        </p>
        <p className="text-gray-500 text-xs mt-2 tracking-widest uppercase">
          Watch Now
        </p>
      </div>
    </a>
  );
}

export default function EducationSection() {
  return (
    <section id="education" className="bg-[#060f1a] py-15 px-6">
      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-[#D4A843] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
          Patient Education
        </p>
        <h2 className="text-white text-4xl md:text-5xl font-bold font-serif">
          Doctor's Corner
        </h2>
        <div className="mx-auto mt-4 h-[1px] w-16 bg-[#D4A843]" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left — Featured video */}
        <FeaturedCard video={featured} />

        {/* Right — Small video list */}
        <div className="flex flex-col gap-6">
          {rest.map((video) => (
            <SmallCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}
