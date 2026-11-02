import Link from 'next/link';
import { colors } from '@/app/theme';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/flowers', label: 'Flowers' },
  { href: '/gifts', label: 'Gifts' },
  { href: '/weddings', label: 'Weddings' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

type HeaderProps = {
  readonly current?: string;
};

function isCurrent(current: string, href: string) {
  if (href === '/') return current === '/';
  return current === href || current.startsWith(`${href}/`);
}

export default function Header({ current = '' }: HeaderProps) {
  return (
    <header className="fixed top-0 z-50 w-full" style={{ backgroundColor: colors.white }}>
      <input id="nav-toggle" type="checkbox" className="peer sr-only" aria-controls="site-nav" aria-label="Open menu" />

      <div className="mx-auto flex w-full max-w-7xl items-center justify-start gap-1 px-2 py-3 md:justify-center md:px-4 md:py-4">
        <label
          htmlFor="nav-toggle"
          className="inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center md:hidden"
          style={{ color: colors.primary }}
        >
          <span className="sr-only">Open menu</span>
          <MenuIcon />
        </label>
        <Link href="/" aria-label="Èlore Florist - Home" className="inline-flex items-center md:mb-4">
          <img
            src="/elore_logo_header.png"
            alt="Èlore Florist"
            width={447}
            height={191}
            className="h-10 w-auto md:h-16"
          />
        </Link>
      </div>

      <label
        htmlFor="nav-toggle"
        className="fixed inset-0 z-40 hidden bg-black/40 max-md:peer-checked:block"
        aria-label="Close menu"
      />

      <nav
        id="site-nav"
        aria-label="Main navigation"
        className="fixed inset-y-0 left-0 z-50 flex w-72 max-w-[85vw] -translate-x-full flex-col shadow-xl transition-transform duration-300 max-md:peer-checked:!translate-x-0 md:static md:z-auto md:mx-auto md:w-full md:max-w-7xl md:!translate-x-0 md:shadow-none"
        style={{ backgroundColor: colors.white }}
      >
        <div className="flex items-center justify-between border-b px-5 py-4 md:hidden" style={{ borderColor: colors.secondary }}>
          <p className="text-sm font-semibold tracking-widest" style={{ color: colors.primary }}>
            Menu
          </p>
          <label
            htmlFor="nav-toggle"
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center"
            style={{ color: colors.primary }}
          >
            <span className="sr-only">Close menu</span>
            <CloseIcon />
          </label>
        </div>
        <ul className="flex flex-col px-3 py-2 md:flex-row md:flex-wrap md:justify-center md:gap-x-3 md:px-4 md:py-0 md:pb-4 lg:gap-x-8" role="list">
          {navLinks.map(({ href, label }) => {
            const active = isCurrent(current, href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className="block px-3 py-3 text-lg tracking-wide transition-opacity duration-200 hover:opacity-70 md:px-1.5 md:py-1.5 md:text-sm md:hover:underline md:hover:underline-offset-4"
                  style={{
                    color: colors.primary,
                    fontWeight: active ? 600 : 400,
                    textDecoration: active ? 'underline' : undefined,
                    textUnderlineOffset: active ? '4px' : undefined,
                  }}
                  aria-current={active ? 'page' : undefined}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}
