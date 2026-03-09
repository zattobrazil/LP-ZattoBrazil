import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen">
      <Image
        src="/images/hero-section.png"
        alt="Hero Zatto Brazil"
        fill
        priority
        className="object-cover object-center"
      />
    </section>
  );
}
