import { Block } from 'payload/types'

import { MermaidDiagramCode } from '../Fields/MermaidDiagram/MermaidDiagramCode'

const BlogMermaidDiagramBlock: Block = {
  slug: 'blogMermaidDiagramBlock',
  interfaceName: 'Mermaid Diagram Block',
  fields: [MermaidDiagramCode],
}

export default BlogMermaidDiagramBlock
