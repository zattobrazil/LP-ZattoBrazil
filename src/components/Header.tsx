import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { label: 'INÍCIO', href: '#inicio' },
  { label: 'CLIENTES', href: '#clientes' },
  { label: 'PROJETOS', href: '#projetos' },
  { label: 'JORNADA DO CLIENTE', href: '#jornada' },
  { label: 'CATÁLOGO', href: '#catalogo' },
  { label: 'AVALIAÇÕES', href: '#avaliacoes' },
  { label: 'CONTATO', href: '#contato' },
];

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 flex items-start justify-between p-10">
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
        <ul className="flex flex-col items-end gap-1 text-xs uppercase tracking-widest">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[#213655] hover:opacity-60 transition-opacity duration-200"
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
