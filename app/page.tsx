import type { Metadata } from 'next';
import Script from 'next/script';
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
      <h1 className="sr-only">Zatto Brazil - Brindes Personalizados e Impulsionadores de Marca</h1>
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
