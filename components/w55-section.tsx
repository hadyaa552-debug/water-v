"use client"

import { MapPin, Building2, Coffee, Stethoscope } from "lucide-react"

export default function W55Section() {
  const phoneNumber = "+201024383203"
  const waMessage = encodeURIComponent("مرحباً، أنا مهتم بمشروع W55 Waterway في القاهرة الجديدة وأريد معرفة المزيد")

  return (
    <section id="w55" className="py-16 bg-black">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-600/20 text-blue-400 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            القاهرة الجديدة – التجمع الخامس
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">W55</h2>
          <p className="text-xl text-gray-400">مشروع تجاري متكامل – ووتر واي ديفلوبمنتس</p>
        </div>

        {/* Main Image */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="relative aspect-[16/7] overflow-hidden rounded-2xl bg-gray-800 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <Building2 className="w-20 h-20 mx-auto mb-4 opacity-30" />
              <p className="text-lg font-medium">W55 – Waterway Developments</p>
              <p className="text-sm mt-2 opacity-70">مفهوم تجاري جديد في قلب التجمع الخامس</p>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">نبذة عن المشروع</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              W55 هو مشروع تجاري متكامل من ووتر واي ديفلوبمنتس، يقدم مفهوماً جديداً يجمع بين العيادات الطبية، المحلات التجارية، مطاعم وكافيهات، ومكاتب إدارية. مستوحى من فلسفة الوظيفة السلسة والمشاريع المتكاملة في موقع استراتيجي بالقاهرة الجديدة.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Stethoscope, label: "عيادات طبية متخصصة" },
                { icon: Building2, label: "مكاتب إدارية" },
                { icon: Coffee, label: "مطاعم وكافيهات" },
                { icon: MapPin, label: "محلات تجارية" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg border border-gray-700">
                  <item.icon className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            {[
              { label: "النوع", value: "مشروع تجاري متكامل (Commercial)" },
              { label: "الموقع", value: "القاهرة الجديدة – التجمع الخامس" },
              { label: "الوحدات", value: "عيادات • مكاتب • محلات • مطاعم" },
              { label: "المطور", value: "The Waterway Developments" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-gray-700">
                <span className="text-blue-400 font-semibold text-sm">{item.value}</span>
                <span className="text-gray-500 text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {["عيادات طبية", "مكاتب إدارية", "محلات تجارية", "مطاعم وكافيهات", "مواقف سيارات", "أمن ٢٤/٧", "موقع استراتيجي", "تشطيب عالمي"].map((f, i) => (
            <div key={i} className="bg-gray-800 p-3 rounded-lg text-center text-sm text-gray-300 border border-gray-700">{f}</div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">احجز وحدتك في W55</h3>
          <p className="text-blue-100 mb-6">تواصل معنا للحصول على العروض الحصرية والأسعار</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${waMessage}`} target="_blank" rel="noopener noreferrer"
              className="bg-white text-blue-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">واتساب</a>
            <a href={`tel:${phoneNumber}`} className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-700 transition-colors">اتصل الآن</a>
          </div>
        </div>
      </div>
    </section>
  )
}
