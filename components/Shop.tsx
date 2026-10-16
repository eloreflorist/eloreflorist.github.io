'use client';

import { useScrollRef } from '@/context/ScrollContext';
import { colors } from '@/app/theme';
import Link from 'next/link';

const items = [
  {
    title: "Flowers",
    image: "/flower.jpg",
    text: "Fresh local flowers available for pick up.",
    href: "/flowers",
  },
  {
    title: "Gifts",
    image: "/flower.jpg",
    text: "Floral bundles paired with curated goods.",
    href: "/gifts",
  },
  {
    title: "Weddings & Events",
    image: "/flower.jpg",
    text: "Bespoke floral designs for special moments.",
    href: "/weddings",
  },
];

export default function Shop() {
  const { shopSectionRef } = useScrollRef();

  return (
    <section ref={shopSectionRef} className="px-4 py-20" style={{ backgroundColor: colors.secondary }}>
      <h3 className="mb-10 text-center text-2xl" style={{ color: colors.primary }}>SHOP</h3>
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="text-center">
            <img
              src={item.image}
              alt={item.title}
              className="mb-4 w-full object-cover"
            />
            <h4 className="mb-2 text-lg" style={{ color: colors.primary }}>{item.title}</h4>
            <p className="mb-4 text-sm" style={{ color: colors.primary }}>{item.text}</p>
            <Link href={item.href}
              className="inline-block px-4 py-2 text-sm font-semibold transition-all duration-200 hover:outline hover:outline-1 hover:outline-current hover:scale-105"
              style={{ backgroundColor: colors.accent, color: colors.primary }}
            >
              SHOP NOW
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
