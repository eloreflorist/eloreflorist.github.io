/**
 * Mark products as NEW by slug. The ribbon hides after expiresOn (YYYY-MM-DD, inclusive, Surabaya / UTC+7).
 * Edit or remove a line here — no JSON changes needed.
 */
export const NEW_ARRIVALS: Record<string, string> = {
  "beautiful-bloom-roses-lilies": "2026-11-30",
  "vibrant-sunflower-daisy-mix": "2026-11-30",
  "meadow-fresh": "2026-11-30",
  "classic-white-green-bridal-bouquet": "2026-11-30",
  "art-deco-glamour-wedding": "2026-11-30",
  "romantic-roses-chocolates-card": "2026-11-30",
  "engagement-celebration-gift": "2026-11-30",
};

export function getNewUntil(slug: string): string | undefined {
  return NEW_ARRIVALS[slug];
}

export function isNewUntil(until: string, now = new Date()): boolean {
  const end = new Date(`${until}T23:59:59.999+07:00`);
  if (Number.isNaN(end.getTime())) return false;
  return now.getTime() <= end.getTime();
}

export function isNewArrival(slug: string, now = new Date()): boolean {
  const until = NEW_ARRIVALS[slug];
  return Boolean(until && isNewUntil(until, now));
}

export function productCrawlLabel(name: string, description: string, slug: string): string {
  const suffix = isNewArrival(slug) ? " New at Èlore Florist in Surabaya." : "";
  return `${name} – ${description}${suffix}`;
}
