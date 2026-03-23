'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { DEFAULT_CATALOG_LINK } from '@/data/lps';

type CarouselItem = {
  name: string;
  imageUrl: string;
  altText: string;
};

interface CatalogueCarouselProps {
  items?: CarouselItem[];
  catalogLink?: string;
}

const defaultItems: CarouselItem[] = [
  {
    name: 'Brinde bolsa necessaire Ollie amarela',
    imageUrl: '/images/home/necessaire-fluffy-personalizada-para-brinde-corporativo.webp',
    altText: 'Necessaire fluffy personalizada para brinde corporativo',
  },
  {
    name: 'Brinde bone DAIG PET azul',
    imageUrl: '/images/home/bone-personalizado-para-brindes-em-feiras-e-eventos.webp',
    altText: 'Bone personalizado utilizado como brinde corporativo em feiras e eventos',
  },
  {
    name: 'Brinde copo parede dupla Bermudes Advogados',
    imageUrl: '/images/home/copo-de-vidro-para-cafe-personalizado-com-logo.webp',
    altText: 'Copo de vidro para cafe personalizado com logo da empresa',
  },
  {
    name: 'Brinde porta caneta couro Octapharma',
    imageUrl: '/images/home/kit-caneta-de-metal-personalizada-com-porta-caneta.webp',
    altText: 'Kit com caneta de metal personalizada e porta-caneta corporativo',
  },
  {
    name: 'Kit funcionarios personalizado',
    imageUrl: '/images/home/kit-boas-vindas-corporativo-com-copo-termico-e-acessorios.jpg',
    altText: 'Kit de boas-vindas corporativo personalizado com copo termico, camiseta, moleskine e acessorios',
  },
  {
    name: 'Kit estagiarios onboarding',
    imageUrl: '/images/home/kit-onboarding-premium-com-necessaire-copo-e-caneta.jpg',
    altText: 'Kit onboarding premium para colaboradores contendo necessaire, copo de vidro e caneta personalizados',
  },
  {
    name: 'Necessaire personalizada em couro sintetico',
    imageUrl: '/images/home/necessaire-em-couro-sintetico-com-alca-personalizada.JPG',
    altText: 'Necessaire em couro sintetico com alca personalizada para empresas',
  },
  {
    name: 'Agenda caderno moleskine',
    imageUrl: '/images/home/agenda-moleskine-com-calendario-agricola-personalizada.JPG',
    altText: 'Agenda estilo moleskine com calendario agricola personalizado',
  },
];

export default function CatalogueCarousel({ items, catalogLink = DEFAULT_CATALOG_LINK }: CatalogueCarouselProps) {
  const baseItems = items && items.length > 0 ? items : defaultItems;
  const slides = [...baseItems, ...baseItems, ...baseItems];
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30, align: 'start' });
  const [inViewSlides, setInViewSlides] = useState<number[]>([]);
  const [visibleSlots, setVisibleSlots] = useState(4);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const updateVisibleSlots = () => setVisibleSlots(mediaQuery.matches ? 4 : 1);

    updateVisibleSlots();
    mediaQuery.addEventListener('change', updateVisibleSlots);

    return () => {
      mediaQuery.removeEventListener('change', updateVisibleSlots);
    };
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const updateInViewSlides = () => {
      emblaApi.slidesInView();

      const startIndex = emblaApi.selectedScrollSnap() % baseItems.length;
      const expectedVisible = Array.from(
        { length: visibleSlots },
        (_, offset) => (startIndex + offset) % baseItems.length
      );
      setInViewSlides(expectedVisible);
    };

    updateInViewSlides();
    emblaApi.on('slidesInView', updateInViewSlides);
    emblaApi.on('reInit', updateInViewSlides);
    emblaApi.on('select', updateInViewSlides);

    return () => {
      emblaApi.off('slidesInView', updateInViewSlides);
      emblaApi.off('reInit', updateInViewSlides);
      emblaApi.off('select', updateInViewSlides);
    };
  }, [emblaApi, baseItems.length, visibleSlots]);

  const getObjectPosition = (item: CarouselItem) => {
    if (item.imageUrl.includes('bone-personalizado-para-brindes-em-feiras-e-eventos')) return 'center 58%';
    return 'center';
  };

  const activeBars = useMemo(() => {
    if (baseItems.length === 0 || inViewSlides.length === 0) return [] as Array<{ left: number; width: number }>;

    const start = inViewSlides[0];
    const size = Math.min(visibleSlots, baseItems.length);

    if (start + size <= baseItems.length) {
      return [{ left: (start / baseItems.length) * 100, width: (size / baseItems.length) * 100 }];
    }

    const firstPart = baseItems.length - start;
    const secondPart = size - firstPart;

    return [
      { left: (start / baseItems.length) * 100, width: (firstPart / baseItems.length) * 100 },
      { left: 0, width: (secondPart / baseItems.length) * 100 },
    ];
  }, [baseItems.length, inViewSlides, visibleSlots]);

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
              <a
                href={catalogLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
                aria-label={`Abrir catalogo: ${item.name}`}
              >
                <Image
                  src={encodeURI(item.imageUrl)}
                  alt={item.altText || item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  style={{ objectPosition: getObjectPosition(item) }}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 w-[68%] max-w-xs h-5 pointer-events-none">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-2 bg-[#213655]/40 rounded-full shadow-[0_6px_18px_rgba(0,0,0,0.35)]" />
        <div className="relative z-10 h-full">
          {activeBars.map((bar, index) => (
            <div
              key={`progress-active-${index}`}
              className="absolute top-0 h-full bg-white rounded-full"
              style={{ left: `${bar.left}%`, width: `${bar.width}%` }}
            />
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
