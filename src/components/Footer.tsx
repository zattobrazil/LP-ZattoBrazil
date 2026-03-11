import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#fcf9f4] text-[#213655] pt-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pb-20">
        {/* Área Superior */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-12">
          {/* Lado Esquerdo: Título e Botão */}
          <div className="lg:w-1/3">
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl lg:w-64 mb-6 leading-tight">
              CONECTANDO MARCAS <br />E PESSOAS
            </h3>
            <Link
              href="#catalogo"
              className="inline-block bg-[#213655] text-[#fcf9f4] font-sans font-bold text-md uppercase tracking-widest px-8 py-4 hover:opacity-90 transition-opacity"
            >
              Conheça Nosso Catálogo
            </Link>
          </div>

          {/* Lado Direito: Colunas de Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
            {/* Coluna 1: Navegação */}
            <div>
              <h4 className="font-sans text-xs uppercase tracking-widest mb-4 font-bold">
                Zatto Brazil
              </h4>
              <ul className="flex flex-col gap-0 font-sans">
                <li>
                  <Link
                    href="#projetos"
                    className="text-xs uppercase tracking-wider hover:opacity-70 transition-opacity cursor-pointer"
                  >
                    Projetos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#catalogo"
                    className="text-xs uppercase tracking-wider hover:opacity-70 transition-opacity cursor-pointer"
                  >
                    Catálogo
                  </Link>
                </li>
                <li>
                  <Link
                    href="#jornada"
                    className="text-xs uppercase tracking-wider hover:opacity-70 transition-opacity cursor-pointer"
                  >
                    Jornada do Cliente
                  </Link>
                </li>
                <li>
                  <Link
                    href="#depoimentos"
                    className="text-xs uppercase tracking-wider hover:opacity-70 transition-opacity cursor-pointer"
                  >
                    Depoimentos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contato"
                    className="text-xs uppercase tracking-wider hover:opacity-70 transition-opacity cursor-pointer"
                  >
                    Contato
                  </Link>
                </li> <span className='text-xs uppercase tracking-wider hover:opacity-70 transition-opacity cursor-pointer'><a href="https://muxstudio.com.br" target="_blank" rel="noopener noreferrer">MUX Studio</a></span>
              </ul>
            </div>

            {/* Coluna 2: Fale Conosco */}
            <div>
              <h4 className="font-sans text-xs uppercase tracking-widest mb-4 font-bold">
                Fale Conosco
              </h4>
              <ul className="flex flex-col gap-0 font-sans">
                <li>
                  <a
                    href="https://instagram.com/zattobrazil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-wider hover:opacity-70 transition-opacity cursor-pointer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-wider hover:opacity-70 transition-opacity cursor-pointer"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/company/zattobrazil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-wider hover:opacity-70 transition-opacity cursor-pointer"
                  >
                    LinkedIn
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Enorme no Fundo - de ponta a ponta */}
      <div className="w-full h-32 md:h-48 lg:h-96 overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="/images/Zatto200.svg"
            alt="Zatto Brazil"
            fill
            className="object-cover object-top opacity-100"
            style={{ objectPosition: 'center 7%', filter: 'brightness(0) saturate(100%) invert(18%) sepia(23%) saturate(1282%) hue-rotate(171deg) brightness(95%) contrast(93%)' }}
          />
        </div>
      </div>
    </footer>
  );
}
