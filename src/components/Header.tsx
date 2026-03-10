import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { label: 'CLIENTES', href: '#clientes' },
  { label: 'PROJETOS', href: '#projetos' },
  { label: 'CATÁLOGO', href: '#catalogo' },
  { label: 'JORNADA DO CLIENTE', href: '#jornada' },
  { label: 'DEPOIMENTOS', href: '#depoimentos' },
  { label: 'CONTATO', href: '#contato' },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#fcf9f4] flex items-center justify-between px-6 py-8 md:px-12 lg:px-16">
      <Link href="/">
        <Image
          src="/images/logo-zatto.webp"
          alt="Zatto Brazil"
          width={120}
          height={40}
          priority
        />
      </Link>

      <nav>
        <ul className="hidden md:flex flex-row items-center gap-6 lg:gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-sans text-[10px] lg:text-xl uppercase tracking-wide text-[#213655] hover:opacity-70 transition-opacity"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
