import { getProductSchema, type ProductSection, type ProductSeoInput } from "@/lib/productSeo";

type ProductJsonLdProps = {
  product: ProductSeoInput;
  section: ProductSection;
};

export default function ProductJsonLd({ product, section }: ProductJsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(getProductSchema(product, section)) }}
    />
  );
}
