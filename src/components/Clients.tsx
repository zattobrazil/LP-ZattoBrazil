import Image from 'next/image';

const clients = [
  { name: 'Hyundai AutoEver Brasil', src: '/images/cliente-hyundai.webp', large: true },
  { name: 'Bermudes', src: '/images/cliente-bermudes.webp' },
  { name: 'Octapharma', src: '/images/cliente-octapharma.webp' },
  { name: 'CPFL', src: '/images/cliente-cpfl.webp', small: true },
  { name: 'Aegea', src: '/images/cliente-aegea.webp', aegea: true },
  { name: 'Ollie', src: '/images/cliente-ollie.webp', small: true },
];

export default function Clients() {
  return (
    <section id="clientes" className="bg-[#fcf9f4] py-16">
      <h2 className="font-serif text-2xl tracking-tight text-[#213655] text-center mb-12">
        NOSSOS CLIENTES
      </h2>

      <div className="flex flex-row flex-wrap justify-center gap-12 px-6">
        {clients.map((client) => (
          <Image
            key={client.src}
            src={client.src}
            alt={`Logo do cliente ${client.name}`}
            width={client.aegea ? 130 : client.large ? 150 : client.small ? 80 : 180}
            height={client.aegea ? 140 : client.large ? 140 : client.small ? 80 : 100}
            className="object-contain"
          />
        ))}
      </div>
    </section>
  );
}
