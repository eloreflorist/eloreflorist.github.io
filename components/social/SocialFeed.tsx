import type { SocialItem } from "@/lib/socialFeeds";

type SocialFeedProps = {
  id: string;
  title: string;
  intro: string;
  profileUrl: string;
  profileName: string;
  items: readonly SocialItem[];
};

function absoluteUrl(href: string) {
  return href.startsWith("http") ? href : `https://eloreflorist.github.io${href}`;
}

export default function SocialFeed({ id, title, intro, profileUrl, profileName, items }: SocialFeedProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${title} from Èlore Florist in Surabaya`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: absoluteUrl(item.href),
    })),
  };

  return (
    <section aria-labelledby={id} className="min-w-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <h2 id={id} className="flex items-center gap-4 text-sm font-semibold tracking-[0.18em] text-gray-900">
        <span className="h-px flex-1 bg-gray-300" aria-hidden="true" />
        <a href={profileUrl} rel="me noopener noreferrer" className="shrink-0 hover:opacity-70">
          {title}
        </a>
        <span className="h-px flex-1 bg-gray-300" aria-hidden="true" />
      </h2>
      <p className="sr-only">
        {intro} {profileName}
      </p>
      <div className="mt-8">
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {items.map((item) => (
            <li key={item.title} className="min-w-0">
              <a
                href={item.href}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group relative block aspect-square overflow-hidden rounded-lg bg-gray-100 shadow-md transition-shadow hover:shadow-lg"
                title={item.text}
              >
                <img
                  src={item.image || "/flower.jpg"}
                  alt={`${item.title} from Èlore Florist in Surabaya. ${item.text}`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="sr-only">{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
