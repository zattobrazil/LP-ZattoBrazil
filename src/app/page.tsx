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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fcf9f4] text-white">
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
