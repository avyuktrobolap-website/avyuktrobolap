// app/privacy-policy/page.js  OR  pages/privacy-policy.js
// Place this file according to your Next.js router (App Router or Pages Router)

"use client";

export default function PrivacyPolicy() {
  const sections = [
    {
      id: "01",
      title: "What Information Do We Collect?",
      content: (
        <>
          <p>
            We collect personal information that you voluntarily provide to us
            when you express an interest in obtaining information about us or
            our products and Services, when you participate in activities on the
            Services, or otherwise when you contact us.
          </p>
          <p className="mt-4 font-semibold text-gold">
            Personal Information Provided by You
          </p>
          <p className="mt-2">
            The personal information we collect may include:
          </p>
          <ul className="mt-3 space-y-2">
            <li className="flex items-center gap-3">
              <span className="gold-dot" />
              Phone numbers
            </li>
            <li className="flex items-center gap-3">
              <span className="gold-dot" />
              Email addresses
            </li>
          </ul>
          <p className="mt-4 text-sm text-slate-400">
            We do not process sensitive information. All personal information
            you provide must be true, complete, and accurate.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            <span className="text-gold font-medium">Google API:</span> Our use
            of information received from Google APIs will adhere to the Google
            API Services User Data Policy, including the Limited Use
            requirements.
          </p>
        </>
      ),
    },
    {
      id: "02",
      title: "How Do We Process Your Information?",
      content: (
        <>
          <p>
            We process your personal information for a variety of reasons,
            depending on how you interact with our Services, including:
          </p>
          <div className="mt-4 space-y-4">
            {[
              {
                heading: "To deliver and facilitate services",
                body: "We may process your information to provide you with the requested service.",
              },
              {
                heading: "To respond to user inquiries",
                body: "We may process your information to respond to your inquiries and solve any potential issues you might have.",
              },
              {
                heading: "To send administrative information",
                body: "We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.",
              },
            ].map((item) => (
              <div key={item.heading} className="process-card">
                <p className="text-gold font-semibold text-sm">
                  {item.heading}
                </p>
                <p className="mt-1 text-slate-300 text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </>
      ),
    },
    {
      id: "03",
      title: "When and With Whom Do We Share Your Personal Information?",
      content: (
        <>
          <p>
            We may share your personal information in the following situations:
          </p>
          <div className="mt-4 space-y-4">
            <div className="process-card">
              <p className="text-gold font-semibold text-sm">
                Business Transfers
              </p>
              <p className="mt-1 text-slate-300 text-sm">
                We may share or transfer your information in connection with, or
                during negotiations of, any merger, sale of company assets,
                financing, or acquisition of all or a portion of our business to
                another company.
              </p>
            </div>
            <div className="process-card">
              <p className="text-gold font-semibold text-sm">
                Google Maps Platform APIs
              </p>
              <p className="mt-1 text-slate-300 text-sm">
                We may share your information with certain Google Maps Platform
                APIs. Google Maps uses GPS, Wi-Fi, and cell towers to estimate
                your location to provide directions and location-based services.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "04",
      title: "Do We Use Cookies and Other Tracking Technologies?",
      content: (
        <p>
          We may use cookies and similar tracking technologies (like web beacons
          and pixels) to gather information when you interact with our Services.
          These help us maintain security, prevent crashes, fix bugs, save your
          preferences, and assist with basic site functions. We also permit
          third parties and service providers to use tracking technologies on
          our Services for analytics and advertising purposes.
        </p>
      ),
    },
    {
      id: "05",
      title: "How Long Do We Keep Your Information?",
      content: (
        <p>
          We will only keep your personal information for as long as it is
          necessary for the purposes set out in this Privacy Notice, unless a
          longer retention period is required by law. When we have no ongoing
          legitimate business need to process your personal information, we will
          either delete or anonymize it, or securely store it isolated from
          further processing until deletion is possible.
        </p>
      ),
    },
    {
      id: "06",
      title: "How Do We Keep Your Information Safe?",
      content: (
        <p>
          We have implemented appropriate and reasonable technical and
          organizational security measures designed to protect the security of
          any personal information we process. However, no electronic
          transmission over the Internet or information storage technology can
          be guaranteed to be 100% secure. Transmission of personal information
          to and from our Services is at your own risk. You should only access
          the Services within a secure environment.
        </p>
      ),
    },
    {
      id: "07",
      title: "Do We Collect Information From Minors?",
      content: (
        <p>
          The platform is intended solely for users who are eighteen (18) years
          of age or older. We do not knowingly market to or solicit information
          from individuals under the age of 18.
        </p>
      ),
    },
    {
      id: "08",
      title: "What Are Your Privacy Rights?",
      content: (
        <>
          <p>
            You may review, change, or terminate your account at any time,
            depending on your country, province, or state of residence.
          </p>
          <p className="mt-4 font-semibold text-gold">
            Withdrawing Your Consent
          </p>
          <p className="mt-2 text-slate-300">
            If we are relying on your consent to process your personal
            information, you have the right to withdraw your consent at any time
            by contacting us using the details provided in Section 11. Please
            note this will not affect the lawfulness of processing before its
            withdrawal.
          </p>
          <p className="mt-4 font-semibold text-gold">Cookies</p>
          <p className="mt-2 text-slate-300">
            Most web browsers accept cookies by default. You can usually set
            your browser to remove or reject cookies, though this could affect
            certain features of our Services.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            For questions about your privacy rights, email us at{" "}
            <a
              href="mailto:avyuktrobolap@gmail.com"
              className="text-gold hover:underline"
            >
              avyuktrobolap@gmail.com
            </a>
          </p>
        </>
      ),
    },
    {
      id: "09",
      title: "Controls for Do-Not-Track Features",
      content: (
        <p>
          Most web browsers include a Do-Not-Track ("DNT") feature or setting
          you can activate to signal your privacy preference not to have data
          about your online browsing activities monitored and collected. At this
          stage, no uniform technology standard for recognizing and implementing
          DNT signals has been finalized. As such, we do not currently respond
          to DNT browser signals.
        </p>
      ),
    },
    {
      id: "10",
      title: "Do We Make Updates to This Notice?",
      content: (
        <p>
          We may update this Privacy Notice from time to time. The updated
          version will be indicated by an updated "Revised" date at the top of
          this Privacy Notice. If we make material changes, we may notify you by
          prominently posting a notice or by directly sending you a
          notification. We encourage you to review this Privacy Notice
          frequently.
        </p>
      ),
    },
    {
      id: "11",
      title: "How Can You Contact Us About This Notice?",
      content: (
        <>
          <p>
            If you have questions or comments about this notice, you may contact
            us at:
          </p>
          <div className="mt-4 process-card">
            <p className="text-gold font-semibold">Dr. Abhishek Jaimalani</p>
            <p className="mt-2 text-slate-300 text-sm leading-relaxed">
              Shalby Multi-Speciality Hospitals
              <br />
              Nr Navyug College, Rander
              <br />
              Surat, Gujarat — 395009
              <br />
              India
            </p>
            <a
              href="mailto:avyuktrobolap@gmail.com"
              className="mt-3 inline-block text-gold text-sm hover:underline"
            >
              avyuktrobolap@gmail.com
            </a>
          </div>
        </>
      ),
    },
    {
      id: "12",
      title:
        "How Can You Review, Update, or Delete the Data We Collect From You?",
      content: (
        <p>
          You have the right to request access to the personal information we
          collect from you, correct inaccuracies, or delete your personal
          information. You may also have the right to withdraw your consent to
          our processing. These rights may be limited in some circumstances by
          applicable law. To submit a request, please visit{" "}
          <a
            href="https://www.avyuktrobolap.com/"
            className="text-gold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.avyuktrobolap.com
          </a>{" "}
          or contact us directly.
        </p>
      ),
    },
  ];

  return (
    <>
      <style>{`
        :root {
          --navy-950: #060d1f;
          --navy-900: #0a1628;
          --navy-800: #0f2044;
          --navy-700: #162b5c;
          --gold: #c9a84c;
          --gold-light: #e2c06e;
          --gold-dim: rgba(201, 168, 76, 0.15);
          --text-primary: #f0ece0;
          --text-secondary: #94a3b8;
        }

        .pp-page {
          min-height: 100vh;
          background-color: var(--navy-950);
          color: var(--text-primary);
          font-family: 'Inter', 'Segoe UI', sans-serif;
        }

        /* Hero Banner */
        .pp-hero {
          position: relative;
          background: linear-gradient(160deg, var(--navy-800) 0%, var(--navy-950) 100%);
          border-bottom: 1px solid rgba(201, 168, 76, 0.2);
          padding: 100px 24px 64px;
          text-align: center;
          overflow: hidden;
        }

        .pp-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 80% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        .pp-hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 20px;
        }

        .pp-hero-eyebrow::before,
        .pp-hero-eyebrow::after {
          content: '';
          display: block;
          width: 32px;
          height: 1px;
          background: var(--gold);
          opacity: 0.6;
        }

        .pp-hero h1 {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 300;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          line-height: 1.1;
        }

        .pp-hero h1 span {
          color: var(--gold);
          font-weight: 600;
        }

        .pp-hero-meta {
          margin-top: 20px;
          font-size: 13px;
          color: var(--text-secondary);
          letter-spacing: 0.04em;
        }

        /* Layout */
        .pp-layout {
          max-width: 900px;
          margin: 0 auto;
          padding: 64px 24px 100px;
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 64px;
          align-items: start;
        }

        @media (max-width: 768px) {
          .pp-layout {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .pp-toc {
            display: none;
          }
        }

        /* Table of Contents */
        .pp-toc {
          position: sticky;
          top: 32px;
        }

        .pp-toc-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 16px;
        }

        .pp-toc-list {
          list-style: none;
          padding: 0;
          margin: 0;
          border-left: 1px solid rgba(201,168,76,0.2);
        }

        .pp-toc-list li a {
          display: block;
          padding: 6px 12px;
          font-size: 12px;
          color: var(--text-secondary);
          text-decoration: none;
          line-height: 1.4;
          transition: color 0.2s, border-color 0.2s;
          border-left: 2px solid transparent;
          margin-left: -1px;
        }

        .pp-toc-list li a:hover {
          color: var(--gold-light);
          border-left-color: var(--gold);
        }

        /* Content */
        .pp-content {
          display: flex;
          flex-direction: column;
          gap: 56px;
        }

        /* Summary block */
        .pp-summary {
          background: var(--gold-dim);
          border: 1px solid rgba(201,168,76,0.25);
          border-radius: 8px;
          padding: 28px 32px;
        }

        .pp-summary-title {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 20px;
        }

        .pp-summary-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        @media (max-width: 600px) {
          .pp-summary-grid { grid-template-columns: 1fr; }
        }

        .pp-summary-item {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .pp-summary-item strong {
          display: block;
          color: var(--text-primary);
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 4px;
        }

        /* Section */
        .pp-section {
          scroll-margin-top: 32px;
        }

        .pp-section-header {
          display: flex;
          align-items: baseline;
          gap: 16px;
          margin-bottom: 20px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(201,168,76,0.15);
        }

        .pp-section-number {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--gold);
          opacity: 0.7;
          flex-shrink: 0;
          font-variant-numeric: tabular-nums;
        }

        .pp-section-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          letter-spacing: -0.01em;
          line-height: 1.3;
        }

        .pp-section-body {
          font-size: 14.5px;
          line-height: 1.8;
          color: var(--text-secondary);
        }

        /* Process card */
        .process-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-left: 2px solid var(--gold);
          border-radius: 6px;
          padding: 14px 18px;
        }

        /* Gold text utility */
        .text-gold { color: var(--gold); }
        .text-slate-300 { color: #cbd5e1; }
        .text-slate-400 { color: #94a3b8; }

        /* Gold dot */
        .gold-dot {
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--gold);
          flex-shrink: 0;
        }

        /* Footer strip */
        .pp-footer-strip {
          border-top: 1px solid rgba(201,168,76,0.15);
          padding: 32px 24px;
          text-align: center;
          font-size: 12px;
          color: var(--text-secondary);
          background: var(--navy-900);
        }

        .pp-footer-strip a {
          color: var(--gold);
          text-decoration: none;
        }

        .pp-footer-strip a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="pp-page">
        {/* Hero */}
        <div className="pp-hero">
          <div className="pp-hero-eyebrow">Avyukt Robolap</div>
          <h1>
            Privacy <span>Policy</span>
          </h1>
          <p className="pp-hero-meta">Last updated — June 13, 2026</p>
        </div>

        {/* Main Layout */}
        <div className="pp-layout">
          {/* Table of Contents — sticky sidebar */}
          <aside className="pp-toc">
            <p className="pp-toc-label">Contents</p>
            <ul className="pp-toc-list">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#section-${s.id}`}>{s.title}</a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Content */}
          <main className="pp-content">
            {/* Intro paragraph */}
            <div
              style={{
                fontSize: "14.5px",
                lineHeight: "1.8",
                color: "#94a3b8",
              }}
            >
              <p>
                This Privacy Notice for{" "}
                <span style={{ color: "#f0ece0", fontWeight: 500 }}>
                  Dr. Abhishek Jaimalani
                </span>{" "}
                ("we," "us," or "our") describes how and why we might access,
                collect, store, use, and/or share your personal information when
                you use our Services, including when you:
              </p>
              <ul
                style={{
                  marginTop: "12px",
                  paddingLeft: "0",
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                {[
                  <>
                    Visit our website at{" "}
                    <a
                      href="https://www.avyuktrobolap.com"
                      style={{ color: "var(--gold)" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.avyuktrobolap.com
                    </a>
                  </>,
                  "Use our Portfolio & Booking Portal to showcase work, schedule appointments, and communicate securely",
                  "Engage with us in other related ways, including any marketing or events",
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span className="gold-dot" style={{ marginTop: "9px" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: "16px" }}>
                Questions or concerns? Email us at{" "}
                <a
                  href="mailto:avyuktrobolap@gmail.com"
                  style={{ color: "var(--gold)" }}
                >
                  avyuktrobolap@gmail.com
                </a>
              </p>
            </div>

            {/* Summary block */}
            <div className="pp-summary">
              <p className="pp-summary-title">Summary of Key Points</p>
              <div className="pp-summary-grid">
                {[
                  {
                    q: "Personal info collected?",
                    a: "Phone numbers and email addresses you voluntarily provide.",
                  },
                  {
                    q: "Sensitive info processed?",
                    a: "No. We do not process sensitive personal information.",
                  },
                  {
                    q: "Third-party data collection?",
                    a: "No. We do not collect information from third parties.",
                  },
                  {
                    q: "Why we process your info?",
                    a: "To provide services, respond to inquiries, and send administrative info.",
                  },
                  {
                    q: "Is your data safe?",
                    a: "We use adequate security measures, though 100% security cannot be guaranteed.",
                  },
                  {
                    q: "Your rights?",
                    a: "You may review, update, or delete your data at any time.",
                  },
                ].map((item) => (
                  <div key={item.q} className="pp-summary-item">
                    <strong>{item.q}</strong>
                    {item.a}
                  </div>
                ))}
              </div>
            </div>

            {/* Sections */}
            {sections.map((section) => (
              <section
                key={section.id}
                id={`section-${section.id}`}
                className="pp-section"
              >
                <div className="pp-section-header">
                  <span className="pp-section-number">{section.id}</span>
                  <h2 className="pp-section-title">{section.title}</h2>
                </div>
                <div className="pp-section-body">{section.content}</div>
              </section>
            ))}
          </main>
        </div>

        {/* Footer Strip */}
        <div className="pp-footer-strip">
          <p>
            &copy; {new Date().getFullYear()} Dr. Abhishek Jaimalani · Avyukt
            Robolap ·{" "}
            <a href="https://www.avyuktrobolap.com">www.avyuktrobolap.com</a>
          </p>
          <p style={{ marginTop: "6px" }}>
            This policy was last updated on June 13, 2026. Questions?{" "}
            <a href="mailto:avyuktrobolap@gmail.com">avyuktrobolap@gmail.com</a>
          </p>
        </div>
      </div>
    </>
  );
}
