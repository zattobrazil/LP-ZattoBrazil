import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';
import '../src/app/globals.css';

const helveticaNow = localFont({
  src: [
    {
      path: '../public/fonts/HelveticaNow-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/HelveticaNow-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/HelveticaNow-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-helvetica-now',
  display: 'swap',
});

/**
 * Metadata global do site
 * Estes valores serão usados como fallback caso páginas específicas não definam seus próprios metadados
 */
export const metadata: Metadata = {
  metadataBase: new URL('https://zattobrazil.com.br'),
  title: {
    default: 'Zatto Brazil | Brindes Personalizados',
    template: '%s | Zatto Brazil',
  },
  description: 'Especialistas em brindes personalizados de alta qualidade para todos os segmentos.',
  keywords: ['brindes personalizados', 'brindes corporativos', 'produtos personalizados'],
  authors: [{ name: 'Zatto Brazil' }],
  creator: 'Zatto Brazil',
  publisher: 'Zatto Brazil',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://zattobrazil.com.br',
    siteName: 'Zatto Brazil',
    title: 'Zatto Brazil | Brindes Personalizados',
    description: 'Especialistas em brindes personalizados de alta qualidade.',
    images: [
      {
        url: '/images/hero-section.png',
        width: 1200,
        height: 630,
        alt: 'Zatto Brazil - Brindes Personalizados',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zatto Brazil | Brindes Personalizados',
    description: 'Especialistas em brindes personalizados de alta qualidade.',
    images: ['/images/hero-section.png'],
  },
  verification: {
    google: 'seu-codigo-de-verificacao-aqui',
    // Adicione outros códigos de verificação quando necessário
  },
};

/**
 * Root Layout - Layout principal do aplicativo
 * 
 * Este componente envolve todas as páginas e define a estrutura HTML base.
 * Inclui configurações globais de fonte, metadados e estilos CSS.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={helveticaNow.variable}>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/images/ztt-icon.ico" type="image/x-icon" />
        
        {/* Preload de fontes críticas */}
        <link
          rel="preload"
          href="/fonts/HelveticaNow-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/HelveticaNow-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Schema markup - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Zatto Brazil',
              url: 'https://zattobrazil.com.br',
              logo: 'https://zattobrazil.com.br/images/logo.svg',
              description: 'Especialistas em brindes personalizados de alta qualidade para todos os segmentos.',
              sameAs: [
                'https://instagram.com/zatto.brazil',
                'https://linkedin.com/company/zatto-brazil',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                url: 'https://wa.me/5519971142666',
              },
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'BR',
              },
            }),
          }}
        />
      </head>
      <body className={`${helveticaNow.className} bg-[#fcf9f4] text-[#213655] antialiased cursor-default`}>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                      })(window,document,'script','dataLayer','GTM-TM27H3NL');`,
          }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TM27H3NL"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
