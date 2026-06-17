"use client";

import { useState } from "react";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// SERVICES DATA — edit descriptions here, or add new services to the array
// Each service needs: id, title, shortDesc, fullDesc, icon (component name)
// ─────────────────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    id: 1,
    title: "Robotic Surgery",
    shortDesc:
      "Unparalleled precision using state-of-the-art robotic platforms for complex abdominal procedures.",
    fullDesc:
      "Our robotic surgery program leverages the latest da Vinci and Hugo RAS systems to perform highly complex abdominal procedures with sub-millimeter precision. Patients benefit from smaller incisions, reduced blood loss, minimal post-operative pain, and faster recovery compared to traditional open surgery. Dr. Jaimalani is among India's leading experts in robotic-assisted GI and colorectal procedures.",
    icon: "RoboticIcon",
  },
  {
    id: 2,
    title: "Laparoscopy",
    shortDesc:
      "Advanced keyhole surgeries for gallbladder, hernia, and appendix with minimal hospital stay.",
    fullDesc:
      "Laparoscopic surgery offers patients a minimally invasive alternative to open procedures, using small incisions and a camera-guided approach. Dr. Jaimalani has performed over 500 laparoscopic procedures across GI, hernia, and bariatric categories. Most patients are discharged within 24–48 hours and return to normal activity within a week.",
    icon: "LaparoscopyIcon",
  },
  {
    id: 3,
    title: "Bariatric Surgery",
    shortDesc:
      "Sustainable weight loss solutions through advanced metabolic and gastric surgical techniques.",
    fullDesc:
      "Bariatric and metabolic surgery goes beyond weight loss — it addresses type 2 diabetes, hypertension, and sleep apnea linked to obesity. Procedures offered include laparoscopic sleeve gastrectomy, Roux-en-Y gastric bypass, and mini gastric bypass. Each patient receives a personalised pre- and post-operative care plan to ensure long-term success.",
    icon: "BariatricIcon",
  },
  {
    id: 4,
    title: "Hernia Repair",
    shortDesc:
      "Tension-free mesh repairs for all hernia types using minimally invasive laparoscopic techniques.",
    fullDesc:
      "Hernia repair is one of the most common surgical procedures, but technique matters enormously for long-term outcomes. Dr. Jaimalani performs TEP, eTEP-RS and TAPP laparoscopic repairs using lightweight mesh, resulting in significantly lower recurrence rates, minimal post-operative pain, and same-day or next-day discharge for most patients.",
    icon: "HerniaIcon",
  },
  {
    id: 5,
    title: "Gallbladder",
    shortDesc:
      "Laparoscopic cholecystectomy with same-day discharge and minimal scarring.",
    fullDesc:
      "Gallbladder removal (cholecystectomy) is performed entirely laparoscopically, requiring just 3–4 small incisions. The procedure typically takes under an hour and patients are discharged the same day or the following morning. Dr. Jaimalani also manages complex cases involving CBD stones, requiring advanced ERCP and bile duct exploration skills.",
    icon: "GallbladderIcon",
  },
  {
    id: 6,
    title: "Appendix",
    shortDesc:
      "Emergency and elective laparoscopic appendectomy with rapid recovery and low complication rates.",
    fullDesc:
      "Appendectomy is performed laparoscopically in both emergency and interval (elective) settings. The minimally invasive approach reduces infection risk, speeds up recovery, and leaves virtually no visible scarring. Dr. Jaimalani's team is available 24/7 for acute appendicitis cases and also manages complex presentations including periappendiceal abscess.",
    icon: "AppendixIcon",
  },
  {
    id: 7,
    title: "Laser Colo-Proctology",
    shortDesc:
      "Minimally invasive laser treatment for piles, fissures, fistulas, and pilonidal sinus with faster recovery.",
    fullDesc:
      "Laser Colo-Proctology utilizes cutting-edge laser and stapled technology to treat piles (hemorrhoids), anal fissures, anal fistulas, and pilonidal sinus with exceptional precision and patient comfort. Compared to conventional surgical methods, laser procedures involve less tissue damage, minimal bleeding, reduced post-operative pain, and significantly faster recovery. Most patients can return to their normal routine within a short period while benefiting from excellent clinical outcomes. Dr. Jaimalani offers advanced laser-based solutions tailored to each patient's condition, ensuring safe, effective, and long-lasting relief.",
    icon: "LaserColoProctologyIcon",
  },
  {
    id: 8,
    title: "Tumor Surgery",
    shortDesc:
      "Surgical management of benign and malignant abdominal tumors using minimally invasive and robotic-assisted techniques.",
    fullDesc:
      "Dr. Jaimalani specializes in the surgical treatment of gastrointestinal, colorectal, and abdominal wall tumors — including benign masses and early-to-advanced malignancies. Wherever oncologically appropriate, a minimally invasive or robotic-assisted approach is employed to minimize surgical trauma while achieving clear resection margins. Patients receive a comprehensive care plan coordinated with oncology and radiology teams, ensuring precision at every stage from diagnosis to post-operative follow-up.",
    icon: "TumorIcon",
  },
  {
    id: 9,
    title: "Emergency Surgery",
    shortDesc:
      "Round-the-clock emergency surgical care for acute abdominal conditions with rapid diagnosis and intervention.",
    fullDesc:
      "Dr. Jaimalani's team provides 24/7 emergency surgical coverage for acute conditions including perforated peptic ulcer, intestinal obstruction, acute appendicitis, strangulated hernia, and abdominal trauma. Timely intervention is critical in these cases — the team is equipped for rapid assessment, resuscitation, and operative management to minimize complications and mortality. Even in emergency settings, minimally invasive approaches are employed wherever the patient's condition permits, reducing recovery time and post-operative morbidity.",
    icon: "EmergencyIcon",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SVG ICONS
// ─────────────────────────────────────────────────────────────────────────────

function RoboticIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path
        d="M8 28L4 32M28 28L32 32"
        stroke="#F5B800"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect
        x="6"
        y="14"
        width="24"
        height="16"
        rx="2"
        stroke="#F5B800"
        strokeWidth="1.5"
      />
      <path
        d="M12 14V10a6 6 0 0 1 12 0v4"
        stroke="#F5B800"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="13" cy="22" r="2" fill="#F5B800" />
      <circle cx="23" cy="22" r="2" fill="#F5B800" />
      <path
        d="M16 22h4"
        stroke="#F5B800"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18 6V4M14 7l-1.5-1.5M22 7l1.5-1.5"
        stroke="#F5B800"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LaparoscopyIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="10" r="5" stroke="#F5B800" strokeWidth="1.5" />
      <path
        d="M18 15v6M14 33l4-12 4 12"
        stroke="#F5B800"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 20c0 0 2-2 8-2s8 2 8 2"
        stroke="#F5B800"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6 28h4M26 28h4"
        stroke="#F5B800"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BariatricIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path
        d="M10 8C10 8 8 12 8 18c0 7 4 10 10 10s10-3 10-10c0-6-2-10-2-10"
        stroke="#F5B800"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M13 8h10"
        stroke="#F5B800"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18 8V4"
        stroke="#F5B800"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 18c0 2 1.8 4 4 4s4-2 4-4"
        stroke="#F5B800"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 14h12"
        stroke="#F5B800"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M26 10l4-2M10 10L6 8"
        stroke="#F5B800"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HerniaIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path
        d="M6 18c0-6.627 5.373-12 12-12s12 5.373 12 12"
        stroke="#F5B800"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6 18c0 4 2 7 5 9M30 18c0 4-2 7-5 9"
        stroke="#F5B800"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M11 27c2 1.5 4.5 2 7 2s5-0.5 7-2"
        stroke="#F5B800"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M15 18h6M18 15v6"
        stroke="#F5B800"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="18" cy="18" r="5" stroke="#F5B800" strokeWidth="1.5" />
    </svg>
  );
}

function GallbladderIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path
        d="M18 6c0 0-2 2-2 6 0 2 1 3 1 5 0 3-2 5-2 9a5 5 0 0 0 10 0c0-4-2-6-2-9 0-2 1-3 1-5 0-4-2-6-2-6"
        stroke="#F5B800"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 12h6"
        stroke="#F5B800"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 17h8"
        stroke="#F5B800"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18 6V3"
        stroke="#F5B800"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M15 3h6"
        stroke="#F5B800"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AppendixIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path
        d="M14 6h8v14a4 4 0 0 1-8 0V6z"
        stroke="#F5B800"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14 12h8" stroke="#F5B800" strokeWidth="1.5" />
      <path
        d="M18 20v6c0 2 1 4 3 4"
        stroke="#F5B800"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="27" cy="29" r="2" stroke="#F5B800" strokeWidth="1.5" />
      <path
        d="M10 6H8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2"
        stroke="#F5B800"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LaserColoProctologyIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      {/* Laser device body */}
      <rect
        x="0"
        y="11"
        width="10"
        height="14"
        rx="2"
        stroke="#F5B800"
        strokeWidth="1.5"
      />
      {/* Power dot */}
      <circle cx="5" cy="14" r="1.2" fill="#F5B800" />
      {/* Beam */}
      <line
        x1="10"
        y1="18"
        x2="19"
        y2="18"
        stroke="#F5B800"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Beam tip */}
      <circle cx="20" cy="18" r="1.5" fill="#F5B800" />
      {/* Pulse arcs */}
      <path
        d="M22 14 Q26 18 22 22"
        stroke="#F5B800"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M25 11 Q31 18 25 25"
        stroke="#F5B800"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* Colon tube */}
      <path
        d="M12 5 C6 5 3 9 3 15"
        stroke="#F5B800"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 5 C18 5 21 9 21 15"
        stroke="#F5B800"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3 21 C3 27 6 31 12 31 C18 31 21 27 21 21"
        stroke="#F5B800"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TumorIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      {/* Main tumor mass */}
      <circle cx="18" cy="17" r="10" stroke="#F5B800" strokeWidth="1.5" />
      {/* Satellite nodules */}
      <circle cx="8" cy="8" r="3" stroke="#F5B800" strokeWidth="1.2" />
      <circle cx="28" cy="8" r="2.5" stroke="#F5B800" strokeWidth="1.2" />
      <circle cx="29" cy="25" r="2" stroke="#F5B800" strokeWidth="1.2" />
      {/* Surgical cross */}
      <line
        x1="14"
        y1="17"
        x2="22"
        y2="17"
        stroke="#F5B800"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="18"
        y1="13"
        x2="18"
        y2="21"
        stroke="#F5B800"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Scalpel */}
      <path
        d="M21 29 L29 35"
        stroke="#F5B800"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M19 27 L24 28 L22 31 Z"
        stroke="#F5B800"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EmergencyIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      {/* Dashed alert ring */}
      <circle
        cx="18"
        cy="18"
        r="16"
        stroke="#F5B800"
        strokeWidth="1.2"
        strokeDasharray="3 3"
      />
      {/* ECG heartbeat line */}
      <polyline
        points="1,18 5,18 8,8 11,28 14,12 17,18 21,18 24,18"
        stroke="#F5B800"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Flat tail */}
      <line
        x1="24"
        y1="18"
        x2="35"
        y2="18"
        stroke="#F5B800"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const ICON_MAP = {
  RoboticIcon,
  LaparoscopyIcon,
  BariatricIcon,
  HerniaIcon,
  GallbladderIcon,
  AppendixIcon,
  LaserColoProctologyIcon,
  TumorIcon,
  EmergencyIcon,
};

