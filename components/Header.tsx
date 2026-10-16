import Link from 'next/link';
import { colors } from '@/app/theme';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/flowers', label: 'Flowers' },
  { href: '/gifts', label: 'Gifts' },
  { href: '/weddings', label: 'Weddings' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full" style={{ backgroundColor: colors.white, backdropFilter: 'blur(10px)' }}>
      <nav className="mx-auto flex max-w-7xl flex-col items-center px-4 py-4" aria-label="Main navigation">
        <Link href="/" aria-label="Èlore Florist - Home">
          <span className="mb-4 block text-[32px] font-semibold tracking-widest transition-opacity duration-200 hover:opacity-60" style={{ color: colors.primary }}>
            Èlore Florist
          </span>
        </Link>
        <ul className="flex gap-20 text-sm" role="list">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="relative px-3 py-1.5 tracking-wide transition-all duration-300 hover:tracking-widest hover:underline hover:underline-offset-4 hover:opacity-70"
                style={{ color: colors.primary }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

  