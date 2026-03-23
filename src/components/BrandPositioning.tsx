import Image from 'next/image';

export default function BrandPositioning() {
  return (
    <section id="projetos" className="w-full grid grid-cols-1 md:grid-cols-2">
      {/* Coluna da esquerda - Conteúdo de texto */}
      <div className="bg-[#213655] text-white flex flex-col justify-center py-12 px-6 lg:p-24 lg:py-40">
        <p className="font-sans text-lg md:text-xl mb-1">não vendemos</p>
        
        <h2 className="font-serif text-4xl lg:text-5xl tracking-tight mb-8 line-through">
          BRINDES CORPORATIVOS
        </h2>
        
        <p className="font-sans text-lg md:text-xl mb-1">acreditamos e vendemos</p>
        
        <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-tight leading-tight">
          Impulsionadores de Marca<br />Impulsionadores de Vendas
        </h3>
      </div>

      {/* Coluna da direita - Imagem */}
      <div className="relative w-full min-h-[400px] md:min-h-full">
        <Image
          src="/images/posicionamento.webp"
          alt="Bastidores de produção Zatto"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-[center_35%] grayscale"
        />
      </div>
    </section>
  );
}
