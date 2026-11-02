import Link from "next/link";
import flowerProducts from "@/data/flowers.json";
import NewBadge from "@/components/NewBadge";

const featuredProducts = flowerProducts.filter((product) => product.inStock).slice(0, 12);

const browseLinks = [
  { href: "/flowers", label: "All Flowers" },
  { href: "/flowers?category=Roses", label: "Roses" },
  { href: "/flowers?category=Seasonal", label: "Seasonal" },
  { href: "/flowers?category=Orchids", label: "Orchids" },
  { href: "/flowers?category=Lilies", label: "Lilies" },
  { href: "/flowers?category=Tropical", label: "Tropical" },
  { href: "/flowers?category=Luxury", label: "Luxury" },
  { href: "/flowers?category=Mixed%20Bouquets", label: "Mixed Bouquets" },
  { href: "/gifts", label: "Gifts" },
  { href: "/weddings", label: "Weddings" },
];

export default function FeaturedProducts() {
  return (
    <section aria-labelledby="featured-heading">
      <h1 id="featured-heading" className="mb-3 text-center text-3xl font-semibold md:text-4xl">
        Fresh Flower Arrangements in Surabaya
      </h1>
      <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-gray-600 md:text-base">
        Hand-crafted bouquets from Èlore Florist Surabaya. Browse roses, wedding flowers, and gift arrangements — tap a bouquet to order on WhatsApp.
      </p>

      <div className="flex gap-8 lg:gap-10">
        <aside className="hidden w-44 shrink-0 lg:block" aria-label="Browse products">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-gray-500">BROWSE</p>
          <nav>
            <ul>
              {browseLinks.map((link) => (
                <li key={link.href} className="border-b border-gray-200">
                  <Link
                    href={link.href}
                    className="block py-2.5 text-sm text-gray-700 transition-colors hover:text-gray-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="min-w-0 flex-1">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <Link key={product.slug} href={`/flowers/${product.slug}`} className="group">
                <article className="h-full overflow-hidden rounded-lg bg-gray-50 shadow-md transition-shadow group-hover:shadow-lg">
                  <div className="relative w-full overflow-hidden bg-gray-100" style={{ aspectRatio: "4 / 5" }}>
                    <img
                      src={product.images?.[0] || "/flower.jpg"}
                      alt={`${product.name} flower arrangement from Èlore Florist Surabaya`}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <NewBadge slug={product.slug} productName={product.name} />
                  </div>
                  <div className="p-3 md:p-4">
                    <h2 className="mb-1 text-sm font-semibold md:text-base">{product.name}</h2>
                    <p className="mb-1 text-xs font-medium text-pink-600">{product.category}</p>
                    <p className="hidden text-sm text-gray-600 line-clamp-2 md:block">{product.description}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/flowers"
              className="inline-block px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ backgroundColor: "#C0BBAE", color: "#59544A" }}
            >
              See all flowers
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
