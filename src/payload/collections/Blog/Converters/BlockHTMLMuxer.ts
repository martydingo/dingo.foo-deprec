import type { HTMLConverter } from '@payloadcms/richtext-lexical'
import type { SerializedTextNode } from 'lexical'
import { CodeBlockHTMLConverter } from './BlockHTMLCoverters/CodeBlockHTMLConverter'
import { BlogMermaidDiagramBlockHTMLConverter } from './BlockHTMLCoverters/BlogMermaidDiagramBlockHTMLConverter'
import { MarkdownTableBlockHTMLConverter } from './BlockHTMLCoverters/MarkdownTableBlockHTMLConverter'

export const BlockHTMLMuxer: any = {
  converter: async ({ node }) => {
    switch (node.fields.blockType) {
      case 'codeBlock':
        return CodeBlockHTMLConverter.converter(node)
      case 'markdownTableBlock':
        return MarkdownTableBlockHTMLConverter.converter(node)
      case 'blogMermaidDiagramBlock':
        return BlogMermaidDiagramBlockHTMLConverter.converter(node)
    }
  },
  nodeTypes: ['block'],
}
