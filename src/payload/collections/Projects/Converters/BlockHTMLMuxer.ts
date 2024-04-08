import type { HTMLConverter } from '@payloadcms/richtext-lexical'
import type { SerializedTextNode } from 'lexical'
import { CodeBlockHTMLConverter } from './BlockHTMLCoverters/CodeBlockHTMLConverter'
import { MermaidDiagramBlockHTMLConverter } from './BlockHTMLCoverters/MermaidDiagramBlockHTMLConverter'

export const BlockHTMLMuxer: any = {
    converter: async ({ node }) => {
        switch (node.fields.blockType) {
            case "codeBlock":
                return CodeBlockHTMLConverter.converter(node)
            case "mermaidDiagramBlock":
                return MermaidDiagramBlockHTMLConverter.converter(node)
        }
    },
    nodeTypes: ['block'],
}