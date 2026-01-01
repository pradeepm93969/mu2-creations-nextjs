import services from "@/lib/data/services.json";
import blogs from "@/lib/data/blogs.json";

export default async function sitemap() {
  const staticPages = ["", "/about-us", "/contact-us", "/services", "/blogs"];

  const fields = [
    ...staticPages.map((page) => ({
      url: process.env.HOST_URL + page,
      lastModified: new Date().toISOString().split("T")[0],
    })),
    ...services.map((item) => ({
      url: process.env.HOST_URL + "/services/" + item.slug,
      lastModified: new Date().toISOString().split("T")[0],
    })),
    ...blogs.map((item) => ({
      url: process.env.HOST_URL + "/blogs/" + item.slug,
      lastModified: new Date().toISOString().split("T")[0],
    })),
  ];
  return fields;
}
