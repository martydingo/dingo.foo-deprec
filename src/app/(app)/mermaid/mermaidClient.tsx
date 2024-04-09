'use client'

import mermaid from 'mermaid'
import { useEffect } from 'react'

export default function MermaidClient({ mermaidCode }) {
  useEffect(() => {
    async function renderMermaid() {
      mermaid.initialize({
        startOnLoad: false,
        flowchart: {
          defaultRenderer: "elk"
        }
      })
      const { svg, bindFunctions } = await mermaid.render('mermaid', mermaidCode)
      if (document === undefined) return
      const mermaidDiv = document.createElement('div')
      // while(mermaidDiv === null){
        //   console.log("sleeping")
        // }
        mermaidDiv!.innerHTML = svg
        const mermaidElement = document.getElementById('mermaid-placeholder')
        mermaidElement?.appendChild(mermaidDiv)
        bindFunctions!(mermaidDiv!)
        console.log(mermaidDiv)
        
    }
    renderMermaid()
  }, [])

  return <div id="mermaid-placeholder">{mermaidCode}</div>
}
