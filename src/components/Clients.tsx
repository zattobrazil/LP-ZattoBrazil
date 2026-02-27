import Image from 'next/image';

/**
 * Interface de Props do Clients Component
 */
interface ClientsProps {
  title?: string;
  logosImage?: string;
}

/**
 * Clients Component - Seção de Logos dos Clientes
 * 
 * Componente que exibe os logos dos clientes em uma seção limpa e centralizada.
 * A imagem dos logos possui efeito de hover para um toque premium.
 * 
 * @param title - Título da seção
 * @param logosImage - Caminho da imagem com os logos dos clientes
 */
export default function Clients({
  title = 'NOSSOS CLIENTES',
  logosImage = '/images/clientes.png',
}: ClientsProps) {
  return (
    <section className="bg-white py-12 md:py-16 flex flex-col items-center">
      {/* Título */}
      <h2 className="text-[#585936] font-bold text-xl tracking-[0.2em] uppercase mb-8 md:mb-10 text-center">
        {title}
      </h2>

      {/* Container da Imagem */}
      <div className="w-full max-w-5xl px-4">
        <Image
          src={logosImage}
          alt="Logos dos nossos clientes"
          width={1200}
          height={400}
          className="w-full h-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
          priority={false}
        />
      </div>
    </section>
  );
}
