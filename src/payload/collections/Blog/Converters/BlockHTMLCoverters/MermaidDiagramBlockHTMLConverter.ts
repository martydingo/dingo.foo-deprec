import path from 'path'
import fs from 'fs'

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

    const imagesDir = path.resolve(process.cwd(), './public/images/blog/mermaid')
    fs.writeFileSync(
      `${imagesDir}/mermaid-${mermaidUUID}.svg`,
      mermaidDiagram
        .replaceAll('mermaid-svg', `mermaid-svg-${mermaidUUID}`)
    )

    return `<div class="mermaid-container" id="mermaid-container-${mermaidUUID}">
                </div>`
  },
  nodeTypes: ['block'],
}
