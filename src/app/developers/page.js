"use client";

import Image from "next/image";
import Link from "next/link";

// ── Icon Components ──────────────────────────────────────────────────────────

function LinkedInIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
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
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

// ── Developer Data ────────────────────────────────────────────────────────────

const DEVELOPERS = [
  {
    id: "priyansh",
    name: "Priyansh Kaklotar",
    photo: "/images/Priyansh-image.jpeg",
    objectPosition: "center center",
    role: "Full Stack Developer",
    description:
      "Passionate developer dedicated to building smart, user-focused digital solutions with creativity and precision.",
    linkedin: "https://www.linkedin.com/in/priyansh-kaklotar-464725333",
    github: "https://github.com/Priyansh-Kaklotar",
    email: "priyanshkaklotar8@gmail.com",
  },
  {
    id: "sharad",
    name: "Sharad Vyas",
    photo: "/images/Sharad-image.jpg",
    objectPosition: "center 70%",
    role: "Web Developer & ML Enthusiast",
    description:
      "Web Developer and ML Enthusiast. Dedicated to creating innovative solutions using cutting-edge technology.",
    linkedin: "https://www.linkedin.com/in/sharad-vyas-270310324/",
    github: "https://github.com/sharadvyas123",
    email: "sharadvyas132@gmail.com",
  },
];

// ── Page Component ────────────────────────────────────────────────────────────

