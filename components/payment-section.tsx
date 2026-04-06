export default function PaymentSection() {
  return (
    <section id="payment" className="py-16 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/images/r-waterway-east-01.webp" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">أنظمة الدفع والتسليم</h2>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="glass p-6 rounded-xl text-center transition-all duration-300">
              <div className="text-3xl mb-2">💰</div>
              <h3 className="text-base font-bold text-white mb-2">مقدم الحجز</h3>
              <p className="text-2xl font-bold text-white mb-1">10%</p>
              <p className="text-gray-400 text-xs">من قيمة الوحدة</p>
            </div>

            <div className="glass p-6 rounded-xl text-center transition-all duration-300">
              <div className="text-3xl mb-2">📅</div>
              <h3 className="text-base font-bold text-white mb-2">التقسيط</h3>
              <p className="text-2xl font-bold text-white mb-1">حتى 8 سنوات</p>
              <p className="text-gray-400 text-xs">أقساط مريحة</p>
            </div>

            <div className="glass p-6 rounded-xl text-center transition-all duration-300">
              <div className="text-3xl mb-2">🏗️</div>
              <h3 className="text-base font-bold text-white mb-2">التسليم</h3>
              <p className="text-2xl font-bold text-white mb-1">نصف تشطيب</p>
              <p className="text-gray-400 text-xs">2025 - 2027</p>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="glass p-6 rounded-xl transition-all duration-300">
              <h3 className="text-base font-bold text-white mb-2">📍 الموقع</h3>
              <p className="text-gray-300 text-sm">التجمع الخامس - بجوار التسعين الجنوبي</p>
              <p className="text-gray-400 text-xs mt-1">قريب من الجامعة الأمريكية AUC</p>
            </div>

            <div className="glass p-6 rounded-xl transition-all duration-300">
              <h3 className="text-base font-bold text-white mb-2">🏢 المطور</h3>
              <p className="text-gray-300 text-sm">The Waterway Developments</p>
              <p className="text-gray-400 text-xs mt-1">الووتر واي للتطوير العقاري</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
