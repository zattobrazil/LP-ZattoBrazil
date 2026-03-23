import Image from 'next/image';

const clients = [
  { name: 'Hyundai AutoEver Brasil', src: '/images/clientes/cliente-hyundai.webp', size: 'large' as const },
  { name: 'Bermudes', src: '/images/clientes/cliente-bermudes.webp' },
  { name: 'Octapharma', src: '/images/clientes/cliente-octapharma.webp' },
  { name: 'CPFL', src: '/images/clientes/cliente-cpfl.webp', size: 'small' as const },
  { name: 'Aegea', src: '/images/clientes/cliente-aegea.webp', size: 'aegea' as const },
  { name: 'Ollie', src: '/images/clientes/cliente-ollie.webp', size: 'small' as const },
];

type DynamicClientLogo = {
  url: string;
  altText: string;
  size?: 'small' | 'medium' | 'large' | 'aegea';
};

interface ClientsProps {
  logos?: DynamicClientLogo[];
}

export default function Clients({ logos }: ClientsProps) {
  const isDynamic = Boolean(logos && logos.length);
  const mobileOrderByName: Record<string, string> = {
    Octapharma: 'order-1',
    CPFL: 'order-2',
    Bermudes: 'order-3',
    Ollie: 'order-4',
    'Hyundai AutoEver Brasil': 'order-5',
    Aegea: 'order-6',
  };
  const blueBrandFilter =
    'brightness(0) saturate(100%) invert(19%) sepia(19%) saturate(1186%) hue-rotate(171deg) brightness(92%) contrast(92%)';

  const shouldUseBlueFilter = (path: string) => {
    const normalizedPath = path.toLowerCase();

    return ['ecoprimos', 'denso', 'hyundai', 'lab1095', 'casaendo', 'visage'].some((key) =>
      normalizedPath.includes(key),
    );
  };

  const getLogoSize = (path: string, size?: DynamicClientLogo['size']) => {
    if (size === 'aegea') {
      return { width: 130, height: 140 };
    }

    if (size === 'large') {
      return { width: 150, height: 140 };
    }

    if (size === 'medium') {
      return { width: 110, height: 90 };
    }

    if (size === 'small') {
      return { width: 80, height: 80 };
    }

    const normalizedPath = path.toLowerCase();

    if (normalizedPath.includes('aegea')) {
      return { width: 130, height: 140 };
    }

    if (normalizedPath.includes('hyundai')) {
      return { width: 150, height: 140 };
    }

    if (normalizedPath.includes('denso')) {
      return { width: 110, height: 90 };
    }

    if (normalizedPath.includes('ollie') || normalizedPath.includes('cpfl')) {
      return { width: 80, height: 80 };
    }

    return { width: 180, height: 100 };
  };

  const getLogoSizes = (width: number) => `(max-width: 768px) 50vw, ${width}px`;

  return (
    <section id="clientes" className="bg-[#fcf9f4] py-16">
      <h2 className="font-serif text-2xl tracking-tight text-[#213655] text-center mb-12">
        NOSSOS CLIENTES
      </h2>

      <div className="grid grid-cols-2 gap-y-10 gap-x-6 px-6 md:flex md:flex-row md:flex-wrap md:justify-center md:gap-12">
        {isDynamic
          ? logos!.map((client) => {
              const logoSize = getLogoSize(client.url, client.size);

              return (
                <Image
                  key={client.url}
                  src={client.url}
                  alt={client.altText}
                  width={logoSize.width}
                  height={logoSize.height}
                  sizes={getLogoSizes(logoSize.width)}
                  className="object-contain justify-self-center"
                  style={shouldUseBlueFilter(client.url) ? { filter: blueBrandFilter } : undefined}
                />
              );
            })
          : clients.map((client) => {
              const logoSize = getLogoSize(client.src, client.size);

              return (
                <Image
                  key={client.src}
                  src={client.src}
                  alt={`Logo do cliente ${client.name}`}
                  width={logoSize.width}
                  height={logoSize.height}
                  sizes={getLogoSizes(logoSize.width)}
                  className={`object-contain justify-self-center ${mobileOrderByName[client.name] ?? ''} md:order-none`}
                  style={shouldUseBlueFilter(client.src) ? { filter: blueBrandFilter } : undefined}
                />
              );
            })}
      </div>
    </section>
  );
}
