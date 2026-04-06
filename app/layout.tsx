import type React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const cairo = Cairo({ subsets: ["arabic", "latin"] })

export const metadata: Metadata = {
  title: "Waterway East - ووتر واي إيست | مشروع سكني فاخر في التجمع السادس",
  description: "مشروع سكني فاخر على مساحة 63 فدان في قلب التجمع السادس - Luxury residential project in 6th Settlement",
  generator: "v0.app",
  icons: {
    icon: "/images/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
