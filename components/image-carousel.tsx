"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselImage {
  src: string
  alt: string
}

interface ImageCarouselProps {
  images: CarouselImage[]
  onImageClick: (src: string) => void
  autoPlayInterval?: number
}

export default function ImageCarousel({
  images,
  onImageClick,
  autoPlayInterval = 3000,
}: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const total = images.length

  const prev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + total) % total)
  }, [total])

  const next = useCallback(() => {
    setActiveIndex((i) => (i + 1) % total)
  }, [total])

  useEffect(() => {
    const timer = setInterval(next, autoPlayInterval)
    return () => clearInterval(timer)
  }, [next, autoPlayInterval])

  // Compute the three visible indices: left, center, right
  const leftIndex = (activeIndex - 1 + total) % total
  const centerIndex = activeIndex
  const rightIndex = (activeIndex + 1) % total

  const visible = [
    { image: images[leftIndex], pos: "left", index: leftIndex },
    { image: images[centerIndex], pos: "center", index: centerIndex },
    { image: images[rightIndex], pos: "right", index: rightIndex },
  ]

  return (
    <div className="w-full">
      {/* Carousel track */}
      <div className="relative flex items-center gap-3">
        {/* Prev button */}
        <button
          onClick={prev}
          aria-label="Previous image"
          className="flex-shrink-0 z-10 p-2 rounded-full glass text-white transition-all duration-200"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Three square tiles */}
        <div className="flex gap-3 flex-1 min-w-0">
          {visible.map(({ image, pos, index }) => (
            <button
              key={index}
              onClick={() => onImageClick(image.src)}
              className={`
                relative flex-1 min-w-0 rounded-xl overflow-hidden cursor-pointer
                aspect-square transition-all duration-500
                ${pos === "center" ? "ring-2 ring-white/40 shadow-xl" : "opacity-60"}
              `}
              aria-label={image.alt}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={next}
          aria-label="Next image"
          className="flex-shrink-0 z-10 p-2 rounded-full glass text-white transition-all duration-200"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            aria-label={`Go to image ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "w-5 h-2 bg-white"
                : "w-2 h-2 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
