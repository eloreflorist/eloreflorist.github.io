export default function Header() {
    return (
      <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <h1 className="text-sm font-semibold tracking-widest">
            Èlore Florist
          </h1>
          <ul className="hidden gap-6 text-sm md:flex">
            <li>Home</li>
            <li>Flowers</li>
            <li>Gifts</li>
            <li>Weddings</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    );
  }
  