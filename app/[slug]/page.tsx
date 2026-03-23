import type { Metadata } from 'next';
import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import { getAllSlugs, getCatalogLinkBySlug, getLandingPageBySlug } from '@/data/lps';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BannerCTA from '@/components/BannerCTA';
import Script from 'next/script';

const Clients = dynamic(() => import('@/components/Clients'));
const CatalogueCarousel = dynamic(() => import('@/components/CatalogueCarousel'));
const Journey = dynamic(() => import('@/components/Journey'));
const BrandPositioning = dynamic(() => import('@/components/BrandPositioning'));
const Stats = dynamic(() => import('@/components/Stats'));
const FifteenYears = dynamic(() => import('@/components/FifteenYears'));
const Testimonials = dynamic(() => import('@/components/Testimonials'));
const InstagramSection = dynamic(() => import('@/components/InstagramSection'));
const Footer = dynamic(() => import('@/components/Footer'));

interface SlugPageProps {
  params: {
    slug: string;
  };
}

export const dynamicParams = false;

const DEFAULT_HERO_IMAGE = '/images/hero-section.png';

function getLpHeroImageBySlug(slug: string): string {
  return `/images/${slug}/hero-section-${slug}.png`;
}

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
  const heroImage = getLpHeroImageBySlug(lpData.slug);

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
          url: heroImage,
          alt: lpData.metaTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: lpData.metaTitle,
      description: lpData.metaDescription,
      images: [heroImage],
    },
  };
}

async function getCarouselItemsFromSlug(slug: string, title: string) {
  const folderPath = path.join(process.cwd(), 'public', 'images', slug);

  try {
    const files = await readdir(folderPath);
    const imageFiles = files
      .filter((file) => /\.(jpg|jpeg|png|webp|avif)$/i.test(file) && !/^hero-section-/i.test(file))
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

  const folderCarouselItems = lpData.carrossel.length === 0
    ? await getCarouselItemsFromSlug(lpData.slug, lpData.bannerTitle)
    : [];
  const carouselItems = lpData.carrossel.length > 0 ? lpData.carrossel : folderCarouselItems;
  const catalogLink = getCatalogLinkBySlug(lpData.slug, lpData.catalogLink);
  const heroImage = getLpHeroImageBySlug(lpData.slug);

  return (
    <main className="min-h-screen bg-[#fcf9f4] text-[#213655]">
      <h1 className="sr-only text-black">{lpData.metaTitle}</h1>
      <Script
        id={`schema-lp-${lpData.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: lpData.bannerTitle,
            description: lpData.metaDescription,
            url: `https://zattobrazil.com.br/${lpData.slug}`,
            brand: {
              '@type': 'Brand',
              name: 'Zatto Brazil',
            },
            manufacturer: {
              '@type': 'Organization',
              name: 'Zatto Brazil',
              url: 'https://zattobrazil.com.br',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                url: 'https://wa.me/5519971142666',
              },
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5',
              ratingCount: '700000',
              reviewCount: '150',
            },
          }),
        }}
      />
      <Header />
      <Hero imageUrl={heroImage} />
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
