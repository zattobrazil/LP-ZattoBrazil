import Image from 'next/image';

export default function FifteenYears() {
  return (
    // 1. Adicionado 'overflow-hidden' na section para a linha infinita não quebrar a tela
    <section className="relative w-full py-24 md:py-32 overflow-hidden">
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
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-24">
        {/* Coluna da Esquerda - Título */}
        <div className="flex flex-col items-start gap-24">
          <h2 className="font-serif text-white text-4xl md:text-5xl lg:text-5xl leading-tight">
            15 ANOS<br />PRODUZINDO<br />BRINDES E<br />IMPULSIONADORES
          </h2>
          <button className="bg-white text-[#213655] font-bold text-xl uppercase px-8 py-3 cursor-pointer select-none">
            CONHECER CATÁLOGO
          </button>
        </div>

        {/* Coluna da Direita - Lista */}
        <ul className="flex flex-col w-full lg:w-auto lg:max-w-xl">
          {/* 2. Removido o border-b. Adicionado 'relative' e as classes 'after:...' 
            Isso cria uma linha falsa de 100vw (100% da tela) que atira para a direita 
          */}
          <li className="relative py-5 text-white font-sans text-base lg:text-lg leading-relaxed after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[100vw] after:h-[1px] after:bg-white/40">
            Kit onboarding, Kit para palestrantes,<br />Kit para C-Level, Kit para presentear
          </li>
          <li className="relative py-5 text-white font-sans text-base lg:text-lg leading-relaxed after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[100vw] after:h-[1px] after:bg-white/40">
            Produtos para congressos, feiras e eventos
          </li>
          <li className="relative py-5 text-white font-sans text-base lg:text-lg leading-relaxed after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[100vw] after:h-[1px] after:bg-white/40">
            Datas comemorativas: Dia das Mulheres, Dia das Mães,<br />Dia dos Pais, Outubro Rosa, Novembro Azul, entre outros
          </li>
          <li className="relative py-5 text-white font-sans text-base lg:text-lg leading-relaxed after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[100vw] after:h-[1px] after:bg-white/40">
            Impulsionadores de Vendas<br />(exemplo: em compras acima de R$239 ganhe necessaire)
          </li>
          {/* O último li mantido sem linha, conforme teu código original */}
          <li className="relative py-5 text-white font-sans text-base lg:text-lg leading-relaxed after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[100vw] after:h-[1px] after:bg-white/40">
            Impulsionadores de Marca<br />(programa de pontuação)
          </li>
        </ul>
      </div>
    </section>
  );
}