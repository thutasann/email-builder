import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 *
 * @param htmlCode
 * @returns
 */
export function getModifiedHTMLCode(htmlCode: string) {
  const fullHTMLCode = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  </head>
  <body style="margin: 0; padding: 0; font-family: 'Inter', sans-serif;">
  ${htmlCode}
  </body>
  </html>`
  return fullHTMLCode
}
