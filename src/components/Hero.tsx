/**
 * Interface de Props do Hero Component
 */
interface HeroProps {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  bgImage?: string;
}

/**
 * Hero Component - Seção Principal do Site
 * 
 * Componente visual que ocupa a parte superior da página com imagem de fundo,
 * título, subtítulo e call-to-action centralizados.
 * 
 * @param headline - Título principal
 * @param subheadline - Subtítulo descritivo
 * @param ctaText - Texto do botão CTA
 * @param bgImage - Caminho da imagem de fundo
 */
export default function Hero({
  headline = 'CRIAMOS PRODUTOS QUE IMPULSIONAM MARCAS E VENDAS.',
  subheadline = 'Do conceito à entrega, transformamos brindes corporativos em experiência de marca.',
  ctaText = 'Faça um orçamento',
  bgImage = '/images/img-header.png',
}: HeroProps) {
  return (
    <section 
      className="relative min-h-[85vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`
      }}
    >
      {/* Overlay Escuro */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Conteúdo Principal */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-full mx-auto">
        {/* Título Principal */}
        <h1 className="text-white uppercase text-2xl md:text-4xl tracking-widest font-light">
          {headline}
        </h1>

        {/* Subtítulo */}
        <p className="text-white my-6 text-lg md:text-xl">
          {subheadline}
        </p>

        {/* Botão CTA */}
        <button className="bg-transparent border border-1 border-white text-white font-bold px-9 py-4 uppercase rounded-xl hover:scale-105 transition-transform">
          {ctaText}
        </button>
      </div>
    </section>
  );
}
