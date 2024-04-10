import type { HTMLConverter } from '@payloadcms/richtext-lexical'
import type { SerializedTextNode } from 'lexical'
import { CodeBlockHTMLConverter } from './BlockHTMLCoverters/CodeBlockHTMLConverter'
import { ProjectMermaidDiagramBlockHTMLConverter } from './BlockHTMLCoverters/ProjectMermaidDiagramBlockHTMLConverter'

export const BlockHTMLMuxer: any = {
  converter: async ({ node }) => {
    switch (node.fields.blockType) {
      case 'codeBlock':
        return CodeBlockHTMLConverter.converter(node)
      case 'projectMermaidDiagramBlock':
        return ProjectMermaidDiagramBlockHTMLConverter.converter(node)
    }
  },
  nodeTypes: ['block'],
}
