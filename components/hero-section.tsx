import Image from "next/image"
import LeadForm from "./lead-form"

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen pt-16">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/r-waterway-east-02-1.webp"
          alt="Waterway East Building"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-8rem)]">
          {/* Right Column - Content */}
          <div className="space-y-6 order-1 text-center lg:text-right">
            <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <h1 className="text-4xl lg:text-5xl font-bold text-white text-balance">ووتر واي إيست</h1>
              <p className="text-xl text-gray-300 font-semibold">حياة جديدة في قلب التجمع الخامس</p>
              <p className="text-base text-gray-400 leading-relaxed">مشروع سكني فاخر على مساحة 37 فدان بتصميم عصري وموقع استراتيجي</p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-3 gap-3 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 max-w-2xl mx-auto lg:mx-0">
              <div className="glass p-4 rounded-xl transition-all duration-300">
                <div className="text-2xl font-bold text-white">37</div>
                <div className="text-gray-400 text-xs">فدان</div>
              </div>
              
              <div className="glass p-4 rounded-xl transition-all duration-300">
                <div className="text-2xl font-bold text-white">2025</div>
                <div className="text-gray-400 text-xs">بداية التسليم</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 justify-center lg:justify-start">
              <a
                href="tel:+201024383203"
                className="glass-white text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-base"
              >
                اتصل الآن
              </a>
            </div>
          </div>

          {/* Left Column - Form */}
          <div className="order-2 w-full animate-in fade-in slide-in-from-top-4 duration-700 delay-200">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  )
}
