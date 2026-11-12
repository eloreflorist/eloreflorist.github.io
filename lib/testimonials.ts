export const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Elore+Florist+Jl.+Siwalankerto+Timur+I+No.+1B+Surabaya";

export type Testimonial = {
  name?: string;
  quote: string;
  translation?: string;
  rating: number;
  date: string;
  source: string;
};

export const testimonials: readonly Testimonial[] = [
  {
    name: "Kristina Angelia",
    quote:
      "Sudah beberapa kali beli ke sini dan hasilnya tidak ada yang mengecewakan. Bunga yang dipakai bagus bagus. Luv dehh pokoknya",
    translation:
      "I've bought here several times and the results have never disappointed. The flowers they use are really good. Love it.",
    rating: 5,
    date: "2026-09",
    source: "Google Maps",
  },
  {
    name: "Yohan Alvin Limanto",
    quote: "Bunga disini cantik2, bisa custom sesuai keinginan, bagus banget. Terima kasih.",
    translation: "The flowers here are beautiful, they can be customized, and they look really good. Thank you.",
    rating: 5,
    date: "2026-09",
    source: "Google Maps",
  },
  {
    name: "innefable Kid",
    quote: "Fast response, can give recommendations for flower and color consultations, etc. Very good and neat...",
    rating: 5,
    date: "2026-09",
    source: "Google Maps",
  },
  {
    name: "matz cs",
    quote: 'Bunga asli nya bagus".. pilihannya menarik.. fast respon juga...',
    translation: "The fresh flowers are good. The selection is interesting. The response is fast too.",
    rating: 5,
    date: "2026-08",
    source: "Google Maps",
  },
  {
    quote:
      "Pilihan bunga yang cantik dan rapi, buket nya juga lengkap dan premium. Pelayanannya ramah dan responsif. Recommended untuk hadiah dan acara spesial.",
    translation:
      "The flowers are beautiful and neatly arranged, and the bouquets are complete and premium. The service is friendly and responsive. Recommended for gifts and special occasions.",
    rating: 5,
    date: "2026-01-27",
    source: "Google Maps",
  },
];