// ─────────────────────────────────────────────────────────────────────────────
// SERVICE CARD
// ─────────────────────────────────────────────────────────────────────────────
function ServiceCard({ id, service, onClick }) {
  const IconComponent = ICON_MAP[service.icon];

  return (
    <div
      id={id}
      onClick={() => onClick(service)}
      className="relative group cursor-pointer border border-white/8 bg-[#0d1526] hover:bg-[#2a2000] transition-all duration-400 p-6 flex flex-col gap-5 overflow-hidden"
    >
      {/* Watermark text — top right, visible on hover */}
      <span
        className="absolute top-4 right-4 text-[40px] font-bold text-white/[0.04] group-hover:text-[#F5B800]/[0.08] leading-none select-none transition-colors duration-400 pointer-events-none"
        style={{ fontFamily: "var(--font-playfair)" }}
        aria-hidden="true"
      >
        Precision &amp; <br /> Excellence
      </span>

      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center">
        {IconComponent && <IconComponent />}
      </div>

      {/* Title */}
      <h3
        className="text-white text-[20px] font-bold leading-snug group-hover:text-white transition-colors duration-300"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {service.title}
      </h3>

      {/* Short description */}
      <p className="text-white/50 text-[14px] leading-relaxed group-hover:text-white/70 transition-colors duration-300">
        {service.shortDesc}
      </p>

      {/* Arrow — appears on hover */}
      <div className="mt-auto pt-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        <div className="w-8 h-8 border border-[#F5B800]/50 flex items-center justify-center">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#F5B800"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Bottom gold border on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F5B800] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MODAL
// ─────────────────────────────────────────────────────────────────────────────
function ServiceModal({ service, onClose }) {
  if (!service) return null;
  const IconComponent = ICON_MAP[service.icon];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative z-10 bg-[#0d1526] border border-white/10 max-w-lg w-full p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white/40 hover:text-white transition-colors duration-200 bg-transparent border-none cursor-pointer"
          aria-label="Close"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Icon + title */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 flex items-center justify-center shrink-0">
            {IconComponent && <IconComponent />}
          </div>
          <h3
            className="text-white text-[24px] font-bold leading-snug"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {service.title}
          </h3>
        </div>

        {/* Gold rule */}
        <div className="w-10 h-[2px] bg-[#F5B800] mb-6" />

        {/* Full description */}
        <p className="text-white/65 text-[15px] leading-[1.85]">
          {service.fullDesc}
        </p>

        {/* Book CTA */}
        <Link
          href="/booking"
          onClick={onClose}
          className="mt-8 w-full block text-center bg-[#F5B800] text-[#080d1a] text-[12px] tracking-[0.2em] font-bold uppercase py-4 hover:bg-[#F5B800]/90 transition-colors duration-200"
        >
          Book Consultation
        </Link>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN SECTION
// ─────────────────────────────────────────────────────────────────────────────
export default function ExpertiseSection() {
  const [activeService, setActiveService] = useState(null);

  return (
    <>
      <section id="expertise" className="bg-[#080d1a] py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          {/* Section header */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-end mb-12 md:mb-16">
            <div className="flex flex-col gap-3">
              <span className="text-[#F5B800] text-[11px] tracking-[0.25em] uppercase font-medium">
                Our Expertise
              </span>
              <h2
                className="text-white text-3xl sm:text-4xl md:text-[46px] font-bold leading-[1.1]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Advanced Surgical Services
              </h2>
            </div>
            <p className="text-white/50 text-[15px] leading-relaxed md:max-w-[400px]">
              Focused on minimally invasive techniques that minimize pain,
              reduce scarring, and ensure rapid recovery for our patients.
            </p>
          </div>

          {/* 3×2 Services grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/[0.06]">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.id}
                id={`service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                service={service}
                onClick={setActiveService}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <ServiceModal
        service={activeService}
        onClose={() => setActiveService(null)}
      />
    </>
  );
}
