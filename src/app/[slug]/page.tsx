import { notFound } from 'next/navigation';
import { landingPages } from '@/data/lps'; // Ajuste o caminho se o seu arquivo lps.ts estiver em outro lugar

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

// 1. Mudamos de "Home" para receber o "slug" da URL
export default function LandingPageDinamica({ params }: { params: { slug: string } }) {
  
  // 2. Busca a página correta na nossa "fonte da verdade"
  const lpData = landingPages.find((lp) => lp.slug === params.slug);

  // 3. Trava de segurança: se a URL for inválida, joga pro 404
  if (!lpData) {
    return notFound();
  }

  // 4. Regra de Negócio da Júlia: Link personalizado ou o padrão
  const linkDoCatalogo = lpData.catalogLink || '/catalogos/catalogo-padrao-zatto-2026.pdf';

  return (
    <main className="min-h-screen bg-[#fcf9f4] text-[#213655]">
      <Header />
      
      {/* Componentes Dinâmicos (Recebendo os dados do lps.ts) */}
      <Hero 
        title={lpData.heroTitle} 
        subtitle={lpData.heroSubtitle} 
      />
      
      <BannerCTA /> {/* Estático por enquanto */}
      
      <Clients 
        logos={lpData.clientsLogos} 
      />
      
      <CatalogueCarousel 
        kits={lpData.kitsList} 
      />
      
      <Journey /> {/* Estático por enquanto */}
      
      <BrandPositioning 
        text={lpData.positioningText} 
      />
      
      <Stats /> {/* Estático por enquanto */}
      
      <FifteenYears 
        catalogLink={linkDoCatalogo} 
      />
      
      {/* Componentes Estáticos Globais */}
      <Testimonials />
      <InstagramSection />
      <Footer />
    </main>
  );
}