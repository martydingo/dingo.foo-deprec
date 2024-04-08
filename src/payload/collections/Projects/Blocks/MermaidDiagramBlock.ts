import { Block } from 'payload/types'

import { MermaidDiagramCode } from '../Fields/MermaidDiagram/MermaidDiagramCode'

const MermaidDiagramBlock: Block = {
    slug: "mermaidDiagramBlock",
    interfaceName: "Mermaid Diagram Block",
    fields: [
        MermaidDiagramCode
    ]
}

export default MermaidDiagramBlock