import fs from 'fs'
import path from 'path'
export const CodeBlockHTMLConverter: any = {
  converter: async ({ fields }) => {
    const { getHighlighter } = await import('shiki')
    const theme = JSON.parse(
      fs.readFileSync(
        path.resolve(process.cwd(), './src/styles/themes/shiki/greyscale.json'),
        'utf8',
      ),
    )
    const highlighter = await getHighlighter({
      themes: [theme],
      langs: [fields.codeLanguage],
    })
    const html = highlighter.codeToHtml(fields.codeContent, {
      lang: fields.codeLanguage,
      theme: 'greyscale',
    })
    return html
  },
  nodeTypes: ['block'],
}
