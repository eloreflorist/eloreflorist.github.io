import { MetadataRoute } from 'next';
import flowerProducts from '@/data/flowers.json';
import weddingProducts from '@/data/weddings.json';
import giftProducts from '@/data/gifts.json';

const BASE_URL = 'https://eloreflorist.github.io';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/flowers`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/weddings`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/gifts`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ];

  const flowerPages: MetadataRoute.Sitemap = flowerProducts.map((p) => ({
    url: `${BASE_URL}/flowers/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const weddingPages: MetadataRoute.Sitemap = weddingProducts.map((p) => ({
    url: `${BASE_URL}/weddings/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const giftPages: MetadataRoute.Sitemap = giftProducts.map((p) => ({
    url: `${BASE_URL}/gifts/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...flowerPages, ...weddingPages, ...giftPages];
}
