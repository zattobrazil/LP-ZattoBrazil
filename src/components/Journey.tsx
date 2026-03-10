import Image from 'next/image';

export default function Journey() {
  return (
    <section className="relative bg-[#fcf9f4] pt-0 pb-0 md:py-20">

      {/* Container principal de conteúdo */}
      <div className="relative w-full overflow-hidden aspect-[21/9]">
        {/* Imagem do infográfico */}
        <Image
          src="/images/jornada-grafico.svg"
          alt="Gráfico da Jornada do Cliente"
          width={1920}
          height={800}
          className="w-full h-full object-cover object-center px-16"
        />

        {/* Título no canto superior direito */}
        <div className="absolute top-16 right-4 md:top-24 md:right-16 lg:right-32 text-right z-10">
          <h2 className="font-serif text-[#213655] text-3xl md:text-4xl tracking-tight">
            JORNADA DO CLIENTE ZATTO
          </h2>
          <p className="font-sans text-[#213655] text-xl font-light mt-2">
            Cuidamos de toda a jornada para você.
          </p>
        </div>

        {/* Texto no canto inferior esquerdo */}
        <div className="absolute bottom-12 left-4 md:bottom-20 md:left-16 lg:left-32 text-left z-10 max-w-xs md:max-w-sm">
          <p className="font-sans text-[#213655] text-base font-light md:text-3xl">
            Durante todo o processo, você recebe atualizações com mensagens, fotos e vídeos da sua produção.
          </p>
        </div>
      </div>
    </section>
  );
}
