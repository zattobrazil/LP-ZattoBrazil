'use client';

import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 0,
    greeting: 'Oi Ju,',
    text: 'Muito obrigada por toda delicadeza e atenção com a nossa marca. Parceiros como a Zatto são raros, mas muito importantes para nóss. Muito obrigada!',
    location: 'Rio de Janeiro - Rio de Janeiro',
    brand: 'Octapharma',
    logo: '/images/clientes/cliente-octapharma.webp',
  },
  {
    id: 1,
    greeting: 'Chegouuu!',
    text: 'Ao vivo é mais bonito ainda. Valeeeeeu!',
    location: 'São Paulo - São Paulo',
    brand: 'Lab1095',
    logo: '/images/clientes/cliente-lab1095.png',
  },
  {
    id: 2,
    greeting: 'To APAIXONADA pelas bolsas,',
    text: 'Nossa, ficou perfeito! Muitíssimo obrigada por ter feito com todo capricho e por ter pego de última hora.',
    location: 'Piracicaba - São Paulo',
    brand: 'FZ Semi Joias',
    logo: '/images/clientes/cliente-fz-semi-joias.png',
  },
  {
    id: 3,
    greeting: 'Nossa,',
    text: 'Ficou muito lindo, ainda melhor do que eu imaginei. Um arraso: delicado, elegante. Um brinde que eu usaria fácil se recebesse, muito condizente com o público que estara presente no jantar.',
    location: 'Salvador - Bahia',
    brand: 'Hangcha',
    logo: '/images/clientes/cliente-hangcha.png',
  },
  {
    id: 4,
    greeting: 'Foi um sucessooooo!',
    text: 'Eu postei e um monte de amiga quer, rs. Socorro! A qualidade, sem palavras!',
    location: 'Limeira - São Paulo',
    brand: 'Pedra Bruta',
    logo: '/images/clientes/cliente-pedra-bruta.png',
  },
  {
    id: 5,
    greeting: 'Elogiaram bastante os brindes,',
    text: 'incluindo o lenço! Ontem teve ate briga pela agenda. Ficaram bobos com o suporte da caneta.',
    location: 'Rio de Janeiro - RJ',
    brand: 'Octapharma',
    logo: '/images/clientes/cliente-octapharma.webp',
  },
  {
    id: 6,
    greeting: 'Bom dia, Julia!',
    text: 'Passando pra agradecer toda a atenção e dizer que o pessoal adorou os presentes. Muito obrigado!',
    location: 'Piracicaba - São Paulo',
    brand: 'Hyundai',
    logo: '/images/clientes/cliente-hyundai.webp',
  },
  {
    id: 7,
    greeting: 'Oii Ju, tudo bem?',
    text: 'Com mais calma, após o evento, quero muuuuuuuuito agradecer por todo carinho e cuidado que teve durante todo o processo. Fiquei muito feliz com tudo que entregou. Obrigado mesmo por tudo!',
    location: 'Campinas - São Paulo',
    brand: 'CPFL',
    logo: '/images/clientes/cliente-cpfl.webp',
  },
  {
    id: 8,
    greeting: 'Seu nome foi citado aqui na reunião de MKT,',
    text: 'Você trouxe um arsenal de coisas diferentes que dá pra personalizar, chaveiro, copo etc. que daria pra usar como brindes. Eles amaram a iniciativa!',
    location: 'São Paulo - São Paulo',
    brand: 'Ollie',
    logo: '/images/clientes/cliente-ollie.webp',
    isWide: true,
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
                  className={`flex-[0_0_85%] ${testimonial.isWide ? 'md:flex-[0_0_96%]' : 'md:flex-[0_0_45%]'} min-w-0 mr-6`}
                >
                  {/* Card de Depoimento */}
                  <div className="bg-[#fcf9f4] rounded-2xl p-8 text-[#213655] h-full flex flex-col select-none">
                    {/* Topo mobile: estrelas acima e saudação abaixo */}
                    <div className="md:hidden mb-4">
                      <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#9c8973"
                            className="w-4 h-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ))}
                      </div>
                      <span className="text-lg font-medium">{testimonial.greeting}</span>
                    </div>

                    {/* Topo desktop: saudação e estrelas lado a lado */}
                    <div className="hidden md:flex justify-between items-start gap-3 mb-4">
                      <span className="text-2xl font-medium">{testimonial.greeting}</span>
                      <div className="flex gap-1 shrink-0">
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
                    <p className="font-sans text-sm md:text-lg mb-6 flex-grow leading-relaxed">
                      {testimonial.text}
                    </p>

                    {/* Linha Divisória */}
                    <hr className="border-[#213655]/20 mb-4" />

                    {/* Rodapé: Empresa, Local e Logo */}
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-bold text-base">{testimonial.brand}</p>
                        <p className="text-sm text-[#213655]/70">{testimonial.location}</p>
                      </div>
                      <div
                        className={`flex items-center justify-center ${
                          testimonial.brand === 'Octapharma'
                            ? 'h-[26px] w-[72px]'
                            : testimonial.logo.includes('cliente-fz')
                              ? 'h-[16px] w-[20px] pt-2'
                              : 'h-[20px] w-[50px]'
                        }`}
                      >
                        <Image
                          src={testimonial.logo}
                          alt={`Logo ${testimonial.brand}`}
                          height={testimonial.brand === 'Octapharma' ? 26 : testimonial.logo.includes('cliente-fz') ? 16 : 20}
                          width={testimonial.brand === 'Octapharma' ? 72 : testimonial.logo.includes('cliente-fz') ? 40 : 50}
                          sizes="(max-width: 768px) 30vw, 72px"
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
