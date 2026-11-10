'use client';

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import NewBadge from "@/components/NewBadge";
import StartingPrice from "@/components/StartingPrice";
import { productTags, type Taggable } from "@/lib/tags";

export type CatalogProduct = Taggable & {
  description: string;
  images?: string[];
  price?: number;
};

type ProductCatalogProps = {
  products: CatalogProduct[];
  basePath: string;
  showCategory?: boolean;
  enableCategoryFilter?: boolean;
  accentClass: string;
  activePageClass: string;
  imageClass: string;
  resultLabel: string;
};

export default function ProductCatalog({
  products,
  basePath,
  showCategory = false,
  enableCategoryFilter = false,
  accentClass,
  activePageClass,
  imageClass,
  resultLabel,
}: ProductCatalogProps) {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [sortBy, setSortBy] = useState<"name-asc" | "name-desc">("name-asc");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(products.map((p) => p.category).filter(Boolean))) as string[];
    return ["All", ...unique.sort()];
  }, [products]);

  const sortedProducts = useMemo(() => {
    let filtered = products;
    if (enableCategoryFilter && categoryFilter !== "All") {
      filtered = filtered.filter((p) => p.category === categoryFilter);
    }
    const sorted = [...filtered];
    sorted.sort((a, b) =>
      sortBy === "name-asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    return sorted;
  }, [products, categoryFilter, sortBy, enableCategoryFilter]);

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = sortedProducts.slice(startIndex, endIndex);

  useEffect(() => {
    if (!enableCategoryFilter) return;
    const categoryFromUrl = new URLSearchParams(window.location.search).get("category") || "All";
    setCategoryFilter(categoryFromUrl);
    setCurrentPage(1);
  }, [enableCategoryFilter]);

  return (
    <>
      <div className="mb-8 flex items-end gap-2 rounded-lg bg-gray-50 p-3 md:items-center md:justify-between md:gap-4 md:p-4">
        {enableCategoryFilter && (
          <div className="flex min-w-0 flex-1 flex-col gap-1 md:flex-none md:flex-row md:items-center md:gap-4">
            <label htmlFor="category-filter" className="text-[11px] font-medium leading-tight text-gray-700 md:text-sm md:whitespace-nowrap">Category:</label>
            <select
              id="category-filter"
              value={categoryFilter}
              onChange={(e) => {
                setCategoryFilter(e.target.value);
                setCurrentPage(1);
              }}
              className={`w-full min-w-0 px-1.5 py-1.5 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 md:w-auto md:px-4 md:py-2 md:text-sm ${accentClass}`}
            >
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        )}
        <div className="flex min-w-0 flex-1 flex-col gap-1 md:flex-none md:flex-row md:items-center md:gap-4">
          <label htmlFor="sort-by" className="text-[11px] font-medium leading-tight text-gray-700 md:text-sm md:whitespace-nowrap">Sort by:</label>
          <select
            id="sort-by"
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value as "name-asc" | "name-desc");
              setCurrentPage(1);
            }}
            className={`w-full min-w-0 px-1.5 py-1.5 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 md:w-auto md:px-4 md:py-2 md:text-sm ${accentClass}`}
          >
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
          </select>
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-1 md:flex-none md:flex-row md:items-center md:gap-4">
          <label htmlFor="items-per-page" className="text-[11px] font-medium leading-tight text-gray-700 md:text-sm md:whitespace-nowrap">Items per page:</label>
          <select
            id="items-per-page"
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className={`w-full min-w-0 px-1.5 py-1.5 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 md:w-auto md:px-4 md:py-2 md:text-sm ${accentClass}`}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
        {currentProducts.map((product) => {
          const section = basePath === "/flowers" || basePath === "/gifts" || basePath === "/weddings"
            ? basePath.slice(1) as "flowers" | "gifts" | "weddings"
            : undefined;
          const labels = productTags(product, section).map((tag) => tag.label).join(" · ");
          return (
          <Link key={product.slug} href={`${basePath}/${product.slug}`}>
            <article className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className={`relative flex items-center justify-center overflow-hidden ${imageClass}`} style={{ aspectRatio: "4 / 5", width: "100%" }}>
                <img
                  src={product.images?.[0] || "/flower.jpg"}
                  alt={`${product.name} from Èlore Florist Surabaya`}
                  className="w-full h-full object-cover"
                />
                <NewBadge slug={product.slug} productName={product.name} />
              </div>
              <div className="p-3 md:p-4">
                <h2 className="font-semibold mb-1 text-sm md:text-base">{product.name}</h2>
                <StartingPrice price={product.price} compact />
                {showCategory && product.category && (
                  <p className="text-xs text-pink-600 font-medium mb-2">{product.category}</p>
                )}
                <p className="hidden text-sm text-gray-600 line-clamp-2 md:block">{product.description}</p>
                {labels ? (
                  <p className="mt-2 line-clamp-2 text-[11px] text-gray-500">{labels}</p>
                ) : null}
              </div>
            </article>
          </Link>
          );
        })}
      </div>

      <div className="mt-12 flex justify-center items-center gap-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
        >
          Previous
        </button>
        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-md ${
                currentPage === page ? `${activePageClass} text-white` : "border border-gray-300 hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
        >
          Next
        </button>
      </div>

      <p className="text-center text-gray-600 mt-4">
        Showing {sortedProducts.length === 0 ? 0 : startIndex + 1} - {Math.min(endIndex, sortedProducts.length)} of {sortedProducts.length} {resultLabel}
      </p>
    </>
  );
}
