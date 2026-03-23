import type { Metadata } from 'next';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BannerCTA from '@/components/BannerCTA';

const Clients = dynamic(() => import('@/components/Clients'));
const CatalogueCarousel = dynamic(() => import('@/components/CatalogueCarousel'));
const Journey = dynamic(() => import('@/components/Journey'));
const BrandPositioning = dynamic(() => import('@/components/BrandPositioning'));
const Stats = dynamic(() => import('@/components/Stats'));
const FifteenYears = dynamic(() => import('@/components/FifteenYears'));
const Testimonials = dynamic(() => import('@/components/Testimonials'));
const InstagramSection = dynamic(() => import('@/components/InstagramSection'));
const Footer = dynamic(() => import('@/components/Footer'));

export function generateMetadata(): Metadata {
  const canonicalUrl = 'https://zattobrazil.com.br';

  return {
    title: 'Zatto Brazil | Brindes Personalizados',
    description: 'Especialistas em brindes personalizados de alta qualidade para todos os segmentos.',
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'website',
      url: canonicalUrl,
      title: 'Zatto Brazil | Brindes Personalizados',
      description: 'Especialistas em brindes personalizados de alta qualidade para todos os segmentos.',
      siteName: 'Zatto Brazil',
      locale: 'pt_BR',
      images: [
        {
          url: '/images/hero-section.png',
          alt: 'Zatto Brazil - Brindes Personalizados',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Zatto Brazil | Brindes Personalizados',
      description: 'Especialistas em brindes personalizados de alta qualidade para todos os segmentos.',
      images: ['/images/hero-section.png'],
    },
  };
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fcf9f4] text-white">
      <h1 className="sr-only text-black">Zatto Brazil - Brindes Personalizados e Impulsionadores de Marca</h1>
      <Script
        id="schema-home-product"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'Brindes Personalizados e Impulsionadores de Marca',
            description: 'Especialistas em brindes personalizados de alta qualidade para todos os segmentos.',
            url: 'https://zattobrazil.com.br',
            brand: {
              '@type': 'Brand',
              name: 'Zatto Brazil',
            },
            manufacturer: {
              '@type': 'Organization',
              name: 'Zatto Brazil',
              url: 'https://zattobrazil.com.br',
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
      <Hero />
      <BannerCTA slug="home" whatsappMessage="Olá! Vim pelo site da Zatto Brazil!" />
      <Clients />
      <CatalogueCarousel />
      <Journey />
      <BrandPositioning />
      <Stats />
      <FifteenYears />
      <Testimonials />
      <InstagramSection />
      <Footer slug="home" whatsappMessage="Olá! Vim pelo site da Zatto Brazil!" />
    </main>
  );
}
