import weddingProducts from "@/data/weddings.json";
import TagListing, { tagMetadata, tagStaticParams } from "@/components/catalog/TagListing";
import type { Metadata } from "next";

const catalog = {
  accentClass: "focus:ring-rose-500",
  activePageClass: "bg-rose-500",
  imageClass: "bg-gradient-to-br from-rose-100 to-pink-100",
  resultLabel: "wedding packages",
};

export function generateStaticParams() {
  return tagStaticParams(weddingProducts, "weddings");
}

export function generateMetadata({ params }: { readonly params: { readonly tag: string } }): Metadata {
  return tagMetadata("weddings", params.tag, weddingProducts);
}

export default function WeddingTagPage({ params }: { readonly params: { readonly tag: string } }) {
  return <TagListing section="weddings" tagSlug={params.tag} products={weddingProducts} catalog={catalog} />;
}
