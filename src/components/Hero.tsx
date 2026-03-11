'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], ['0%', '40%']);

  return (
    <section className="relative w-full min-h-[95vh] mt-24 overflow-hidden">
      <motion.div className="absolute inset-[0%] z-0" style={{ y }}>
        <Image
          src="/images/hero-section.webp"
          alt="Zatto Brindes"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>
    </section>
  );
}
