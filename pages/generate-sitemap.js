//file path: pages/sitemap.xml/index.js

import servicesData from "../public/locales/en/service.json";
import React from 'react';

const generateSitemap = (fields) => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

  fields.forEach((url) => {
    xml += '<url>';
    xml += `<loc>${url.loc}</loc>`;
    xml += `<lastmod>${url.lastmod}</lastmod>`;
    xml += `<changefreq>${url.changefreq}</changefreq>`;
    xml += `<priority>${url.priority}</priority>`;
    xml += '</url>';
  });

  xml += '</urlset>';
  return xml;
};

const Sitemap = () => {
  const staticPages = ["", "/about-us", "/contact-us", "/services"];
  const services = servicesData.childItems;

  const fields = [
    ...staticPages.map((page) => ({
      loc: process.env.HOST_URL + page,
      lastmod: new Date().toISOString(),
      priority: 1,
      changefreq: "daily",
    })),
    ...services.map((item) => ({
      loc: process.env.HOST_URL + '/services/' + item.id,
      lastmod: new Date().toISOString(),
      priority: 1,
      changefreq: "daily",
    })),
  ];

  const sitemap = generateSitemap(fields);

  console.log(sitemap);
};

export default Sitemap;