export default function DevelopersPage() {
  return (
    <>
      <style>{`
        :root {
          --navy-950: #060d1f;
          --navy-900: #0a1628;
          --navy-800: #0f2044;
          --gold: #F5B800;
          --gold-dim: rgba(245, 184, 0, 0.12);
          --gold-border: rgba(245, 184, 0, 0.25);
          --text-primary: #f0ece0;
          --text-secondary: #94a3b8;
        }

        .dev-page {
          min-height: 100vh;
          background-color: var(--navy-950);
          color: var(--text-primary);
          font-family: 'Inter', 'Segoe UI', sans-serif;
        }

        /* ── Hero ── */
        .dev-hero {
          position: relative;
          background: linear-gradient(160deg, var(--navy-800) 0%, var(--navy-950) 100%);
          border-bottom: 1px solid var(--gold-border);
          padding: 110px 24px 72px;
          text-align: center;
          overflow: hidden;
        }

        .dev-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 70% 90% at 50% 0%, rgba(245,184,0,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        .dev-hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 22px;
        }

        .dev-hero-eyebrow::before,
        .dev-hero-eyebrow::after {
          content: '';
          display: block;
          width: 36px;
          height: 1px;
          background: var(--gold);
          opacity: 0.55;
        }

        .dev-hero h1 {
          font-size: clamp(2.2rem, 5vw, 3.8rem);
          font-weight: 300;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          line-height: 1.1;
          font-family: var(--font-playfair, serif);
        }

        .dev-hero h1 span {
          color: var(--gold);
          font-weight: 700;
        }

        .dev-hero-sub {
          margin-top: 18px;
          font-size: 15px;
          color: var(--text-secondary);
          letter-spacing: 0.03em;
          max-width: 520px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.7;
        }

        /* ── Grid ── */
        .dev-grid-wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 80px 24px 100px;
        }

        .dev-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
        }

        @media (max-width: 720px) {
          .dev-grid {
            grid-template-columns: 1fr;
          }
        }

        /* ── Card ── */
        .dev-card {
          position: relative;
          background: rgba(15, 22, 44, 0.7);
          border: 1px solid rgba(245, 184, 0, 0.15);
          border-radius: 16px;
          overflow: hidden;
          transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
          display: flex;
          flex-direction: column;
        }

        .dev-card:hover {
          border-color: rgba(245, 184, 0, 0.45);
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(245, 184, 0, 0.08);
        }

        /* top gold accent bar */
        .dev-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .dev-card:hover::before {
          opacity: 1;
        }

        /* photo band */
        .dev-card-photo-wrap {
          position: relative;
          width: 100%;
          height: 300px;
          overflow: hidden;
          background: var(--navy-800);
        }

        .dev-card-photo-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          transition: transform 0.5s ease;
          display: block;
        }

        .dev-card:hover .dev-card-photo-wrap img {
          transform: scale(1.04);
        }

        /* gradient overlay on photo */
        .dev-card-photo-wrap::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: linear-gradient(to bottom, transparent, rgba(6, 13, 31, 0.92));
        }

        .dev-card-body {
          padding: 28px 30px 32px;
          display: flex;
          flex-direction: column;
          gap: 0;
          flex: 1;
        }

        .dev-card-role {
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .dev-card-role::before {
          content: '';
          display: inline-block;
          width: 18px;
          height: 1px;
          background: var(--gold);
          opacity: 0.7;
        }

        .dev-card-name {
          font-size: 1.55rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.01em;
          line-height: 1.2;
          margin-bottom: 14px;
          font-family: var(--font-playfair, serif);
        }

        .dev-card-desc {
          font-size: 14px;
          line-height: 1.75;
          color: var(--text-secondary);
          margin-bottom: 28px;
          flex: 1;
        }

        /* divider */
        .dev-card-divider {
          height: 1px;
          background: rgba(245, 184, 0, 0.12);
          margin-bottom: 22px;
        }

        /* links row */
        .dev-card-links {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .dev-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 16px;
          border: 1px solid rgba(245, 184, 0, 0.25);
          border-radius: 8px;
          font-size: 12.5px;
          font-weight: 500;
          color: var(--text-secondary);
          text-decoration: none;
          transition: all 0.22s;
          letter-spacing: 0.03em;
          background: rgba(255,255,255,0.02);
        }

        .dev-link:hover {
          border-color: var(--gold);
          color: var(--gold);
          background: var(--gold-dim);
        }

        .dev-link.mail {
          flex: 1;
          min-width: 160px;
        }

        /* ── Section label ── */
        .dev-section-label {
          text-align: center;
          margin-bottom: 56px;
        }

        .dev-section-label-tag {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 14px;
        }

        .dev-section-label-tag::before,
        .dev-section-label-tag::after {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: var(--gold);
          opacity: 0.5;
        }

        .dev-section-label h2 {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 300;
          color: var(--text-primary);
          font-family: var(--font-playfair, serif);
          letter-spacing: -0.02em;
        }

        .dev-section-label h2 strong {
          color: var(--gold);
          font-weight: 700;
        }

        /* ── Footer strip ── */
        .dev-footer-strip {
          border-top: 1px solid rgba(245, 184, 0, 0.12);
          padding: 28px 24px;
          text-align: center;
          font-size: 12px;
          color: var(--text-secondary);
          background: var(--navy-900);
        }

        .dev-footer-strip a {
          color: var(--gold);
          text-decoration: none;
        }

        .dev-footer-strip a:hover {
          text-decoration: underline;
        }

        /* ── Back link ── */
        .dev-back {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gold);
          text-decoration: none;
          margin-bottom: 52px;
          opacity: 0.8;
          transition: opacity 0.2s;
        }

        .dev-back:hover {
          opacity: 1;
        }

        .dev-back svg {
          transition: transform 0.2s;
        }

        .dev-back:hover svg {
          transform: translateX(-3px);
        }
      `}</style>

      <div className="dev-page">
        {/* ── Hero ── */}
        <div className="dev-hero">
          <div className="dev-hero-eyebrow">Avyukt Robolap</div>
          <h1>
            Meet the <span>Developers</span>
          </h1>
          <p className="dev-hero-sub">
            The talented engineers behind the digital experience of
            Dr.&nbsp;Abhishek Jaimalani&rsquo;s platform — crafting every pixel
            and every line of code with care.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="dev-grid-wrap">
          {/* Back to home */}
          <Link href="/" className="dev-back">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to Home
          </Link>

          {/* Section label */}
          <div className="dev-section-label">
            <div className="dev-section-label-tag">
              <CodeIcon />
              Development Team
            </div>
            <h2>
              Built with <strong>passion &amp; precision</strong>
            </h2>
          </div>

          {/* Developer Cards */}
          <div className="dev-grid">
            {DEVELOPERS.map((dev) => (
              <div key={dev.id} className="dev-card">
                {/* Photo */}
                <div className="dev-card-photo-wrap">
                  <img
                    src={dev.photo}
                    alt={`${dev.name} — Developer`}
                    style={{ objectPosition: dev.objectPosition }}
                  />
                </div>

                {/* Body */}
                <div className="dev-card-body">
                  <span className="dev-card-role">{dev.role}</span>
                  <h3 className="dev-card-name">{dev.name}</h3>
                  <p className="dev-card-desc">{dev.description}</p>

                  <div className="dev-card-divider" />

                  {/* Social Links */}
                  <div className="dev-card-links">
                    <a
                      href={dev.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dev-link"
                      aria-label={`${dev.name} LinkedIn`}
                    >
                      <LinkedInIcon />
                      LinkedIn
                    </a>
                    <a
                      href={dev.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dev-link"
                      aria-label={`${dev.name} GitHub`}
                    >
                      <GitHubIcon />
                      GitHub
                    </a>
                    <a
                      href={`mailto:${dev.email}`}
                      className="dev-link mail"
                      aria-label={`Email ${dev.name}`}
                    >
                      <MailIcon />
                      {dev.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Footer strip ── */}
        <div className="dev-footer-strip">
          <p>
            &copy; {new Date().getFullYear()} Dr. Abhishek Jaimalani &middot;{" "}
            <a href="/">avyuktrobolap.com</a>
          </p>
          <p style={{ marginTop: "5px" }}>
            Designed &amp; developed by{" "}
            <a href="https://github.com/Priyansh-Kaklotar" target="_blank" rel="noopener noreferrer">
              Priyansh Kaklotar
            </a>{" "}
            &amp;{" "}
            <a href="https://github.com/sharadvyas123" target="_blank" rel="noopener noreferrer">
              Sharad Vyas
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
