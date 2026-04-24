"use client"

import { useState } from "react"
import { X, MapPin, Building2, Ruler, CreditCard, Home } from "lucide-react"
import ImageCarousel from "@/components/image-carousel"

export default function TriangleSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState("")

  const images = [
    { src: "https://prod-images.nawy.com/processed/compound_image/image/13075/default.webp", alt: "Triangle Waterway - واجهة المشروع" },
    { src: "https://prod-images.nawy.com/processed/compound_image/image/13079/default.webp", alt: "Triangle Waterway - فيلات فاخرة" },
    { src: "https://prod-images.nawy.com/processed/compound_image/image/13080/default.webp", alt: "Triangle Waterway - المساحات الخضراء" },
    { src: "https://prod-images.nawy.com/processed/compound_image/image/13078/default.webp", alt: "Triangle Waterway - تاون هاوس" },
    { src: "https://prod-images.nawy.com/processed/compound_image/image/13077/default.webp", alt: "Triangle Waterway - البارك المركزي" },
    { src: "https://prod-images.nawy.com/processed/compound_image/image/13076/default.webp", alt: "Triangle Waterway - المدخل الرئيسي" },
    { src: "https://prod-images.nawy.com/processed/compound_image/image/13057/default.webp", alt: "Triangle Waterway - منظر جوي" },
  ]

  const openModal = (src: string) => { setSelectedImage(src); setIsModalOpen(true) }
  const closeModal = () => { setIsModalOpen(false); setSelectedImage("") }

  const phoneNumber = "+201123466035"
  const waMessage = encodeURIComponent("مرحباً، أنا مهتم بمشروع Triangle Waterway في القاهرة الجديدة وأريد معرفة المزيد")

  return (
    <section id="triangle" className="py-16 bg-gray-950">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-600/20 text-blue-400 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            القاهرة الجديدة – الرنج رود الثاني
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Triangle</h2>
          <p className="text-xl text-gray-400">ترايانجل – The Waterway Developments</p>
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <ImageCarousel images={images} onImageClick={openModal} />
        </div>

        {/* Details Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">نبذة عن المشروع</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Triangle هو مشروع سكني راقٍ من The Waterway Developments على ٢٥٠ فداناً في قلب القاهرة الجديدة، مباشرةً على الرنج رود الثاني أمام Palm Hills. ٨٠٪ من المساحة مخصصة للطبيعة والحدائق، مع بارك مركزي يُعد من أكبر ٥ حدائق في القاهرة على مساحة ٤٨ فداناً.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[{ value: "250", label: "فدان" }, { value: "80%", label: "مساحات خضراء" }, { value: "48", label: "فدان بارك مركزي" }].map((s, i) => (
                <div key={i} className="bg-gray-800 p-4 rounded-lg text-center border border-gray-700">
                  <div className="text-2xl font-bold text-blue-400 mb-1">{s.value}</div>
                  <div className="text-gray-400 text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            {[
              { icon: MapPin, label: "الموقع", value: "الرنج رود الثاني – أمام Palm Hills – القاهرة الجديدة" },
              { icon: Home, label: "الوحدات", value: "فيلات مستقلة • Park Mansions • توين هاوس • تاون هاوس" },
              { icon: Ruler, label: "قريب من", value: "Madinaty • Mostakbal City • AUC • مطار القاهرة" },
              { icon: CreditCard, label: "السداد", value: "٥٪ مقدم | تقسيط حتى ٩ سنوات" },
              { icon: Building2, label: "فندق", value: "فندق ٥ نجوم على ٣.٦ فدان داخل المشروع" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-gray-800 rounded-lg border border-gray-700">
                <item.icon className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-500 text-xs block">{item.label}</span>
                  <span className="text-white text-sm">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {["كلوب هاوس اجتماعي", "فندق ٥ نجوم", "بارك مركزي ٤٨ فدان", "مراكز طبية", "جيم ومسارات ركض", "مناطق تجارية", "كاميرات مراقبة", "أمن ٢٤/٧"].map((f, i) => (
            <div key={i} className="bg-gray-800 p-3 rounded-lg text-center text-sm text-gray-300 border border-gray-700">{f}</div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-6xl mx-auto bg-blue-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">احجز وحدتك في Triangle</h3>
          <p className="text-blue-100 mb-6">تواصل معنا للحصول على العروض الحصرية والأسعار</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${waMessage}`} target="_blank" rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">واتساب</a>
            <a href={`tel:${phoneNumber}`} className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors">اتصل الآن</a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <button className="absolute top-4 right-4 text-white bg-gray-800 rounded-full p-2" onClick={closeModal}>
            <X className="w-6 h-6" />
          </button>
          <img src={selectedImage} alt="Triangle" className="max-w-4xl max-h-[85vh] object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  )
}
