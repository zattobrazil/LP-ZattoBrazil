'use client';

import Image from 'next/image';
import Link from 'next/link';
import { buildWhatsAppLink } from '@/utils/whatsapp';

interface FooterProps {
  slug: string;
  whatsappMessage?: string;
  whatsappNumber?: string;
}

export default function Footer({
  slug,
  whatsappMessage = 'Olá! Vim pelo site.',
  whatsappNumber = '5519971142666',
}: FooterProps) {
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
      button_location: 'footer',
    });
  };

  const handleFooterCtaClick = () => {
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
      button_location: 'cta_footer',
    });
  };

  return (
    <footer id="contato" className="bg-[#fcf9f4] text-[#213655] pt-14 md:pt-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pb-0 md:pb-20">
        {/* Área Superior */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-12">
          {/* Lado Esquerdo: Título e Botão */}
          <div className="lg:w-1/3">
            <h3 className="font-serif text-3xl md:text-3xl lg:text-4xl lg:w-64 mb-6 leading-tight">
              CONECTANDO<br />MARCAS<br />E PESSOAS
            </h3>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleFooterCtaClick}
              className="button-hover hover:shadow-2xl rounded-sm block w-full lg:w-fit mx-auto lg:mx-0 bg-[#213655] text-[#fcf9f4] font-sans font-bold text-md uppercase tracking-widest px-8 py-4 text-center"
            >
              FAÇA UM ORÇAMENTO
            </a>
          </div>

          {/* Lado Direito: Colunas de Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
            {/* Coluna 1: Navegação */}
            <div>
              <h4 className="font-sans text-lg uppercase tracking-widest mb-4 font-bold">
                Zatto Brazil
              </h4>
              <ul className="flex flex-col gap-0 font-sans">
                <li>
                  <Link
                    href="#projetos"
                    className="text-sm uppercase tracking-wider hover:opacity-70 transition-opacity cursor-pointer"
                  >
                    Projetos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#catalogo"
                    className="text-sm uppercase tracking-wider hover:opacity-70 transition-opacity cursor-pointer"
                  >
                    Catálogo
                  </Link>
                </li>
                <li>
                  <Link
                    href="#jornada"
                    className="text-sm uppercase tracking-wider hover:opacity-100 hover:translate-x-2 transition-opacity cursor-pointer opacity-90"
                  >
                    Jornada do Cliente
                  </Link>
                </li>
                <li>
                  <Link
                    href="#depoimentos"
                    className="text-sm uppercase tracking-wider hover:opacity-70 transition-opacity cursor-pointer"
                  >
                    Depoimentos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contato"
                    className="text-sm uppercase tracking-wider hover:opacity-70 transition-opacity cursor-pointer"
                  >
                    Contato
                  </Link>
                </li> 
              </ul>
            </div>

            {/* Coluna 2: Fale Conosco */}
            <div>
              <h4 className="font-sans text-lg uppercase tracking-widest mb-4 font-bold">
                Fale Conosco
              </h4>
              <ul className="flex flex-col gap-0 font-sans">
                <li>
                  <a
                    href="https://instagram.com/zatto.brazil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm uppercase tracking-wider hover:opacity-70 transition-opacity cursor-pointer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleWhatsAppClick}
                    className="text-sm uppercase tracking-wider hover:opacity-70 transition-opacity cursor-pointer"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/company/zatto-brazil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm uppercase tracking-wider hover:opacity-70 transition-opacity cursor-pointer"
                  >
                    LinkedIn
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Enorme no Fundo - de ponta a ponta */}
      <div className="w-full h-24 md:h-48 lg:h-96 overflow-hidden">
        <div className="relative w-[102%] left-[-1.4%] h-full">
          <Image
            src="/images/Zatto200.svg"
            alt="Zatto Brazil"
            fill
            className="object-cover object-top md:object-[center_7%] opacity-100"
            style={{ filter: 'brightness(0) saturate(100%) invert(18%) sepia(23%) saturate(1282%) hue-rotate(171deg) brightness(95%) contrast(93%)' }}
          />
        </div>
      </div>
    </footer>
  );
}
