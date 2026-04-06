"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { label: "الرئيسية", href: "#hero" },
    { label: "Triangle", href: "#triangle" },
    { label: "W55", href: "#w55" },
    { label: "تواصل معنا", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/waterway-logo.png" alt="Waterway" width={120} height={40} className="h-8 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <button key={item.href} onClick={() => scrollToSection(item.href)}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                {item.label}
              </button>
            ))}
          </nav>

          <a href="tel:+201024383203"
            className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            <Phone className="w-4 h-4" />
            اتصل الآن
          </a>

          <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-white/10 py-4">
            {menuItems.map((item) => (
              <button key={item.href} onClick={() => scrollToSection(item.href)}
                className="block w-full text-right text-white/80 hover:text-white px-4 py-3 text-sm border-b border-white/5">
                {item.label}
              </button>
            ))}
            <a href="tel:+201024383203" className="flex items-center gap-2 text-blue-400 px-4 py-3 text-sm font-medium">
              <Phone className="w-4 h-4" />
              اتصل الآن
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
