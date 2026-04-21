"use client"

import { MapPin, Building2, Coffee, Stethoscope } from "lucide-react"

export default function W55Section() {
  const phoneNumber = "+201018336004"
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
          <p className="text-xl text-gray-400">مشروع تجاري متكامل – The Waterway Developments</p>
        </div>

        {/* Main Image */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="relative aspect-[16/7] overflow-hidden rounded-2xl">
            <img src="/images/w55-aerial.jpg" alt="W55 Waterway" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 right-6 text-right text-white">
              <p className="text-2xl font-bold">W55</p>
              <p className="text-white/70 text-sm">القاهرة الجديدة – التجمع الخامس</p>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">نبذة عن المشروع</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              W55 هو مشروع تجاري متكامل من The Waterway Developments، يقدم مفهوماً جديداً يجمع بين العيادات الطبية، المحلات التجارية، مطاعم وكافيهات، ومكاتب إدارية. مستوحى من فلسفة الوظيفة السلسة والمشاريع المتكاملة في موقع استراتيجي بالقاهرة الجديدة.
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

        {/* 🔥 Launch Offer */}
        <div className="max-w-6xl mx-auto mb-10">
          <div className="relative overflow-hidden rounded-2xl border border-blue-500/30"
            style={{background: "linear-gradient(135deg, #0f1a2e 0%, #0a1628 50%, #0f1a2e 100%)"}}>
            <div className="absolute top-0 left-0 right-0 flex justify-center">
              <div className="bg-blue-500 text-white text-xs font-black tracking-widest px-8 py-2 rounded-b-xl uppercase">
                🔥 عرض اللونش — محدود
              </div>
            </div>
            <div className="pt-10 pb-8 px-8">
              <h3 className="text-2xl lg:text-3xl font-black text-white text-center mb-8">
                عرض حصري لـ <span className="text-blue-400">W55</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: "💰", value: "175,000", unit: "جنيه/م²", label: "سعر المتر يبدأ من" },
                  { icon: "🏦", value: "10%", unit: "مقدم", label: "عند الحجز فقط" },
                  { icon: "📅", value: "8", unit: "سنوات", label: "أقساط مريحة حتى" },
                  { icon: "🏗️", value: "4", unit: "سنوات", label: "استلام خلال" },
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-blue-500/20 rounded-xl p-5 text-center hover:bg-white/10 transition-colors">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="text-2xl lg:text-3xl font-black text-blue-400 leading-none">{item.value}</div>
                    <div className="text-white font-bold text-sm mt-1">{item.unit}</div>
                    <div className="text-gray-400 text-xs mt-2 leading-tight">{item.label}</div>
                  </div>
                ))}
              </div>
              <div className="border-t border-blue-500/20 pt-6">
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  {[
                    { label: "نوع الوحدات", value: "عيادات • مكاتب • تجاري • مطاعم" },
                    { label: "الموقع", value: "التجمع الخامس – القاهرة الجديدة" },
                    { label: "المطور", value: "The Waterway Developments" },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="text-gray-500 text-xs mb-1">{item.label}</div>
                      <div className="text-white font-semibold text-sm">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
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
