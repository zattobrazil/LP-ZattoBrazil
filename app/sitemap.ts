import type { MetadataRoute } from 'next';
import { getAllSlugs } from '@/data/lps';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://zattobrazil.com.br';

  // Home
  const homeRoute: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];

  // Landing Pages dinâmicas
  const lpRoutes: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...homeRoute, ...lpRoutes];
}
