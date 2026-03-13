'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeroProps {
  imageUrl?: string;
}

export default function Hero({
  imageUrl = '/images/hero-section.png',
}: HeroProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], ['0%', '40%']);

  return (
    <section id="inicio" className="relative w-full min-h-[95vh] mt-24 overflow-hidden">
      <motion.div className="absolute inset-[0%] z-0" style={{ y }}>
        <Image
          src={imageUrl}
          alt="Imagem de destaque da Zatto Brazil"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>
    </section>
  );
}
