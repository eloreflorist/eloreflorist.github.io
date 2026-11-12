import ShopGuidePage from "@/components/blog/ShopGuidePage";
import { guideMetadata, shopGuides } from "@/lib/guides";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return shopGuides.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = shopGuides.find((item) => item.slug === params.slug);
  if (!guide) return { title: "Not found – Èlore Florist" };
  return guideMetadata(guide);
}

export default function ShopGuideRoute({ params }: { params: { slug: string } }) {
  const guide = shopGuides.find((item) => item.slug === params.slug);
  if (!guide) notFound();
  return <ShopGuidePage guide={guide} />;
}
