"use client"

import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"
import ImageCarousel from "@/components/image-carousel"

export default function ProjectDetails() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState("")

  const images = [
    { src: "/images/r-waterway-east-02-1.webp", alt: "Waterway East Building" },
    { src: "/images/r-waterway-east-02.webp", alt: "Waterway East View" },
    { src: "/images/r-waterway-east-01.webp", alt: "Waterway East Exterior" },
  ]

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedImage("")
  }

  return (
    <section id="about" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        {/* Project Images */}
        <div className="mb-12">
          <ImageCarousel images={images} onImageClick={openModal} />
        </div>

        {/* Units Details */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">أنواع الوحدات والمساحات</h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="glass p-5 rounded-xl transition-all duration-300">
              <h3 className="text-lg font-bold text-white mb-1">شقق سكنية</h3>
              <p className="text-gray-400 text-sm">تبدأ من 90 م²</p>
            </div>

            <div className="glass p-5 rounded-xl transition-all duration-300">
              <h3 className="text-lg font-bold text-white mb-1">دوبلكس</h3>
              <p className="text-gray-400 text-sm">مساحات متنوعة</p>
            </div>

            <div className="glass p-5 rounded-xl transition-all duration-300">
              <h3 className="text-lg font-bold text-white mb-1">بنتهاوس</h3>
              <p className="text-gray-400 text-sm">حتى 250 م²</p>
            </div>
          </div>

          {/* Pricing */}
          <div className="mt-8 glass-white p-6 rounded-xl transition-all duration-300">
            <h3 className="text-lg font-bold text-black mb-2 text-center">الأسعار</h3>
            <p className="text-center text-base text-gray-700">
              تبدأ من: <span className="font-bold text-black">9,000,000 جنيه</span>
            </p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          onClick={closeModal}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in duration-300"
        >
          <button
            onClick={closeModal}
            className="absolute top-4 left-4 z-10 p-2 rounded-full glass text-white hover:bg-white/20 transition-all duration-300"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative w-full h-full max-w-7xl max-h-[90vh] p-4">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Gallery Image"
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  )
}
