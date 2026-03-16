interface BannerCTAProps {
  title?: string;
  subtitle?: string;
  slug?: string;
  whatsappNumber?: string;
}

function formatSlugToNicheName(slug: string): string {
  return slug
    .split('-')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function BannerCTA({
  title = 'CRIAMOS PRODUTOS QUE IMPULSIONAM MARCAS E VENDAS.',
  subtitle = 'Do conceito à entrega, transformamos brindes corporativos em experiências de marca.',
  slug,
  whatsappNumber = '5511999999999',
}: BannerCTAProps) {
  const normalizedTitle = title.toLocaleUpperCase('pt-BR');
  const nicheName = slug ? formatSlugToNicheName(slug) : 'Zatto Brazil';
  const whatsappText = `Gostaria de saber mais informacoes sobre a confeccao de brindes relacionados ao nicho "${nicheName}".`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

  return (
    <section className="bg-[#213655] py-24 px-6 flex flex-col items-center text-center">
      <h2 className="font-serif text-3xl tracking-wide text-white mb-4">
        {normalizedTitle}
      </h2>

      <p className="text-xl text-white mb-8">
        {subtitle}
      </p>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="button-hover rounded-sm bg-white text-[#213655] font-bold text-xl uppercase px-8 py-3 cursor-pointer select-none"
      >
        FAÇA UM ORÇAMENTO
      </a>
    </section>
  );
}
