'use client';

import Link from 'next/link';
import { colors } from '@/app/theme';

export default function Header() {
    return (
      <header className="fixed top-0 z-50 w-full" style={{ backgroundColor: colors.white, backdropFilter: 'blur(10px)' }}>
        <nav className="mx-auto flex max-w-7xl flex-col items-center px-4 py-4">
          <Link href="/">
            <h1 className="mb-4 text-[32px] font-semibold tracking-widest hover:opacity-75 transition-opacity" style={{ color: colors.primary }}>
              Èlore Florist
            </h1>
          </Link>
          <ul className="flex gap-20 text-sm">
            <li><Link href="/" className="transition-colors" style={{ color: colors.primary }} >Home</Link></li>
            <li><Link href="/flowers" className="transition-colors" style={{ color: colors.primary }} >Flowers</Link></li>
            <li><Link href="/gifts" className="transition-colors" style={{ color: colors.primary }} >Gifts</Link></li>
            <li><Link href="/weddings" className="transition-colors" style={{ color: colors.primary }} >Weddings</Link></li>
            <li><Link href="/about" className="transition-colors" style={{ color: colors.primary }} >About</Link></li>
            <li><Link href="/contact" className="transition-colors" style={{ color: colors.primary }} >Contact</Link></li>
          </ul>
        </nav>
      </header>
    );
  }

  