const BASE_URL = "https://avyuktrobolap.com"; // 🔁 change to actual domain

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
