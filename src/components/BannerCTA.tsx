'use client';

import { buildWhatsAppLink } from '@/utils/whatsapp';

interface BannerCTAProps {
  title?: string;
  subtitle?: string;
  slug: string;
  whatsappMessage: string;
  whatsappNumber?: string;
}

export default function BannerCTA({
  title = 'CRIAMOS PRODUTOS QUE IMPULSIONAM MARCAS E VENDAS.',
  subtitle = 'Do conceito à entrega, transformamos brindes corporativos em experiências de marca.',
  slug,
  whatsappMessage,
  whatsappNumber = '5519971142666',
}: BannerCTAProps) {
  const normalizedTitle = title.toLocaleUpperCase('pt-BR');
  const whatsappUrl = buildWhatsAppLink(whatsappNumber, whatsappMessage);

  const handleWhatsAppClick = () => {
    if (typeof window === 'undefined') {
      return;
    }

    const trackedWindow = window as Window & {
      dataLayer?: Array<Record<string, unknown>>;
    };

    trackedWindow.dataLayer = trackedWindow.dataLayer || [];
    trackedWindow.dataLayer.push({
      event: 'whatsapp_click',
      slug,
      button_location: 'banner_cta',
    });
  };

  return (
    <section className="bg-[#213655] py-24 px-6 flex flex-col items-center text-center">
      <h2 className="font-serif text-3xl tracking-wide text-white mb-4">
        {normalizedTitle}
      </h2>

      <p className="text-xl text-white mb-8">
        {subtitle}
      </p>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
        className="button-hover rounded-sm bg-white text-[#213655] font-bold text-xl uppercase px-8 py-3 cursor-pointer select-none"
      >
        FAÇA UM ORÇAMENTO
      </a>
    </section>
  );
}
