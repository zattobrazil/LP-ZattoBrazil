import Image from 'next/image';

export default function Journey() {
  return (
    <section id="jornada" className="relative bg-[#fcf9f4] py-28 md:py-14">

      {/* Container para mobile com textos no topo */}
      <div className="md:hidden flex flex-col gap-8 max-w-7xl mx-auto px-6">
        {/* Textos centralizados no topo - Mobile */}
        <div className="text-center">
          <h2 className="font-serif text-[#213655] text-2xl tracking-tight mb-0">
            SUA JORNADA COM A ZATTO
          </h2>
          <p className="font-sans text-[#213655] text-lg font-light mb-4">
            Cuidamos de cada detalhe para você.
          </p>
          <p className="font-sans text-[#213655] text-base max-w-72 mx-auto font-light">
            Durante todo o processo, você recebe atualizações com mensagens, fotos e vídeos da sua produção.
          </p>
        </div>

        {/* Imagem mobile */}
        <div className="relative w-full">
          <Image
            src="/images/jornada-mobile.png"
            alt="Gráfico da Jornada do Cliente - Mobile"
            width={1080}
            height={600}
            className="w-full h-auto object-contain object-center"
          />
        </div>
      </div>

      {/* Container principal de conteúdo - Desktop */}
      <div className="hidden md:block relative max-w-7xl mx-auto aspect-[21/9] overflow-visible">
        {/* Imagem do infográfico */}
        <Image
          src="/images/jornada.png?v=novo" 
          alt="Gráfico da Jornada do Cliente"
          width={1920}
          height={800}
          sizes="(max-width: 768px) 100vw, 80vw"
          className="w-full h-full object-contain object-center md:px-16 px-6"
        />

        {/* Título no canto superior direito */}
        <div className="absolute top-12 right-16 lg:right-32 text-right z-10">
          <h2 className="font-serif text-[#213655] text-4xl tracking-tight">
            SUA JORNADA COM A ZATTO
          </h2>
          <p className="font-sans text-[#213655] text-xl font-light">
            Cuidamos de cada detalhe para você.
          </p>
        </div>

        {/* Texto no canto inferior esquerdo */}
        <div className="absolute bottom-20 left-16 lg:left-32 text-left z-10 max-w-sm">
          <p className="font-sans text-[#213655] font-light text-xl max-w-64">
            Durante todo o processo, você recebe atualizações com mensagens, fotos e vídeos da sua produção.
          </p>
        </div>
      </div>
    </section>
  );
}
