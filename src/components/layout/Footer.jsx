"use client";

// Scalpel SVG icon — same as Navbar logo mark
function ScalpelIcon() {
  return (
    <svg
      width="26"
      height="26"
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

function GlobeIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon
        points="10 8 16 12 10 16 10 8"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path
        d="M13 21v-7h2.5l.5-3H13V9.5C13 8.67 13.67 8 14.5 8H16V5.5S15 5 13.5 5C11.5 5 10 6.5 10 8.5V11H8v3h2v7"
        fill="none"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#F5B800"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-[2px] shrink-0"
    >
      <path d="M20 10c0 6-8 13-8 13s-8-7-8-13a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#F5B800"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 1.2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#F5B800"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { icon: <GlobeIcon />, href: "https://avyuktrobolap.com", label: "Website" },
  {
    icon: <YoutubeIcon />,
    href: "https://www.youtube.com/@abhi19902000",
    label: "YouTube",
  },
  {
    icon: <InstagramIcon />,
    href: "https://www.instagram.com/avyukt_robolap/",
    label: "Instagram",
  },
  {
    icon: <FacebookIcon />,
    href: "https://www.facebook.com/people/Avyukt-Robolap/61584844662058/",
    label: "Facebook",
  },
  {
    icon: <MailIcon />,
    href: "mailto:avyuktrobolap@gmail.com",
    label: "Email",
  },
];

const QUICK_ACCESS = [
  { label: "Expertise", href: "#expertise" },
  { label: "About me", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Consultation", href: "/booking" },
  { label: "Testimonials", href: "#testimonial" },
  // { label: "Cookies", href: "#testimonial" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const PRACTICE_LOCATIONS = [
  {
    icon: <LocationIcon />,
    text: "Shalby Multi-Speciality Hospitals, Nr Navyug College, Rander Rd, Adajan, Surat, Gujarat",
    href: "https://www.google.com/maps/place/Dr.+Abhishek+Jaimalani+%E2%80%93+Laparoscopic+%26+Robotic+Surgeon+in+Surat/@21.2023282,72.7984931,17z/data=!3m1!4b1!4m6!3m5!1s0x3be04dc38aec8ffb:0x5f7a7acfe404c139!8m2!3d21.2023282!4d72.801068!16s%2Fg%2F11xtmq611r?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D",
    // href: "https://share.google/rTm8ZjxPaELsIbw39",
  },
  {
    icon: <PhoneIcon />,
    text: "+91 94271 60760",
    href: "tel:+919427160760",
  },
  {
    icon: <EmailIcon />,
    text: "avyuktrobolap@gmail.com",
    href: "mailto:avyuktrobolap@gmail.com",
    // href: "mail.google.com/mail/u/0/?to=contact@avyuktrobolap.com&fs=1&tf=cm",
  },
];

export default function Footer() {
  const handleNavClick = (href) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#070c18] border-t border-white/[0.06]">
      {/* Main Footer Grid */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1.5fr_1.5fr] gap-10 lg:gap-16">
          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-1">
              {/* <ScalpelIcon /> */}
              <span
                className="text-[#F5B800] font-bold tracking-[0.12em] text-[15px] uppercase"
                style={{ fontFamily: "var(--font-playfair)" }}
                // style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Avyukt
              </span>
              <span
                className="text-[#F5B800] font-bold tracking-[0.12em] text-[15px] uppercase"
                style={{ fontFamily: "var(--font-playfair)" }}
                // style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Robolap
              </span>
            </div>

            <p className="text-white/50 text-[14px] leading-relaxed max-w-[280px]">
              Defining the gold standard in robotic and laparoscopic surgery
              through precision, innovation, and compassionate care.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-1">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-white/15 text-white/50 hover:border-[#F5B800]/60 hover:text-[#F5B800] transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Practice Locations */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[#F5B800] text-[11px] tracking-[0.22em] font-semibold uppercase">
              Practice Location
            </h3>
            <ul className="flex flex-col gap-4">
              {PRACTICE_LOCATIONS.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white/60 text-[14px] leading-snug hover:text-white/90 transition-colors duration-200"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-white/60 text-[14px] leading-snug">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Quick Access */}
          <div className="flex flex-col gap-5">
            <h3 className="text-[#F5B800] text-[11px] tracking-[0.22em] font-semibold uppercase">
              Quick Access
            </h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {QUICK_ACCESS.map((item) => (
                <li key={item.label}>
                  {item.href.startsWith("#") ? (
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="text-white/60 text-[14px] hover:text-white/90 transition-colors duration-200 bg-transparent border-none cursor-pointer p-0 text-left"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className="text-white/60 text-[14px] hover:text-white/90 transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-[11px] tracking-[0.14em] uppercase text-center sm:text-left">
            © {new Date().getFullYear()} Dr. Abhishek Jaimalani.
          </p>
          <p
            className="text-white/30 text-[11px] tracking-[0.14em] uppercase text-center sm:text-right"
            // style={{ fontFamily: "var(--font-playfair)" }}
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Avyukt Robolap •{" "}
            <a
              href="https://instagram.com/avyukt_robolap"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F5B800]/70 transition-colors duration-200"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              @avyukt_robolap
            </a>
          </p>
        </div>

        {/* Developers credit strip */}
        <div className="border-t border-white/[0.04]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-3 flex items-center justify-center">
            <p className="text-white/20 text-[10px] tracking-[0.12em] uppercase text-center">
              Developed &amp; Maintained by{" "}
              <a
                href="/developers"
                className="text-[#F5B800]/40 hover:text-[#F5B800]/80 transition-colors duration-200 font-medium"
              >
                Developers Team
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
