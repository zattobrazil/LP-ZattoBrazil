import Image from 'next/image';

/**
 * Interface para cada imagem de case
 */
interface CaseImage {
  src: string;
  alt: string;
}

/**
 * Interface de Props do Cases Component
 */
interface CasesProps {
  images?: CaseImage[];
}

/**
 * Cases Component - Galeria Dinâmica de Projetos
 * 
 * Componente adaptável que renderiza uma galeria de imagens de cases/projetos.
 * Ajusta automaticamente o layout grid baseado na quantidade de imagens fornecidas.
 * 
 * @param images - Array de objetos com src e alt para cada imagem
 * 
 * Comportamento:
 * - 1 imagem: Grid de 1 coluna em todas as telas
 * - 2+ imagens: Grid responsivo (1 coluna mobile, 2 colunas desktop)
 */
export default function Cases({
  images = [{
    src: '/images/bloco3.png',
    alt: 'Vitrine premium de brindes corporativos personalizados'
  }]
}: CasesProps) {
  // Determina as classes do grid baseado na quantidade de imagens
  const gridClasses = images.length === 1 
    ? 'grid grid-cols-1' 
    : 'grid grid-cols-1 md:grid-cols-2';
  
  // Determina a altura das imagens baseado na quantidade
  const imageHeightClasses = images.length === 1
    ? 'h-[400px] md:h-[600px]'
    : 'h-[400px] md:h-[500px]';

  return (
    <section className="w-full py-12">
      <div className={gridClasses}>
        {images.map((image, index) => (
          <figure 
            key={index}
            className="relative overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={1920}
              height={1080}
              className={`w-full object-cover ${imageHeightClasses}`}
              quality={90}
              priority={index === 0}
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
