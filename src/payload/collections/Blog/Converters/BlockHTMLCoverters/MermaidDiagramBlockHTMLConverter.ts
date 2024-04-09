export const MermaidDiagramBlockHTMLConverter = {
  converter: async ({ fields }) => {
    const mermaidUUID = `${fields.id}-${fields.blockName
      .replace(/ /g, '_')
      .replace(/'/g, '_')
      .toLowerCase()}`
    const encodedMermaidCode = btoa(fields.mermaidDiagramCode)
    const mermaidFetchFQDN = `https://mermaid.ink/svg/${encodedMermaidCode}`
    const mermaidDiagram = await fetch(mermaidFetchFQDN).then((response) => {
      return response.text()
    })
    console.log(mermaidDiagram)
    return `<div class="mermaid-container" id="mermaid-container-${mermaidUUID}">
                    <pre id="mermaid-${mermaidUUID}" class="mermaid" mermaidCode="${fields.mermaidDiagramCode}">
                    ${mermaidDiagram}
                    </pre>
                </div>`
  },
  nodeTypes: ['block'],
}
