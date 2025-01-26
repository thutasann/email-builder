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
    title = 'Email Template',
    additionalMetaTags = [],
    additionalLinks = [],
    additionalScripts = [],
    inlineStyles = '',
  } = options || {}

  // Convert grid layouts to table layouts
  const convertedHtmlCode = htmlCode
    // Convert single column grid to table
    .replace(
      /<div class="relative">\s*<div style="display:\s*grid;\s*grid-template-columns:\s*repeat\(1,\s*1fr\)[^"]*">/g,
      '<table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 20px;"><tr>',
    )
    // Convert three column grid to table
    .replace(
      /<div class="relative">\s*<div style="display:\s*grid;\s*grid-template-columns:\s*repeat\(3,\s*1fr\)[^"]*">/g,
      '<table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 20px; table-layout: fixed;"><tr>',
    )
    // Convert two column grid to table
    .replace(
      /<div class="relative">\s*<div style="display:\s*grid;\s*grid-template-columns:\s*repeat\(2,\s*1fr\)[^"]*">/g,
      '<table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 20px;"><tr>',
    )
    // Convert flex container with background color
    .replace(
      /<div\s*class="p-2[^"]*"[^>]*>\s*<div\s*style="display:\s*flex[^"]*background-color:\s*rgb\((\d+),\s*(\d+),\s*(\d+)\)[^"]*">/g,
      (_, r, g, b) => `<td align="center" style="padding: 8px; background-color: rgb(${r}, ${g}, ${b});">`,
    )
    // Convert regular flex container
    .replace(
      /<div\s*class="p-2[^"]*"[^>]*>\s*<div\s*style="display:\s*flex[^"]*">/g,
      '<td align="center" style="padding: 8px;">',
    )
    // Convert image container while preserving background color
    .replace(
      /<div\s*style="[^"]*background-color:\s*rgb\((\d+),\s*(\d+),\s*(\d+)\)[^"]*">\s*<img/g,
      (_, r, g, b) => `<div style="background-color: rgb(${r}, ${g}, ${b});"><img`,
    )
    // Convert text container
    .replace(
      /<div style="background-color:\s*rgb\(255,\s*255,\s*255\);\s*width:\s*100%">/g,
      '<td style="padding: 8px;">',
    )
    // Convert hr element
    .replace(/<div\s*class="p-2[^"]*"[^>]*>\s*<hr/g, '<td style="padding: 8px;"><hr')
    // Clean up closing tags for 3-column grid
    .replace(/(<\/div>\s*){3}(?=<div class="relative">)/g, '</td></tr></table>')
    // Clean up remaining closing tags
    .replace(/<\/div>\s*<\/div>\s*<\/div>/g, '</td></tr></table>')
    .replace(/<\/div>/g, '')
    // Preserve image styles
    .replace(/(<img[^>]+style=")([^"]+)(")/g, (match, start, styles, end) => {
      const preservedStyles = styles
        .split(';')
        // @ts-ignore
        .filter((style) => !style.includes('height:'))
        .join(';')
      return `${start}${preservedStyles}${end}`
    })

  const metaTags = additionalMetaTags.map((meta) => `<meta ${meta}>`).join('\n')
  const linkTags = additionalLinks.map((link) => `<link ${link}>`).join('\n')
  const scriptTags = additionalScripts.map((script) => `<script ${script}></script>`).join('\n')

  const fullHTMLCode = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>${title}</title>
    ${metaTags}
    ${linkTags}
    <style type="text/css">
      /* Reset styles */
      body { 
        margin: 0; 
        padding: 0; 
        min-width: 100%; 
        width: 100% !important; 
        height: 100% !important;
      }
      body, table, td, div, p, a { 
        -webkit-font-smoothing: antialiased; 
        text-size-adjust: 100%; 
        -ms-text-size-adjust: 100%; 
        -webkit-text-size-adjust: 100%; 
        line-height: 1.4; 
        font-family: Arial, sans-serif;
      }
      table, td { 
        mso-table-lspace: 0pt; 
        mso-table-rspace: 0pt; 
        border-collapse: collapse !important; 
        border-spacing: 0; 
      }
      img { 
        border: 0; 
        line-height: 100%; 
        outline: none; 
        text-decoration: none; 
        -ms-interpolation-mode: bicubic;
        max-width: 100%;
        display: block;
      }
      h4 {
        margin: 0;
        padding: 0;
        line-height: 1.4;
      }
      hr {
        border: 0;
        border-bottom: 1px solid #e5e5e5;
        margin: 20px 0;
      }
      /* Custom styles */
      ${inlineStyles}
    </style>
</head>
<body bgcolor="#ffffff">
    <!-- Wrapper table -->
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <td style="padding: 20px 0;">
                <!-- Container table -->
                <table border="0" cellpadding="0" cellspacing="0" width="600" style="margin: 0 auto;">
                    <tr>
                        <td>
                            ${convertedHtmlCode}
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    ${scriptTags}
</body>
</html>`

  return fullHTMLCode
}
