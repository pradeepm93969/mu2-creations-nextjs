import servicesData from "../public/locales/en/service.json";

async function generateSitemap() {
  const staticPages = ["", "/about-us", "/contact-us", "/services"];
  const services = servicesData.childItems;

  const fields = [
    ...staticPages.map((page) => ({
      loc: process.env.HOST_URL + page,
      lastmod: new Date().toISOString().split('T')[0],
    })),
    ...services.map((item) => ({
      loc: process.env.HOST_URL + '/services/' + item.id,
      lastmod: new Date().toISOString().split('T')[0],
    })),
  ];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

  fields.forEach((url) => {
    xml += '<url>';
    xml += `<loc>${url.loc}</loc>`;
    xml += `<lastmod>${url.lastmod}</lastmod>`;
    xml += '</url>';
  });

  xml += '</urlset>';
  return xml;
}

export async function getServerSideProps(ctx) {
  ctx.res.statusCode = 200;
  ctx.res.setHeader('Content-Type', 'text/xml');
  const xml = await generateSitemap();
  ctx.res.write(xml);
  ctx.res.end();
  return {
    props: {},
  };
}

export default function Sitemap() {
  return null;
}