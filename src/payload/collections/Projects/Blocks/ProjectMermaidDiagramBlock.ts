import { Block } from 'payload/types'

import { MermaidDiagramCode } from '../Fields/MermaidDiagram/MermaidDiagramCode'

const ProjectMermaidDiagramBlock: Block = {
  slug: 'projectMermaidDiagramBlock',
  interfaceName: 'Mermaid Diagram Block',
  fields: [MermaidDiagramCode],
}

export default ProjectMermaidDiagramBlock
