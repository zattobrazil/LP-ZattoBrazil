import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getLandingPageBySlug, getAllSlugs } from '@/data/lps';
import Hero from '@/components/Hero';
import Clients from '@/components/Clients';
import Header from '@/components/Header';
import Cases from '@/components/Cases';

/**
 * Interface para os parâmetros da página dinâmica
 */
interface PageProps {
  params: {
    slug: string;
  };
}

/**
 * generateStaticParams - Gera as páginas estáticas em build time
 * 
 * Esta função informa ao Next.js quais páginas devem ser criadas
 * estaticamente durante o build, melhorando performance e SEO.
 */
export async function generateStaticParams() {
  const slugs = getAllSlugs();
  
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

/**
 * generateMetadata - Gera metadados dinâmicos para SEO
 * 
 * Esta função é chamada pelo Next.js para cada página e permite
 * personalizar title, description e outras meta tags de forma dinâmica.
 * Essencial para SEO técnico e rankeamento no Google.
 * 
 * @param params - Parâmetros da rota (slug)
 * @returns Objeto com metadados da página
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = params;
  const lpData = getLandingPageBySlug(slug);
  
  // Se não encontrar a LP, retorna metadados padrão
  if (!lpData) {
    return {
      title: 'Página não encontrada | Zatto Brazil',
      description: 'A página que você procura não existe.',
    };
  }

  // Retorna metadados otimizados para SEO
  return {
    title: lpData.seo.title,
    description: lpData.seo.description,
    keywords: lpData.seo.keywords,
    openGraph: {
      title: lpData.seo.title,
      description: lpData.seo.description,
      type: 'website',
      images: [
        {
          url: lpData.hero.imageUrl,
          width: 1200,
          height: 630,
          alt: lpData.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: lpData.seo.title,
      description: lpData.seo.description,
      images: [lpData.hero.imageUrl],
    },
    alternates: {
      canonical: `https://zattobrazil.com.br/${slug}`,
    },
  };
}

/**
 * Página Dinâmica de Landing Page
 * 
 * Esta página replica a estrutura visual da home, mas com dados
 * específicos de cada nicho. A URL é capturada pelo [slug] e os
 * dados são buscados do arquivo lps.ts
 * 
 * Exemplo de URLs:
 * - /agro -> Brindes para o Agro
 * - /tecnologia -> Brindes para Tecnologia
 * - /eventos -> Brindes para Eventos
 */
export default function LandingPage({ params }: PageProps) {
  const { slug } = params;
  const lpData = getLandingPageBySlug(slug);
  
  // Se não encontrar a LP, retorna 404
  if (!lpData) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Componente Oficial */}
      <Hero 
        headline={lpData.hero.headline}
        subheadline={lpData.hero.subheadline}
        ctaText={lpData.hero.ctaText}
        bgImage="/images/img-header.png"
      />

      {/* Clients Section - Componente Oficial */}
      <Clients 
        title="NOSSOS CLIENTES"
        logosImage="/images/clientes.png"
      />

      <Cases />

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">Z</span>
                </div>
                <span className="text-xl font-bold text-white">Zatto Brazil</span>
              </Link>
              <p className="text-sm">
                Especialistas em brindes personalizados de alta qualidade.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Navegação</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Este Segmento</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-300 font-semibold">{lpData.title}</li>
                <li className="text-gray-400 text-xs">{lpData.description}</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm">
                <li>📞 (11) 99999-9999</li>
                <li>✉️ contato@zattobrazil.com.br</li>
                <li>📍 São Paulo, SP - Brasil</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Zatto Brazil. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
