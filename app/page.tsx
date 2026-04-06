import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ProjectDetails from "@/components/project-details"
import PaymentSection from "@/components/payment-section"
import TriangleSection from "@/components/triangle-section"
import W55Section from "@/components/w55-section"
import WhatsAppWidget from "@/components/whatsapp-widget"
import MobileBottomBar from "@/components/mobile-bottom-bar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProjectDetails />
      <PaymentSection />
      <TriangleSection />
      <W55Section />
      <Footer />
      <WhatsAppWidget />
      <MobileBottomBar />
    </main>
  )
}
