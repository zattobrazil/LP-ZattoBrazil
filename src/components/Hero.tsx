import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[95vh] mt-24">
      <Image
        src="/images/hero-section.webp"
        alt="Hero Zatto Brazil"
        fill
        priority
        className="object-cover object-center"
      />
    </section>
  );
}
