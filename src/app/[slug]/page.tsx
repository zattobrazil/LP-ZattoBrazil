import type { Metadata } from 'next';
import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { notFound } from 'next/navigation';
import { getAllSlugs, getCatalogLinkBySlug, getLandingPageBySlug } from '@/data/lps';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BannerCTA from '@/components/BannerCTA';
import Clients from '@/components/Clients';
import CatalogueCarousel from '@/components/CatalogueCarousel';
import BrandPositioning from '@/components/BrandPositioning';
import Journey from '@/components/Journey';
import Stats from '@/components/Stats';
import FifteenYears from '@/components/FifteenYears';
import Testimonials from '@/components/Testimonials';
import InstagramSection from '@/components/InstagramSection';
import Footer from '@/components/Footer';

interface SlugPageProps {
  params: {
    slug: string;
  };
}

export const dynamicParams = false;

const DEFAULT_HERO_IMAGE = '/images/hero-section.png';

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: SlugPageProps): Metadata {
  const lpData = getLandingPageBySlug(params.slug);

  if (!lpData) {
    return {
      title: 'Página não encontrada | Zatto Brazil',
      description: 'A landing page solicitada não existe.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalUrl = `https://zattobrazil.com.br/${lpData.slug}`;

  return {
    title: lpData.metaTitle,
    description: lpData.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'website',
      url: canonicalUrl,
      title: lpData.metaTitle,
      description: lpData.metaDescription,
      siteName: 'Zatto Brazil',
      locale: 'pt_BR',
      images: [
        {
          url: DEFAULT_HERO_IMAGE,
          alt: lpData.metaTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: lpData.metaTitle,
      description: lpData.metaDescription,
      images: [DEFAULT_HERO_IMAGE],
    },
  };
}

async function getCarouselItemsFromSlug(slug: string, title: string) {
  const folderPath = path.join(process.cwd(), 'public', 'images', slug);

  try {
    const files = await readdir(folderPath);
    const imageFiles = files
      .filter((file) => /\.(jpg|jpeg|png|webp|avif)$/i.test(file))
      .sort((a, b) => a.localeCompare(b, 'pt-BR', { numeric: true, sensitivity: 'base' }));

    return imageFiles.map((file, index) => ({
      name: `Item ${index + 1}`,
      imageUrl: `/images/${slug}/${file}`,
      altText: `${title} - item ${index + 1}`,
    }));
  } catch {
    return [];
  }
}

export default async function LandingPageDinamica({ params }: SlugPageProps) {
  const lpData = getLandingPageBySlug(params.slug);

  if (!lpData) {
    notFound();
  }

  const folderCarouselItems = await getCarouselItemsFromSlug(lpData.slug, lpData.bannerTitle);
  const carouselItems = folderCarouselItems.length > 0 ? folderCarouselItems : lpData.carrossel;
  const catalogLink = getCatalogLinkBySlug(lpData.slug, lpData.catalogLink);

  return (
    <main className="min-h-screen bg-[#fcf9f4] text-[#213655]">
      <Header />
      <Hero />
      <BannerCTA
        title={lpData.bannerTitle}
        subtitle={lpData.bannerSubtitle}
        slug={lpData.slug}
        whatsappMessage={lpData.whatsappMessage}
      />
      <Clients logos={lpData.clientsLogos} />
      <CatalogueCarousel items={carouselItems} catalogLink={catalogLink} />
      <Journey />
      <BrandPositioning />
      <Stats />
      <FifteenYears catalogLink={catalogLink} />
      <Testimonials />
      <InstagramSection />
      <Footer slug={lpData.slug} whatsappMessage={lpData.whatsappMessage} />
    </main>
  );
}