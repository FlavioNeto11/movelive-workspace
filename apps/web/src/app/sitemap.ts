import type { MetadataRoute } from 'next';
import { contentProvider } from '@/lib/content';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';
  const groups = await contentProvider.getMuscleGroups();

  const groupUrls = groups
    .filter((g) => g.id !== 'orientacoes')
    .map((g) => ({ url: `${base}/exercicios/${g.id}`, lastModified: new Date() }));

  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/exercicios`, lastModified: new Date() },
    ...groupUrls,
    { url: `${base}/treinos-prontos`, lastModified: new Date() },
    { url: `${base}/treinos-prontos/iniciante`, lastModified: new Date() },
    { url: `${base}/treinos-prontos/intermediario`, lastModified: new Date() },
    { url: `${base}/treinos-prontos/avancado`, lastModified: new Date() },
    { url: `${base}/orientacoes`, lastModified: new Date() },
    { url: `${base}/favoritos`, lastModified: new Date() },
    { url: `${base}/contato`, lastModified: new Date() },
  ];
}
