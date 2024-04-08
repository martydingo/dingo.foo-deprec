import type { HTMLConverter } from '@payloadcms/richtext-lexical'
import type { SerializedTextNode } from 'lexical'
import { CodeBlockHTMLConverter } from './BlockHTMLCoverters/CodeBlockHTMLConverter'
import { MermaidDiagramBlockHTMLConverter } from './BlockHTMLCoverters/MermaidDiagramBlockHTMLConverter'

function slugify(text: string) {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(/[^\w-]+/g, "") // Remove all non-word chars
        .replace(/--+/g, "-") // Replace multiple - with single -
        .replace(/^-+/, "") // Trim - from start of text
        .replace(/-+$/, "") // Trim - from end of text
}

export const HeadingHTMLConverter: any = {
    converter: async ({ node }) => {
        switch (node.tag) {
            case "h1":
                return `<h1 id="${slugify(node.children[0].text)}" className = "text-center xl:text-left">${node.children[0].text}</h1>`
            case "h2":
                return `<h2 id="${slugify(node.children[0].text)}">${node.children[0].text}</h2>`
            case "h3":
                return `<h3 id="${slugify(node.children[0].text)}">${node.children[0].text}</h3>`
            case "h4":
                return `<h4 id="${slugify(node.children[0].text)}">${node.children[0].text}</h4>`
            case "h5":
                return `<h5 id="${slugify(node.children[0].text)}">${node.children[0].text}</h5>`
            case "h6":
                return `<h6 id="${slugify(node.children[0].text)}">${node.children[0].text}</h6>`
        }
    },
    nodeTypes: ['Heading'],
}