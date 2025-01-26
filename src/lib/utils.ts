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

  const metaTags = additionalMetaTags.map((meta) => `<meta ${meta}>`).join('\n')
  const linkTags = additionalLinks.map((link) => `<link ${link}>`).join('\n')
  const scriptTags = additionalScripts.map((script) => `<script ${script}></script>`).join('\n')

  // Email-compatible HTML template using tables
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
        line-height: 100%; 
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
                            ${htmlCode}
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
