import { Block, FieldWithRichTextRequiredEditor } from 'payload/types'

import { MermaidDiagramCode } from '../Fields/MermaidDiagram/MermaidDiagramCode'

const BlogMermaidDiagramBlock: Omit<Block, 'fields'> & {
  fields: FieldWithRichTextRequiredEditor[]
} = {
  slug: 'blogMermaidDiagramBlock',
  interfaceName: 'Mermaid Diagram Block',
  fields: [MermaidDiagramCode],
}

export default BlogMermaidDiagramBlock
