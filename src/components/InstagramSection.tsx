import Image from 'next/image';

const instagramPosts = [
  {
    id: 1,
    image: '/images/garrafa-plastico-tampa-madeira-octapharma.webp',
    alt: 'Garrafa personalizada Octapharma com tampa de madeira',
    link: 'https://instagram.com/zatto.brazil',
  },
  {
    id: 2,
    image: '/images/kit-bolsa-e-necessaire-octapharma.jpg',
    alt: 'Kit com bolsa e necessaire personalizado Octapharma',
    link: 'https://instagram.com/zatto.brazil',
  },
  {
    id: 3,
    image: '/images/kit-bolsa-e-necessaires-hyundai.webp',
    alt: 'Kit com bolsa e necessaires personalizados Hyundai',
    link: 'https://instagram.com/zatto.brazil',
  },
  {
    id: 4,
    image: '/images/bolsa-ecobag-octapharma-personalizada.webp',
    alt: 'Ecobag personalizada Octapharma para acao promocional',
    link: 'https://instagram.com/zatto.brazil',
  },
];

export default function InstagramSection() {
  return (
    <section className="bg-[#fcf9f4] w-full">
      {/* Área do Título */}
      <div className="py-16 md:py-24">
        <h2 className="text-center text-[#213655] font-serif text-3xl md:text-4xl uppercase tracking-tight">
          Siga Nosso Instagram
        </h2>
      </div>

      {/* Área da Grade de Fotos */}
      <div className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full aspect-[4/5] overflow-hidden group block cursor-pointer"
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
