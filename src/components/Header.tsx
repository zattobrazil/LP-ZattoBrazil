'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'CLIENTES', id: 'clientes' },
  { label: 'CATÁLOGO', id: 'catalogo' },
  { label: 'JORNADA DO CLIENTE', id: 'jornada' },
  { label: 'PROJETOS', id: 'projetos' },
  { label: 'DEPOIMENTOS', id: 'depoimentos' },
  { label: 'CONTATO', id: 'contato' },
];

const blueBrandFilter =
  'brightness(0) saturate(100%) invert(19%) sepia(19%) saturate(1186%) hue-rotate(171deg) brightness(92%) contrast(92%)';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const visibleSections = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target.id);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        if (visibleSections.size === 0) {
          setActiveSection('');
        } else {
          // Mantém a ordem dos navLinks para ativar a primeira visível
          const first = navLinks.find(({ id }) => visibleSections.has(id));
          if (first) setActiveSection(first.id);
        }
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 bg-[#fcf9f4] flex items-center justify-between px-6 py-6 lg:px-12 xl:px-16 2xl:px-24 transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-none'}`}>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="cursor-pointer select-none">
        <Image
          src="/images/logo-zatto.png"
          alt="Zatto Brazil"
          width={192}
          height={64}
          className="w-28 md:w-32 lg:w-36 xl:w-40 2xl:w-48 h-auto"
          style={{ filter: blueBrandFilter }}
          priority
        />
      </button>

      <nav>
        <ul className="hidden md:flex flex-row items-center gap-6 lg:gap-20">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.id} className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'scale-100'}`}>
                <Link
                  href={`#${link.id}`}
                  className={`relative inline-block font-sans font-light text-[10px] md:text-xs lg:text-sm xl:text-[15px] 2xl:text-lg uppercase tracking-wide text-[#213655] transition-opacity duration-300 cursor-pointer
                    after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:bg-[#213655] after:transition-all after:duration-300
                    ${isActive ? 'opacity-100 after:w-full' : 'opacity-70 hover:opacity-100 after:w-0'}`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
