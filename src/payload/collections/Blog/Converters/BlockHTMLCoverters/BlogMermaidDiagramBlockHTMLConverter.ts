import path from 'path'
import fs from 'fs'
import { mermaidThemeDirectives } from '@/styles/themes/mermaid/halcyon2'
import { mermaidFlowchartDirectives } from '@/styles/themes/mermaid/generic'

export const BlogMermaidDiagramBlockHTMLConverter = {
  converter: async ({ fields }) => {
    const mermaidUUID = `${fields.id}-${fields.blockName
      .replace(/ /g, '_')
      .replace(/'/g, '_')
      .toLowerCase()}`
    const mermaidCode = fields.mermaidDiagramCode as string
    const mermaidLines = mermaidCode.split('\n')
    let encodedMermaidCode = ''
    if (mermaidLines[0].includes('%%{')) {
      const mermaidDirectivesEndLine = mermaidLines.findIndex((line) => line.includes('}%%'))
      const mermaidDirectives = JSON.parse(
        mermaidLines.slice(1, mermaidDirectivesEndLine).join('\n').replace('init: ', ''),
      )
      mermaidDirectives.themeVariables = Object.assign({}, mermaidThemeDirectives.themeVariables)
      mermaidDirectives.flowchart = Object.assign(
        mermaidFlowchartDirectives.flowchart,
        mermaidDirectives.flowchart,
      )
      const mermaidDirectiveString = `%%{init:${JSON.stringify(mermaidDirectives)}}%%`
      const mermaidCodeWithoutDirectives = mermaidLines
        .slice(mermaidDirectivesEndLine + 1)
        .join('\n')
      encodedMermaidCode = btoa(`${mermaidDirectiveString}\n${mermaidCodeWithoutDirectives}`)
    } else {
      encodedMermaidCode = btoa(fields.mermaidCode)
    }

    const mermaidFetchFQDN = `https://mermaid.ink/svg/${encodedMermaidCode}`
    const mermaidDiagram = await fetch(mermaidFetchFQDN).then((response) => {
      return response.text()
    })

    const imagesDir = path.resolve(process.cwd(), './public/images/blog/mermaid')
    fs.writeFileSync(
      `${imagesDir}/mermaid-${mermaidUUID}.svg`,
      mermaidDiagram.replaceAll('mermaid-svg', `mermaid-svg-${mermaidUUID}`),
    )

    return `<div class="mermaid-container" id="mermaid-container-${mermaidUUID}">
                </div>`
  },
  nodeTypes: ['block'],
}
