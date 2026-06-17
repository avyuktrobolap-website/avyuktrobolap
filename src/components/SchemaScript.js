export default function SchemaScript() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Dr. Abhishek Jaimalani",
    medicalSpecialty: [
      "Robotic Surgery",
      "Laparoscopic Surgery",
      "General Surgery",
    ],
    description:
      "Specialist in robotic and laparoscopic minimally invasive surgery at Avyukt Robolap, Surat.",
    url: "https://avyuktrobolap.com",
    telephone: "+919427160760", // 🔁 fill in
    image: "https://avyuktrobolap.com/og-image.png",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Shalby Multi-Speciality Hospitals, Nr Navyug College, Rander Rd, Adajan", // 🔁 fill in
      addressLocality: "Surat",
      addressRegion: "Gujarat",
      postalCode: "395009",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.practo.com/...", // 🔁 add Practo URL
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
