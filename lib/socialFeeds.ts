export const instagramProfile = "https://www.instagram.com/eloreflorist/";
export const threadsProfile = "https://www.threads.com/@eloreflorist";

export type SocialItem = {
  title: string;
  text: string;
  href: string;
  date?: string;
  image?: string;
  price?: number;
};

export const instagramPosts: readonly SocialItem[] = [
  {
    title: "Blue and white standing flowers",
    text: "Blue and white standing flowers for birthdays, grand openings, congratulations, and other special moments. Posted by Èlore Florist on Instagram.",
    href: "https://www.instagram.com/eloreflorist/p/DeTGIcxS8j8/",
    image: "/instagram/standing-flowers.webp",
  },
  {
    title: "Flowers with Hirono",
    text: "Giving flowers is cute, adding Hirono? even cuter. Posted by Èlore Florist on Instagram.",
    href: "https://www.instagram.com/eloreflorist/p/Dc8s04Nkm-J/",
    image: "/instagram/hirono.webp",
  },
  {
    title: "Fairy core bouquet",
    text: "Fairy core, made into a bouquet. Posted by Èlore Florist on Instagram.",
    href: "https://www.instagram.com/eloreflorist/p/DeyM7FEynku/",
    image: "/instagram/fairy-core.webp",
  },
  {
    title: "A bouquet of pretty things",
    text: "The bouquet that says you deserve all the pretty things, for a birthday, anniversary, graduation, or just to make someone smile. Posted by Èlore Florist on Instagram.",
    href: "https://www.instagram.com/eloreflorist/p/DeYcP9-SEFH/",
    image: "/instagram/pretty-things.webp",
  },
];

export const threadsPosts: readonly SocialItem[] = [
  {
    title: "Red roses",
    text: "A red rose bouquet posted on Threads. Can't go wrong with red.",
    href: threadsProfile,
    date: "Recent",
  },
  {
    title: "Pink lilies and gerberas",
    text: "Pink lilies, pink gerberas, and a touch of red, posted on Threads.",
    href: threadsProfile,
    date: "2026-10-29",
  },
  {
    title: "Graduation bloom box",
    text: "A graduation bloom box posted on Threads for wisuda and celebrations in Surabaya.",
    href: threadsProfile,
    date: "2026-10-20",
  },
  {
    title: "A bouquet for an ordinary day",
    text: "A bouquet posted on Threads for a day with no special occasion.",
    href: threadsProfile,
    date: "2026-10-19",
  },
];
