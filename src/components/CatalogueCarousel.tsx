'use client';

import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

type CarouselItem = {
  name: string;
  imageUrl: string;
  altText: string;
};

interface CatalogueCarouselProps {
  items?: CarouselItem[];
}

const defaultItems: CarouselItem[] = [
  {
    name: 'Brinde bolsa necessaire Ollie amarela',
    imageUrl: '/images/brinde-bolsa-necessaire-ollie-amarela.webp',
    altText: 'Brinde com bolsa e necessaire amarela personalizada para a Ollie',
  },
  {
    name: 'Brinde bone DAIG PET azul',
    imageUrl: '/images/brinde-boné-daig-pet-azul.webp',
    altText: 'Bone azul personalizado DAIG PET para campanhas e eventos',
  },
  {
    name: 'Brinde copo parede dupla Bermudes Advogados',
    imageUrl: '/images/brinde-copo-parede-dupla-café-bermudes-advogados-vidro.webp',
    altText: 'Copo de vidro com parede dupla personalizado para Bermudes Advogados',
  },
  {
    name: 'Brinde porta caneta couro Octapharma',
    imageUrl: '/images/brinde-porta-caneta-couro-octapharma.webp',
    altText: 'Porta caneta de couro personalizado Octapharma para escritorio',
  },
  {
    name: 'Brinde bolsa Octapharma',
    imageUrl: '/images/brinde-bolsa-octapharma.webp',
    altText: 'Bolsa personalizada Octapharma para acao de brindes corporativos',
  },
  {
    name: 'Brinde caneta personalizada Aegea preta',
    imageUrl: '/images/brinde-caneta-personalizada-aegea-preta.webp',
    altText: 'Caneta preta personalizada da Aegea para kit corporativo',
  },
  {
    name: 'Brinde garrafa personalizada Octapharma',
    imageUrl: '/images/brinde-garrafa-personalizada-octapharma.webp',
    altText: 'Garrafa personalizada Octapharma como brinde corporativo premium',
  },
];

export default function CatalogueCarousel({ items }: CatalogueCarouselProps) {
  const baseItems = items && items.length > 0 ? items : defaultItems;
  const slides = [...baseItems, ...baseItems, ...baseItems];
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30, align: 'start' });
  const getObjectPosition = (item: CarouselItem) => {
    if (item.imageUrl.includes('brinde-caneta-personalizada-aegea-preta')) return 'center bottom';
    if (item.imageUrl.includes('brinde-bolsa-octapharma')) return 'center top';
    if (item.imageUrl.includes('brinde-boné-daig-pet-azul')) return 'center 58%';
    return 'center';
  };

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="catalogo" className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((item, index) => (
            <div
              key={`${item.imageUrl}-${index}`}
              className="flex-[0_0_100%] md:flex-[0_0_25%] min-w-0 relative aspect-[3/4] overflow-hidden group"
            >
              <Image
                src={encodeURI(item.imageUrl)}
                alt={item.altText || item.name}
                fill
                style={{ objectPosition: getObjectPosition(item) }}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Botão anterior */}
      <button
        onClick={scrollPrev}
        aria-label="Slide anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:opacity-70 transition-opacity"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Botão próximo */}
      <button
        onClick={scrollNext}
        aria-label="Próximo slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:opacity-70 transition-opacity"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
      <div className="w-full h-14 bg-[#a08a65]"></div>
    </section>
  );
}
