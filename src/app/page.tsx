import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BannerCTA from '@/components/BannerCTA';
import Clients from '@/components/Clients';
import CatalogueCarousel from '@/components/CatalogueCarousel';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <BannerCTA />
      <Clients />
      <CatalogueCarousel />
    </main>
  );
}
