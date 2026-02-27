import { Metadata } from 'next';
import Link from 'next/link';
import { landingPages } from '@/data/lps';
import Hero from '@/components/Hero';
import Clients from '@/components/Clients';

/**
 * Metadata SEO para a página Home
 */
export const metadata: Metadata = {
  title: 'Zatto Brazil | Brindes Personalizados de Alta Qualidade',
  description: 'Especialistas em brindes personalizados para todos os segmentos. Fortaleça sua marca com produtos de qualidade e entrega garantida em todo o Brasil.',
  keywords: ['brindes personalizados', 'brindes corporativos', 'brindes brasil', 'produtos personalizados'],
  openGraph: {
    title: 'Zatto Brazil | Brindes Personalizados de Alta Qualidade',
    description: 'Especialistas em brindes personalizados para todos os segmentos.',
    type: 'website',
  },
};

/**
 * Página Home (One Page) - zattobrazil.com.br
 * 
 * Esta é a página mestre que serve como base visual.
 * As páginas dinâmicas replicarão esta estrutura com dados específicos.
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header / Navegação */}
      <Hero />
      {/* <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Zatto Brazil</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#beneficios" className="text-gray-700 hover:text-blue-600 transition-colors">
              Benefícios
            </a>
            <a href="#sobre" className="text-gray-700 hover:text-blue-600 transition-colors">
              Sobre
            </a>
            <a href="#nichos" className="text-gray-700 hover:text-blue-600 transition-colors">
              Nichos
            </a>
            <a 
              href="#contato" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contato
            </a>
          </div>
        </nav>
      </header> */}

      {/* Hero Section
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Brindes Personalizados de{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Alta Qualidade
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Fortaleça sua marca com produtos personalizados exclusivos. 
                Atendemos todos os segmentos com excelência e entrega garantida em todo o Brasil.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contato"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all hover:scale-105 shadow-lg"
                >
                  Solicitar Orçamento
                </a>
                <a
                  href="#nichos"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all"
                >
                  Ver Segmentos
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-8xl">🎁</div>
              </div>
              {/* Elementos decorativos */}
              {/* <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full blur-2xl opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full blur-2xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section> */}

      <Clients />

      {/* Benefícios Section */}
      <section id="beneficios" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Por que escolher a Zatto Brazil?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Mais de 15 anos de experiência em brindes personalizados
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Agilidade',
                description: 'Prazos de entrega rápidos sem comprometer a qualidade'
              },
              {
                icon: '🎨',
                title: 'Personalização',
                description: 'Seu logotipo aplicado com perfeição em cada produto'
              },
              {
                icon: '✅',
                title: 'Qualidade',
                description: 'Produtos selecionados e testados com rigor'
              },
              {
                icon: '🚚',
                title: 'Nacional',
                description: 'Entregamos em todo território brasileiro'
              }
            ].map((benefit, index) => (
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

      {/* Sobre Section */}
      <section id="sobre" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="aspect-video bg-gradient-to-br from-indigo-100 to-blue-100 rounded-3xl shadow-xl flex items-center justify-center">
                <div className="text-7xl">🏢</div>
              </div>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Especialistas em Brindes Personalizados
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Com mais de 15 anos no mercado, a Zatto Brazil se consolidou como 
                referência em brindes personalizados de alta qualidade. Atendemos 
                empresas de todos os portes e segmentos, sempre com o compromisso de 
                entregar produtos que realmente fazem a diferença.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nossa equipe especializada está pronta para entender suas necessidades 
                e criar soluções personalizadas que fortaleçam sua marca e encantem 
                seu público.
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
                  <div className="text-3xl font-bold text-blue-600 mb-1">50k+</div>
                  <div className="text-sm text-gray-600">Produtos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nichos Section */}
      <section id="nichos" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Atendemos Diversos Segmentos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluções personalizadas para cada tipo de negócio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {landingPages.map((lp) => (
              <Link
                key={lp.slug}
                href={`/${lp.slug}`}
                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{lp.benefits.items[0].icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {lp.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {lp.subtitle}
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                  Saber mais
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section id="contato" className="py-20 px-4 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para Fortalecer sua Marca?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Entre em contato agora e receba uma proposta personalizada 
            para o seu negócio. Atendimento especializado e orçamento sem compromisso.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/5511999999999"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <span>💬</span>
              Falar no WhatsApp
            </a>
            <a
              href="mailto:contato@zattobrazil.com.br"
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
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">Z</span>
                </div>
                <span className="text-xl font-bold text-white">Zatto Brazil</span>
              </div>
              <p className="text-sm">
                Especialistas em brindes personalizados de alta qualidade.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Navegação</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#beneficios" className="hover:text-white transition-colors">Benefícios</a></li>
                <li><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#nichos" className="hover:text-white transition-colors">Nichos</a></li>
                <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Segmentos</h4>
              <ul className="space-y-2 text-sm">
                {landingPages.map((lp) => (
                  <li key={lp.slug}>
                    <Link href={`/${lp.slug}`} className="hover:text-white transition-colors">
                      {lp.title}
                    </Link>
                  </li>
                ))}
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
