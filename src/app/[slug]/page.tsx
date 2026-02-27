import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getLandingPageBySlug, getAllSlugs } from '@/data/lps';

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
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header / Navegação */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Zatto Brazil</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#beneficios" className="text-gray-700 hover:text-blue-600 transition-colors">
              Benefícios
            </a>
            <a href="#sobre" className="text-gray-700 hover:text-blue-600 transition-colors">
              Sobre
            </a>
            <Link href="/#nichos" className="text-gray-700 hover:text-blue-600 transition-colors">
              Outros Nichos
            </Link>
            <a 
              href="#contato" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contato
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section - Dados Dinâmicos */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {/* Badge do Nicho */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                <span>{lpData.benefits.items[0].icon}</span>
                {lpData.subtitle}
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                {lpData.hero.headline}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {lpData.hero.subheadline}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contato"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all hover:scale-105 shadow-lg"
                >
                  {lpData.hero.ctaText}
                </a>
                <Link
                  href="/"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all"
                >
                  Ver Outros Nichos
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-8xl">{lpData.benefits.items[0].icon}</div>
              </div>
              {/* Elementos decorativos */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full blur-2xl opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full blur-2xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Section - Dados Dinâmicos */}
      <section id="beneficios" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {lpData.benefits.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluções especializadas para o segmento de {lpData.title.toLowerCase()}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {lpData.benefits.items.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Section - Dados Dinâmicos */}
      <section id="sobre" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="aspect-video bg-gradient-to-br from-indigo-100 to-blue-100 rounded-3xl shadow-xl flex items-center justify-center">
                <div className="text-7xl">{lpData.benefits.items[0].icon}</div>
              </div>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                {lpData.about.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {lpData.about.description}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Trabalhamos com os melhores fornecedores e garantimos produtos 
                que realmente fazem diferença para o seu negócio. Cada detalhe 
                é pensado para maximizar o impacto da sua marca.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">15+</div>
                  <div className="text-sm text-gray-600">Anos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Clientes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Satisfação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Section - Dados Dinâmicos */}
      <section id="contato" className="py-20 px-4 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {lpData.cta.title}
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            {lpData.cta.description}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`https://wa.me/5511999999999?text=Olá! Gostaria de um orçamento para ${lpData.title}`}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>💬</span>
              {lpData.cta.buttonText}
            </a>
            <a
              href={`mailto:contato@zattobrazil.com.br?subject=Orçamento ${lpData.title}`}
              className="bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-400 transition-all border-2 border-white/20 flex items-center gap-2"
            >
              <span>✉️</span>
              Enviar E-mail
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
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
                <li><a href="#beneficios" className="hover:text-white transition-colors">Benefícios</a></li>
                <li><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></li>
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Este Segmento</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-blue-400 font-semibold">{lpData.title}</li>
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
