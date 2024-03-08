import { client } from "./client";

// Simple in-memory cache with TTL
const cache = new Map();

// Helper function to fetch data from Contentful API with caching and TTL
async function fetchDataWithCache(cacheKey, ttlSeconds, fetchDataFunction) {
  if (cache.has(cacheKey)) {
    const { data, timestamp } = cache.get(cacheKey);

    // Check if the cached data is still within TTL
    const currentTime = Date.now();
    if (currentTime - timestamp <= ttlSeconds * 1000) {
      return data;
    }
  }

  // If the data is not in the cache or has expired, fetch it and update the cache
  const data = await fetchDataFunction();
  const currentTime = Date.now();
  cache.set(cacheKey, { data, timestamp: currentTime });

  return data;
}

export async function getServices() {
  const cacheKey = "services";
  const ttlSeconds = 60 * 60; // Set TTL to one hour
  return await fetchDataWithCache(cacheKey, ttlSeconds, async () => {
    return await client.getEntries({
      content_type: "service",
      select:
        "fields.title, fields.sortOrder, fields.slug, fields.summary, fields.coverImage",
      order: "fields.sortOrder",
    });
  });
}

export async function getBlogs() {
  const cacheKey = "blogs";
  const ttlSeconds = 60 * 60; // Set TTL to 30 minutes
  return await fetchDataWithCache(cacheKey, ttlSeconds, async () => {
    return await client.getEntries({
      content_type: "blog",
      select:
        "fields.title, fields.date, fields.slug, fields.summary, fields.coverImage",
      order: "-fields.date",
      limit: 100,
    });
  });
}

export async function getBlogDetail(slug) {
  const cacheKey = `blogDetail_${slug}`;
  const ttlSeconds = 15 * 60; // Set TTL to 15 minutes
  return await fetchDataWithCache(cacheKey, ttlSeconds, async () => {
    return await client.getEntries({
      content_type: "blog",
      select: "fields.title, fields.subTitle, fields.summary, fields.content",
      "fields.slug": slug,
    });
  });
}

export async function getServiceDetail(slug) {
  const cacheKey = `serviceDetail_${slug}`;
  const ttlSeconds = 15 * 60; // Set TTL to 15 minutes
  return await fetchDataWithCache(cacheKey, ttlSeconds, async () => {
    return await client.getEntries({
      content_type: "service",
      select:
        "fields.title, fields.subTitle, fields.summary, fields.content, fields.imageGallery",
      "fields.slug": slug,
    });
  });
}
