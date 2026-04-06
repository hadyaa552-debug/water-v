"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "1BD",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setMessage("تم إرسال طلبك بنجاح! سنتواصل معك قريباً")
        setFormData({ name: "", phone: "", email: "", interest: "1BD" })
      } else {
        setMessage("حدث خطأ، يرجى المحاولة مرة أخرى")
      }
    } catch (error) {
      setMessage("حدث خطأ، يرجى المحاولة مرة أخرى")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div id="contact" className="bg-black/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-white mb-1">سجل اهتمامك الآن</h2>
        <p className="text-gray-400 text-sm">احجز وحدتك واحصل على أفضل العروض</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="الاسم الكامل"
          className="text-right glass-dark border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 transition-all duration-300 text-base"
        />

        <Input
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="رقم الهاتف"
          className="text-right glass-dark border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 transition-all duration-300 text-base"
        />

        <Input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="البريد الإلكتروني"
          className="text-right glass-dark border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 transition-all duration-300 text-base"
        />

        <select
          value={formData.interest}
          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
          className="w-full px-3 py-2 text-base border border-white/20 rounded-lg text-right glass-dark text-white focus:outline-none focus:border-white/40 transition-all duration-300"
        >
          <option value="1BD">غرفة واحدة - من 82 م²</option>
          <option value="2BD">غرفتين - من 165 م²</option>
          <option value="3BD">3 غرف - من 215 م²</option>
          <option value="4BD">4 غرف - Flexi Finished</option>
        </select>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full glass-white text-black py-5 text-base font-semibold transition-all duration-300"
        >
          {isSubmitting ? "جاري الإرسال..." : "أرسل طلبك"}
        </Button>

        {message && (
          <p className={`text-center text-xs ${message.includes("نجاح") ? "text-green-400" : "text-red-400"}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  )
}
