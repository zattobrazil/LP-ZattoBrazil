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
    name: 'Catalogo 1',
    imageUrl: '/images/catalogo-1.webp',
    altText: 'Catalogo Zatto 1',
  },
  {
    name: 'Catalogo 2',
    imageUrl: '/images/catalogo-2.webp',
    altText: 'Catalogo Zatto 2',
  },
  {
    name: 'Catalogo 3',
    imageUrl: '/images/catalogo-3.webp',
    altText: 'Catalogo Zatto 3',
  },
  {
    name: 'Catalogo 4',
    imageUrl: '/images/catalogo-4.webp',
    altText: 'Catalogo Zatto 4',
  },
];

export default function CatalogueCarousel({ items }: CatalogueCarouselProps) {
  const baseItems = items && items.length > 0 ? items : defaultItems;
  const slides = [...baseItems, ...baseItems, ...baseItems];
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30, align: 'start' });

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
