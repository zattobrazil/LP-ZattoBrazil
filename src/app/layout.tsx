import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const helveticaNow = localFont({
  src: [
    {
      path: '../../public/fonts/HelveticaNow-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/HelveticaNow-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/HelveticaNow-Bold.woff2',
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
        url: '/og-image.jpg',
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
    images: ['/og-image.jpg'],
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
      <body className={`${helveticaNow.className} bg-[#fcf9f4] text-[#213655] antialiased cursor-default`}>
        {children}
      </body>
    </html>
  );
}
