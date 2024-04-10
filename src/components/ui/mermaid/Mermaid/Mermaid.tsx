'use client'

import React from "react"
import { createRoot } from 'react-dom/client';

import { loadSVG } from "@/components/lib/svgUtils"

import "@/styles/css/mermaid.css"
import ViewMermaid from "./ViewMermaid";

export default function Mermaid() {
    React.useEffect(() => {
        async function loadMermaidSVG() {
            const mermaidContainers = document.getElementsByClassName('mermaid-container')

            Object.values(mermaidContainers).forEach(async (mermaidContainer) => {
                const mermaidUUID = mermaidContainers[0].id.replace('mermaid-container-', '')
                const mermaidSVG = await loadSVG(`public/images/blog/mermaid/mermaid-${mermaidUUID}.svg`)
                mermaidContainer.innerHTML = mermaidSVG
                const dialogContainer = document.createElement('div')
                const root = createRoot(dialogContainer)
                root.render(<ViewMermaid mermaidSvg={mermaidSVG} />)
                mermaidContainer.appendChild(dialogContainer)
            })
        }
        loadMermaidSVG()
    })

    return (
        <div />
    )
}