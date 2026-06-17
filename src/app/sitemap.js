const BASE_URL = "https://avyuktrobolap.com"; // 🔁 change to actual domain

export default function sitemap() {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
