import LeadForm from "./lead-form"

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen pt-16">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/w55-aerial.jpg"
          alt="Waterway Projects"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-8rem)]">
          <div className="space-y-6 order-1 text-center lg:text-right">
            <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase">The Waterway Developments</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white">Triangle & W55</h1>
              <p className="text-xl text-gray-300 font-semibold">مشروعان استثنائيان في قلب القاهرة الجديدة</p>
            </div>
            <div className="grid grid-cols-2 gap-3 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 max-w-md mx-auto lg:mx-0">
              <div className="glass p-4 rounded-xl text-center">
                <div className="text-xl font-bold text-white">Triangle</div>
                <div className="text-gray-400 text-xs mt-1">٢٥٠ فدان – الرنج رود الثاني</div>
              </div>
              <div className="glass p-4 rounded-xl text-center">
                <div className="text-xl font-bold text-white">W55</div>
                <div className="text-gray-400 text-xs mt-1">تجاري متكامل – التجمع الخامس</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a href="tel:+201024383203" className="glass-white text-black px-6 py-3 rounded-lg font-semibold text-base">اتصل الآن</a>
              <a href="#triangle" className="glass text-white px-6 py-3 rounded-lg font-semibold text-base">استعرض المشاريع</a>
            </div>
          </div>
          <div className="order-2 w-full animate-in fade-in slide-in-from-top-4 duration-700 delay-200">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  )
}
