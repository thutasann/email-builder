import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * This function is used to generate a complete HTML document with optional customizations.
 * @param htmlCode - The inner HTML content to be included.
 * @param options - Optional parameters to customize the HTML document.
 * @returns The modified and complete HTML code.
 */
export function getModifiedHTMLCode(
  htmlCode: string,
  options?: {
    title?: string
    additionalMetaTags?: string[]
    additionalLinks?: string[]
    additionalScripts?: string[]
    inlineStyles?: string
  },
) {
  const {
    title = 'Document', // Default title
    additionalMetaTags = [], // Additional meta tags, e.g., SEO or OG tags
    additionalLinks = [], // Additional stylesheets or links
    additionalScripts = [], // Additional JS scripts
    inlineStyles = '', // Additional inline CSS styles
  } = options || {}

  // Construct optional meta tags, links, and scripts
  const metaTags = additionalMetaTags.map((meta) => `<meta ${meta}>`).join('\n')
  const linkTags = additionalLinks.map((link) => `<link ${link}>`).join('\n')
  const scriptTags = additionalScripts.map((script) => `<script ${script}></script>`).join('\n')

  const fullHTMLCode = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
      ${metaTags}
      ${linkTags}
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: 'Inter', sans-serif;
        }
        ${inlineStyles}
      </style>
  </head>
  <body>
      ${htmlCode}
      ${scriptTags}
  </body>
  </html>`
  return fullHTMLCode
}
