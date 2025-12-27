'use client';

import { useScrollRef } from '@/context/ScrollContext';
import { colors } from '@/app/theme';

export default function Hero() {
  const { shopSectionRef } = useScrollRef();

  const handleShopClick = () => {
    shopSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative flex h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/flower.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative text-center text-white px-4">
        <p className="mb-2 text-sm tracking-widest">WELCOME TO</p>
        <h2 className="mb-4 text-4xl font-light md:text-6xl">Èlore Florist</h2>
        <button 
          onClick={handleShopClick}
          className="rounded px-6 py-3 text-sm font-semibold transition-colors"
          style={{ backgroundColor: colors.accent, color: colors.primary }}
        >
          SHOP NOW
        </button>
      </div>
    </section>
  );
}
