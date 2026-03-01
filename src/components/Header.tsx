import Link from 'next/link';
import Image from 'next/image';

/**
 * Header Component - Navegação Global
 * 
 * Componente de cabeçalho reutilizável com logo e menu de navegação.
 * Inclui efeito de underline animado nos links do menu.
 */
export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 font-montserrat">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image 
            src="/images/logo-zatto.webp" 
            alt="Logo Zatto Brazil" 
            width={150}
            height={50}
            className="h-12 w-auto"
            priority
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {/* Menu vazio - remover no futuro se não for adicionar itens */}
        </div>
      </nav>
    </header>
  );
}
