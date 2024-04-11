//@ts-nocheck

import fs from 'fs'
import { codeToHtml } from 'shiki'

export const CodeBlockHTMLConverter: any = {
  converter: async ({ fields }) => {
    // const theme = JSON.parse(fs.readFileSync('@/styles/themes/shiki/greyscale.json', 'utf8'))
    // const highlighter = await getHighlighter({
    //   themes: [theme],
    //   langs: [],
    // })
    const html = codeToHtml(fields.codeContent, {
      lang: fields.codeLanguage,
      theme: 'solarized-dark',
    })
    return html
  },
  nodeTypes: ['block'],
}
