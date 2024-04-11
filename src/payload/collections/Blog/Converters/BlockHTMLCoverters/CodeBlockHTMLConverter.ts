// @ts-nocheck

import { HTMLConverter, SerializedBlockNode } from '@payloadcms/richtext-lexical'
import fs from 'fs'
import { ArrayField } from 'payload/types'
import { codeToHtml } from 'shiki'

export const CodeBlockHTMLConverter: HTMLConverter<SerializedBlockNode> = {
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
