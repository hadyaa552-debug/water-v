import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend("re_ESgy3bur_6SYTZi5LRfH7CS7ZBubjEQR8")

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, email, interest } = body

    const { data, error } = await resend.emails.send({
      from: "Hady - Waterway East <onboarding@resend.dev>",
      to: ["saadh6640@gmail.com"],
      subject: "Hady - Waterway East",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #000;">طلب جديد من موقع Waterway East</h2>
          <div style="background-color: #f5f5f4; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <p><strong>الاسم:</strong> ${name}</p>
            <p><strong>رقم الهاتف:</strong> ${phone}</p>
            <p><strong>البريد الإلكتروني:</strong> ${email}</p>
            <p><strong>نوع الوحدة المهتم بها:</strong> ${interest}</p>
          </div>
          <p style="color: #78716c; font-size: 14px;">تم إرسال هذا الطلب من نموذج الموقع الإلكتروني</p>
        </div>
      `,
    })

    if (error) {
      console.error("[v0] Resend error:", error)
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("[v0] Form submission error:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
