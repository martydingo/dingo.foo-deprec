//@ts-nocheck
import { CodeBlockHTMLConverter } from './BlockHTMLCoverters/CodeBlockHTMLConverter'
import { ProjectMermaidDiagramBlockHTMLConverter } from './BlockHTMLCoverters/ProjectMermaidDiagramBlockHTMLConverter'
import { MarkdownTableBlockHTMLConverter } from './BlockHTMLCoverters/MarkdownTableBlockHTMLConverter'

export const BlockHTMLMuxer: any = {
  converter: async ({ node }) => {
    switch (node.fields.blockType) {
      case 'codeBlock':
        return CodeBlockHTMLConverter.converter(node)
      case 'markdownTableBlock':
        return MarkdownTableBlockHTMLConverter.converter(node)
      case 'projectMermaidDiagramBlock':
        return ProjectMermaidDiagramBlockHTMLConverter.converter(node)
    }
  },
  nodeTypes: ['block'],
}
