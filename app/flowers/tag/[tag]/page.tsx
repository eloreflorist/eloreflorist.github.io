import flowerProducts from "@/data/flowers.json";
import TagListing, { tagMetadata, tagStaticParams } from "@/components/catalog/TagListing";
import type { Metadata } from "next";

const catalog = {
  showCategory: true,
  enableCategoryFilter: true,
  accentClass: "focus:ring-pink-500",
  activePageClass: "bg-pink-500",
  imageClass: "bg-gradient-to-br from-pink-100 to-purple-100",
  resultLabel: "flowers",
};

export function generateStaticParams() {
  return tagStaticParams(flowerProducts, "flowers");
}

export function generateMetadata({ params }: { readonly params: { readonly tag: string } }): Metadata {
  return tagMetadata("flowers", params.tag, flowerProducts);
}

export default function FlowerTagPage({ params }: { readonly params: { readonly tag: string } }) {
  return <TagListing section="flowers" tagSlug={params.tag} products={flowerProducts} catalog={catalog} />;
}
