import { getBlogs, getServices } from "@/lib/contentful/api";

export default async function sitemap() {
  const staticPages = ["", "/about-us", "/contact-us", "/services", "/blogs"];
  const services = await getServices();
  const blogs = await getBlogs();

  const fields = [
    ...staticPages.map((page) => ({
      url: process.env.HOST_URL + page,
      lastModified: new Date().toISOString().split("T")[0],
    })),
    ...services.items.map((item) => ({
      url: process.env.HOST_URL + "/services/" + item.fields.slug,
      lastModified: new Date().toISOString().split("T")[0],
    })),
    ...blogs.items.map((item) => ({
      url: process.env.HOST_URL + "/blogs/" + item.fields.slug,
      lastModified: new Date().toISOString().split("T")[0],
    })),
  ];
  return fields;
}
