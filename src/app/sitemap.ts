import type { MetadataRoute } from 'next';

const SITE_URL = 'https://medinaservices.us';

// Add a route here when a new page is created.
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/contact'];
  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));
}
