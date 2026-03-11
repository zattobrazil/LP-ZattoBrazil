import Image from 'next/image';

export default function Stats() {
  return (
    <section className="bg-[#fcf9f4] py-32 md:py-48 relative overflow-hidden w-full flex items-center justify-center">
      {/* Camada de Fundo - SVG Colorido */}
      <div className="absolute top-[85%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] z-0 pointer-events-none opacity-[0.03]">
        <Image
          src="/images/Zatto200.svg"
          alt=""
          width={2000}
          height={1000}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Camada de Texto - Frente */}
      <div className="relative z-10 flex flex-col items-center gap-4 text-center text-[#213655] font-serif text-2xl md:text-4xl lg:text-5xl tracking-tight">
        <p>
          <span className="font-bold">+700.000</span> BRINDES ENTREGUES
        </p>
        <p>
          <span className="font-bold">+150</span> EMPRESAS ATENDIDAS
        </p>
      </div>
    </section>
  );
}
