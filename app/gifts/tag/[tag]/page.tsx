import giftProducts from "@/data/gifts.json";
import TagListing, { tagMetadata, tagStaticParams } from "@/components/catalog/TagListing";
import type { Metadata } from "next";

const catalog = {
  accentClass: "focus:ring-orange-500",
  activePageClass: "bg-orange-500",
  imageClass: "bg-gradient-to-br from-yellow-100 to-orange-100",
  resultLabel: "gift collections",
};

export function generateStaticParams() {
  return tagStaticParams(giftProducts, "gifts");
}

export function generateMetadata({ params }: { readonly params: { readonly tag: string } }): Metadata {
  return tagMetadata("gifts", params.tag, giftProducts);
}

export default function GiftTagPage({ params }: { readonly params: { readonly tag: string } }) {
  return <TagListing section="gifts" tagSlug={params.tag} products={giftProducts} catalog={catalog} />;
}
