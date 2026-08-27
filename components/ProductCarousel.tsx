'use client';

import { useState } from 'react';
import { colors } from '@/app/theme';

interface ProductCarouselProps {
  readonly productName: string;
  readonly images: readonly string[];
}

export default function ProductCarousel({ productName, images }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full flex flex-col">
      {/* Main Image Display - 4:5 Aspect Ratio */}
      <div 
        className="rounded-lg flex items-center justify-center mb-4 relative overflow-hidden" 
        style={{ 
          backgroundColor: colors.secondary,
            aspectRatio: '4 / 5',
        }}
      >
        <img
          src={images[currentIndex]}
          alt={`${productName} view ${currentIndex + 1}`}
          className="w-full"
        />
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={goToPrevious}
          className="px-4 py-2 rounded transition-colors"
          style={{
            backgroundColor: colors.accent,
            color: colors.primary,
          }}
        >
          ← Previous
        </button>

        <span className="text-sm" style={{ color: colors.primary }}>
          {currentIndex + 1} / {images.length}
        </span>

        <button
          onClick={goToNext}
          className="px-4 py-2 rounded transition-colors"
          style={{
            backgroundColor: colors.accent,
            color: colors.primary,
          }}
        >
          Next →
        </button>
      </div>

      {/* Thumbnail Indicators */}
      <div className="flex gap-2 justify-center">
        {images.map((_, index) => (
          <button
            key={`${productName}-indicator-${index}`}
            onClick={() => setCurrentIndex(index)}
            className="w-3 h-3 rounded-full transition-colors"
            style={{
              backgroundColor: index === currentIndex ? colors.primary : colors.accent,
            }}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
