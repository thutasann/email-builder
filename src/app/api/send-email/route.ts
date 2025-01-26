import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { to, subject, htmlContent } = await req.json()

    // Create transporter with updated configuration
    const transporter = nodemailer.createTransport({
      // @ts-ignore
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT || 587,
      secure: false, // Changed from true to false
      requireTLS: true, // Added this
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false,
      },
    })

    const info = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject,
      html: htmlContent,
    })

    return NextResponse.json(
      { success: true, message: 'Email sent successfully', messageId: info.messageId },
      { status: 200 },
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
