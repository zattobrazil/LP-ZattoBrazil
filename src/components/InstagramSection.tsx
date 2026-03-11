import Image from 'next/image';

const instagramPosts = [
  { id: 1, image: '/images/insta-1.webp', link: 'https://instagram.com/zatto.brazil' },
  { id: 2, image: '/images/insta-2.webp', link: 'https://instagram.com/zatto.brazil' },
  { id: 3, image: '/images/insta-3.webp', link: 'https://instagram.com/zatto.brazil' },
  { id: 4, image: '/images/insta-4.webp', link: 'https://instagram.com/zatto.brazil' },
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
                alt="Instagram Zatto"
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
