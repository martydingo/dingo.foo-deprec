//@ts-nocheck
import path from 'path'
import fs from 'fs'
import { mermaidThemeDirectives } from '@/styles/themes/mermaid/nightfox'
import { mermaidFlowchartDirectives } from '@/styles/themes/mermaid/generic'

export const ProjectMermaidDiagramBlockHTMLConverter = {
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
      mermaidDirectives.theme = 'base'
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
    let mermaidDiagram = await fetch(mermaidFetchFQDN).then((response) => {
      return response.text()
    })

    const mermaidCss = `<style>${fs.readFileSync(
      path.resolve(process.cwd(), './src/styles/css/mermaid-svg-export.css'),
    )}</style>`

    mermaidDiagram = mermaidDiagram.replace(/<\/svg/, `${mermaidCss}</svg`)

    const imagesDir = path.resolve(process.cwd(), './public/images/projects/mermaid')
    fs.writeFileSync(
      `${imagesDir}/mermaid-${mermaidUUID}.svg`,
      `${mermaidDiagram.replaceAll('mermaid-svg', `mermaid-svg-${mermaidUUID}`)}`,
    )

    return `<div class="mermaid-container" svgurl="/images/projects/mermaid/mermaid-${mermaidUUID}.svg" id="mermaid-container-${mermaidUUID}">
                </div>`
  },
  nodeTypes: ['block'],
}
