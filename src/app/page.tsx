import { Metadata } from 'next';
import Link from 'next/link';
import { landingPages } from '@/data/lps';
import Hero from '@/components/Hero';
import Clients from '@/components/Clients';
import Header from '@/components/Header';
import Cases from '@/components/Cases';

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
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />

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

      <Cases />

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">Z</span>
                </div>
                <span className="text-xl font-bold text-white">Zatto Brazil</span>
              </div>
              <p className="text-sm">
                Especialistas em brindes personalizados de alta qualidade.
              </p>
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
