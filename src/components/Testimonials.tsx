'use client';

import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    greeting: 'Oi Ju,',
    text: 'Muito obrigada por toda delicadeza e atenção com a nossa marca. Parceiros como a Zatto são raros, mas muito importantes para nós.',
    name: 'Manu Belmudes',
    location: 'RS, Brasil',
    logo: '/images/cliente-ollie.webp',
  },
  {
    id: 2,
    greeting: 'Oi Ju,',
    text: 'Muito obrigada por toda delicadeza e atenção com a nossa marca. Parceiros como a Zatto são raros, mas muito importantes para nós.',
    name: 'Manu Belmudes',
    location: 'RS, Brasil',
    logo: '/images/cliente-ollie.webp',
  },
  {
    id: 3,
    greeting: 'Oi Ju,',
    text: 'Muito obrigada por toda delicadeza e atenção com a nossa marca. Parceiros como a Zatto são raros, mas muito importantes para nós.',
    name: 'Manu Belmudes',
    location: 'RS, Brasil',
    logo: '/images/cliente-ollie.webp',
  },
  {
    id: 4,
    greeting: 'Oi Ju,',
    text: 'Muito obrigada por toda delicadeza e atenção com a nossa marca. Parceiros como a Zatto são raros, mas muito importantes para nós.',
    name: 'Manu Belmudes',
    location: 'RS, Brasil',
    logo: '/images/cliente-ollie.webp',
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="depoimentos" className="bg-[#213655] text-white py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        {/* Coluna da Esquerda: Textos e Controles */}
        <div className="w-full lg:w-1/3 flex flex-col">
          {/* Ícone de Aspas */}
          <Image
            src="/images/aspas.svg"
            alt="Aspas"
            width={100}
            height={100}
            className="mb-8"
          />
          
          {/* Título */}
          <h2 className="font-serif text-3xl lg:text-4xl uppercase tracking-tight mb-8">
            O QUE OS NOSSOS CLIENTES ESTÃO DIZENDO
          </h2>
          
          {/* Botões de Navegação */}
          <div className="flex gap-4">
            <button
              onClick={scrollPrev}
              className="hover:opacity-60 transition-opacity"
              aria-label="Depoimento anterior"
            >
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={scrollNext}
              className="hover:opacity-60 transition-opacity"
              aria-label="Próximo depoimento"
            >
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Coluna da Direita: Carrossel */}
        <div className="w-full lg:w-2/3 relative">
          {/* Efeito de Blur/Fade Out */}
          <div className="absolute top-0 right-0 w-20 md:w-32 h-full bg-gradient-to-l from-[#213655] to-transparent z-10 pointer-events-none"></div>
          
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_85%] md:flex-[0_0_45%] min-w-0 mr-6"
                >
                  {/* Card de Depoimento */}
                  <div className="bg-[#fcf9f4] rounded-2xl p-8 text-[#213655] h-full flex flex-col">
                    {/* Topo: Saudação e Estrelas */}
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-2xl font-medium">{testimonial.greeting}</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#9c8973"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ))}
                      </div>
                    </div>

                    {/* Texto do Depoimento */}
                    <p className="font-sans text-sm md:text-lg mt-4 mb-6 flex-grow leading-loose">
                      {testimonial.text}
                    </p>

                    {/* Linha Divisória */}
                    <hr className="border-[#213655]/20 mb-4" />

                    {/* Rodapé: Nome/Local e Logo */}
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-bold text-base">{testimonial.name}</p>
                        <p className="text-sm text-[#213655]/70">{testimonial.location}</p>
                      </div>
                      <div className="flex items-center justify-center h-[20px] w-[50px]">
                        <Image
                          src={testimonial.logo}
                          alt="Logo do cliente"
                          height={20}
                          width={50}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
