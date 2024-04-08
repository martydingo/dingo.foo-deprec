import fs from 'fs';

export const CodeBlockHTMLConverter: any = {
    converter: async ({ fields }) => {
        const { getHighlighter } = await import("shiki")
        const theme = JSON.parse(fs.readFileSync('@/styles/themes/shiki/greyscale.json', 'utf8'))
        const highlighter = await getHighlighter({
            themes: [theme],
            langs: []
        })
        const html = highlighter.codeToHtml(fields.data.codeContent, {
            lang: fields.data.codeLanguage,
            theme: 'greyscale'
        })
        return html

    },
    nodeTypes: ['block'],
}