import Image from 'next/image';

export default function Journey() {
  return (
    <section id="jornada" className="relative bg-[#fcf9f4] py-28 md:py-14">

      {/* Container principal de conteúdo */}
      <div className="relative max-w-7xl mx-auto aspect-[21/9] overflow-visible">
        {/* Imagem do infográfico */}
        <Image
          src="/images/jornada-grafico.svg"
          alt="Gráfico da Jornada do Cliente"
          width={1920}
          height={800}
          className="w-full h-full object-cover object-center md:px-16 px-6"
        />

        {/* Título no canto superior direito */}
        <div className="absolute -top-16 right-4 md:top-12 px-2 md:right-16 lg:right-32 text-right z-10">
          <h2 className="font-serif text-[#213655] text-2xl md:text-4xl tracking-tight">
            SUA JORNADA COM A ZATTO
          </h2>
          <p className="font-sans text-[#213655] text-md md:text-xl font-light">
            Cuidamos de cada detalhe para você.
          </p>
        </div>

        {/* Texto no canto inferior esquerdo */}
        <div className="absolute -bottom-16 left-4 px-2 md:bottom-20 md:left-16 lg:left-32 text-left z-10 max-w-xs md:max-w-sm">
          <p className="font-sans text-[#213655] text-base font-light text-md md:text-xl md:max-w-64">
            Durante todo o processo, você recebe atualizações com mensagens, fotos e vídeos da sua produção.
          </p>
        </div>
      </div>
    </section>
  );
}
