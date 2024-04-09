'use client'

import mermaid from 'mermaid'
import { useEffect } from 'react'

export default function MermaidClient({ mermaidCode }: {mermaidCode: string}) {

  const renderDiagram = async function () {
    const { svg } = await mermaid.render('mermaidSvg', mermaidCode)
    console.log(svg)
  }
  renderDiagram()

  return (
    <div id="mermaid-placeholder">
      <pre className="mermaid">{mermaidCode}</pre>
    </div>
  )
}
