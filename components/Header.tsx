'use client';

import Link from 'next/link';

export default function Header() {
    return (
      <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl flex-col items-center px-4 py-4">
          <Link href="/">
            <h1 className="mb-4 text-[32px] font-semibold tracking-widest hover:opacity-75 transition-opacity">
              Èlore Florist
            </h1>
          </Link>
          <ul className="flex gap-20 text-sm">
            <li><Link href="/" className="hover:text-gray-600 transition-colors">Home</Link></li>
            <li><Link href="/flowers" className="hover:text-gray-600 transition-colors">Flowers</Link></li>
            <li><Link href="/gifts" className="hover:text-gray-600 transition-colors">Gifts</Link></li>
            <li><Link href="/weddings" className="hover:text-gray-600 transition-colors">Weddings</Link></li>
            <li><Link href="/about" className="hover:text-gray-600 transition-colors">About</Link></li>
            <li><Link href="/contact" className="hover:text-gray-600 transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
  