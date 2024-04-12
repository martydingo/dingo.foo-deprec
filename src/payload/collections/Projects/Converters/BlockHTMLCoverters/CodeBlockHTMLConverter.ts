//@ts-nocheck

import fs from 'fs'
import path from 'path'
import { getHighlighter } from 'shiki'

export const CodeBlockHTMLConverter: any = {
  converter: async ({ fields }) => {
    const theme = JSON.parse(
      fs.readFileSync(path.resolve(process.cwd), './src/styles/themes/shiki/halcyon.json'),
      'utf8',
    )
    const highlighter = await getHighlighter({
      themes: [theme],
      langs: [fields.codeLanguage],
    })
    const html = highlighter.codeToHtml(fields.codeContent, {
      lang: fields.codeLanguage,
      theme: 'halcyon',
    })
    return html
  },
  nodeTypes: ['block'],
}
