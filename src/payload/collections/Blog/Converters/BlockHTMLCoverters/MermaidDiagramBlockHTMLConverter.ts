
export const MermaidDiagramBlockHTMLConverter = {
    converter: async ({ fields }) => {
        const mermaidUUID = `${fields.id}-${fields.blockName.replace(/ /g, "_").replace(/'/g, "_").toLowerCase()}`
        return `<div class="mermaid-container" id="mermaid-container-${mermaidUUID}">
                    <pre id="mermaid-${mermaidUUID}" class="mermaid">
                        ${fields.mermaidDiagramCode}
                    </pre>
                </div>`
    },
    nodeTypes: ['block'],
}