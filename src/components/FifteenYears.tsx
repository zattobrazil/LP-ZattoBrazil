import Image from 'next/image';

export default function FifteenYears() {
  return (
    <section className="relative w-full py-24 md:py-32">
      {/* Fundo */}
      <Image
        src="/images/bg-15anos.webp"
        alt="15 anos produzindo brindes"
        fill
        className="object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>

      {/* Container de Conteúdo */}
      <div className="relative z-20 w-full max-w-full mx-auto px-6 md:px-12 flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-24 lg:px-32">
        {/* Coluna da Esquerda - Título */}
        <h2 className="font-serif text-white text-4xl md:text-5xl lg:text-6xl leading-tight">
          15 ANOS<br />PRODUZINDO<br />BRINDES E<br />IMPULSIONADORES
        </h2>

        {/* Coluna da Direita - Lista */}
        <ul className="flex flex-col w-full lg:w-auto lg:max-w-xl">
          <li className="py-5 border-b border-white/40 text-white font-sans text-base lg:text-xl leading-relaxed">
            Kit onboarding, Kit para palestrantes,<br />Kit para C-Level, Kit para presentear
          </li>
          <li className="py-5 border-b border-white/40 text-white font-sans text-base lg:text-xl leading-relaxed">
            Produtos para congressos, feiras e eventos
          </li>
          <li className="py-5 border-b border-white/40 text-white font-sans text-base lg:text-xl leading-relaxed">
            Datas comemorativas: Dia das Mulheres, Dia das Mães,<br />Dia dos Pais, Outubro Rosa, Novembro Azul, entre outros
          </li>
          <li className="py-5 border-b border-white/40 text-white font-sans text-base lg:text-xl leading-relaxed">
            Impulsionadores de Vendas<br />(exemplo: em compras acima de R$239 ganhe necessaire)
          </li>
          <li className="py-5 border-b border-white/40 text-white font-sans text-base lg:text-xl leading-relaxed">
            Impulsionadores de Marca<br />(programa de pontuação)
          </li>
        </ul>
      </div>
    </section>
  );
}
