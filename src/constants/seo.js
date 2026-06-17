// ─── SEO & Metadata Constants ─────────────────────────────────────────────────
// Used by layout.js and individual page metadata exports.
// Centralised here so any update reflects everywhere instantly.

export const SITE_URL = 'https://www.avyuktrobolap.com'; // update when deployed

export const DEFAULT_METADATA = {
  // ── Core ──────────────────────────────────────────────────────────────────
  title: {
    default: 'Dr. Abhishek Jaimalani | Robotic & Laparoscopic Surgeon',
    template: '%s | Dr. Abhishek Jaimalani',
  },
  description:
    'Dr. Abhishek Jaimalani — MS, FMAS, FMITGO (Italy). Expert in robotic & laparoscopic surgery with 12+ years of experience and 500+ successful procedures. Book an appointment today.',
  keywords: [
    'Dr Abhishek Jaimalani',
    'Robotic Surgeon',
    'Laparoscopic Surgeon',
    'Minimally Invasive Surgery',
    'General Surgeon',
    'FMAS surgeon',
    'robotic surgery India',
    'laparoscopic surgery',
    'book surgeon appointment',
  ],
  authors: [{ name: 'Dr. Abhishek Jaimalani' }],
  creator: 'Dr. Abhishek Jaimalani',
  publisher: 'Dr. Abhishek Jaimalani',
  category: 'Healthcare',

  // ── Canonical & Alternate ─────────────────────────────────────────────────
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Dr. Abhishek Jaimalani',
    title: 'Dr. Abhishek Jaimalani | Robotic & Laparoscopic Surgeon',
    description:
      'Expert robotic and laparoscopic surgeon with 12+ years of experience. Minimally invasive precision. Book your consultation today.',
    images: [
      {
        url: '/images/og-image.png',   // place a 1200×630 image here
        width: 1200,
        height: 630,
        alt: 'Dr. Abhishek Jaimalani — Robotic & Laparoscopic Surgeon',
      },
    ],
  },

  // ── Twitter / X Card ──────────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Abhishek Jaimalani | Robotic & Laparoscopic Surgeon',
    description:
      'Expert robotic and laparoscopic surgeon. 12+ years experience. Book your appointment online.',
    images: ['/images/og-image.png'],
  },

  // ── Robots ────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ── Mobile / PWA ──────────────────────────────────────────────────────────
  // themeColor is set separately via viewport export (Next.js 14+)
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Dr. Abhishek Jaimalani',
  },
  formatDetection: {
    telephone: true,   // lets mobile browsers auto-link phone numbers
    email: true,
    address: true,
  },

  // ── Verification (add tokens once you verify in Search Console) ───────────
  verification: {
    // google: 'YOUR_GOOGLE_SITE_VERIFICATION_TOKEN',
    // yandex: 'YOUR_YANDEX_TOKEN',
  },
};

// ── Viewport export — fixes "Best Practices" score ────────────────────────────
// Must be exported separately from metadata in Next.js 14+
export const VIEWPORT = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,       // allows pinch-zoom (accessibility)
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#080d1a' },
    { media: '(prefers-color-scheme: light)', color: '#080d1a' },
  ],
};

// ── Structured Data (JSON-LD) — boosts rich snippets in Google ────────────────
export const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: 'Dr. Abhishek Jaimalani',
  url: SITE_URL,
  image: `${SITE_URL}/images/dr-abhishek.jpeg`,
  description:
    'Robotic and Laparoscopic Surgeon with over 12 years of experience and 500+ successful procedures.',
  medicalSpecialty: ['Robotic Surgery', 'Laparoscopic Surgery', 'General Surgery'],
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'MS' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'FMAS' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'FMITGO (Italy)' },
  ],
  sameAs: [
    // Add LinkedIn, etc. when available
  ],
};
