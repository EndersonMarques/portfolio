import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '#about', '#projects', '#contact'];
  const lastModified = new Date().toISOString();

  return routes.map((route) => ({
    url: `${siteConfig.url}/${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
