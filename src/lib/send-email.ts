interface SendEmailProps {
  to: string
  subject: string
  htmlContent: string
}

export async function sendEmail({ to, subject, htmlContent }: SendEmailProps) {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to,
        subject,
        htmlContent,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to send email')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error sending email:', error)
    throw error
  }
}
