"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

// Scalpel SVG icon matching the logo mark in the design
function ScalpelIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 24L14 10L20 14L10 26L4 24Z" fill="#F5B800" />
      <path d="M14 10L22 2L26 6L20 14L14 10Z" fill="#F5B800" />
      <path d="M22 2L26 4L26 6L22 2Z" fill="#c49200" />
    </svg>
  );
}

// Hamburger / Close icon
function MenuIcon({ open }) {
  return (
    <div className="flex flex-col justify-center items-center w-6 h-6 gap-[5px]">
      <span
        className={`block h-[2px] bg-[#F5B800] transition-all duration-300 origin-center ${
          open ? "w-6 rotate-45 translate-y-[7px]" : "w-6"
        }`}
      />
      <span
        className={`block h-[2px] bg-[#F5B800] transition-all duration-300 ${
          open ? "w-0 opacity-0" : "w-6 opacity-100"
        }`}
      />
      <span
        className={`block h-[2px] bg-[#F5B800] transition-all duration-300 origin-center ${
          open ? "w-6 -rotate-45 -translate-y-[7px]" : "w-6"
        }`}
      />
    </div>
  );
}

const NAV_LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERTISE", href: "#expertise" },
  { label: "EDUCATION", href: "#education" },
];

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add background blur on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#080d1a]/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.5)]"
            : "bg-[#080d1a]"
        }`}
      >
        <nav className="max-w-[1400px] mx-auto px-6 md:px-10 h-[70px] flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Surgical Excellence - Home"
          >
            {/* <ScalpelIcon /> */}
            <span
              className="text-[#F5B800] font-bold tracking-[0.12em] text-[15px] md:text-[60px] md:pl-5"
              style={{ fontFamily: "var(--font-dancing)" }}
            >
              Avyukt Robolap
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-white/80 hover:text-[#F5B800] text-[13px] tracking-[0.18em] font-medium transition-colors duration-200 uppercase cursor-pointer bg-transparent border-none"
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => {
                router.push("/booking");
              }}
              className="ml-2 bg-[#F5B800] text-[#080d1a] text-[13px] tracking-[0.18em] font-bold uppercase px-6 py-3 hover:bg-[#F5B800]/90 transition-colors duration-200 cursor-pointer border-none"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-1 bg-transparent border-none cursor-pointer"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute top-[70px] left-0 right-0 bg-[#080d1a] border-t border-gold/20 transition-all duration-300 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <div className="flex flex-col px-6 py-6 gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-white/80 hover:text-[#F5B800] text-[13px] tracking-[0.18em] font-medium uppercase py-4 border-b border-white/5 last:border-none transition-colors duration-200 bg-transparent border-x-0 border-t-0 cursor-pointer w-full"
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => {
                setMenuOpen(false);
                router.push("/booking");
              }}
              className="mt-4 bg-[#F5B800] text-[#080d1a] text-[13px] tracking-[0.18em] font-bold uppercase px-6 py-4 hover:bg-[#F5B800]/90 transition-colors duration-200 cursor-pointer border-none w-full"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Spacer so page content starts below fixed navbar */}
      <div className="h-[70px]" />
    </>
  );
}
