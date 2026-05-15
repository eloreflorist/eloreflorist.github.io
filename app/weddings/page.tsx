'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import weddingProducts from "@/data/weddings.json";
import { useState } from "react";

export default function Weddings() {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Use products directly without sorting
  const sortedProducts = weddingProducts;

  // Calculate pagination
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = sortedProducts.slice(startIndex, endIndex);

  // Reset to page 1 when items per page changes
  const handleItemsPerPageChange = (value: number) => {
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  return (
    <>
      <Header />
      <main className="pt-40 pb-20">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="mb-8 text-4xl font-semibold text-center">Wedding Flowers</h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Make your special day unforgettable with our stunning wedding flower arrangements and bridal bouquets.
          </p>
          
          {/* Controls */}
          <div className="mb-8 flex justify-end items-center gap-4 bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium text-gray-700">Items per page:</label>
              <select
                value={itemsPerPage}
                onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentProducts.map((product) => (
              <Link key={product.slug} href={`/weddings/${product.slug}`}>
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                  <div 
                    className="flex items-center justify-center bg-gradient-to-br from-rose-100 to-pink-100"
                    style={{
                      aspectRatio: '1 / 1',
                      width: '100%'
                    }}
                  >
                    <img 
                      src={product.images?.[0] || '/flower.jpg'} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-600">{product.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
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
                    currentPage === page
                      ? 'bg-rose-500 text-white'
                      : 'border border-gray-300 hover:bg-gray-50'
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

          {/* Results info */}
          <p className="text-center text-gray-600 mt-4">
            Showing {startIndex + 1} - {Math.min(endIndex, sortedProducts.length)} of {sortedProducts.length} wedding packages
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
