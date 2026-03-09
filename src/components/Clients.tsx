import Image from 'next/image';

const clients = [
  { name: 'Hyundai AutoEver Brasil', src: '/images/cliente-hyundai.webp' },
  { name: 'Bermudes', src: '/images/cliente-bermudes.webp' },
  { name: 'Ollie', src: '/images/cliente-ollie.webp' },
  { name: 'CPFL', src: '/images/cliente-cpfl.webp' },
  { name: 'Baltieri', src: '/images/cliente-baltieri.webp' },
  { name: 'Octapharma', src: '/images/cliente-octapharma.webp' },
];

export default function Clients() {
  return (
    <section className="bg-[#fcf9f4] py-16">
      <h2 className="font-serif text-2xl tracking-tight text-[#213655] text-center mb-12">
        NOSSOS CLIENTES
      </h2>

      <div className="flex flex-row flex-wrap justify-center gap-12 px-6">
        {clients.map((client) => (
          <Image
            key={client.src}
            src={client.src}
            alt={`Logo do cliente ${client.name}`}
            width={130}
            height={60}
            className="object-contain"
          />
        ))}
      </div>
    </section>
  );
}
