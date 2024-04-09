'use client';


import MermaidModal from "./MermaidModal";
import { createRoot } from 'react-dom/client';
import react from "react";

export default function Mermaid() {

    react.useEffect(() => {

        if (window === undefined) return

        const mermaidContainers = document.getElementsByClassName("mermaid-container")
        Array.from(mermaidContainers).forEach((mermaidContainer) => {
            const mermaidId = `mermaid-${mermaidContainer.id.split("-")[2]}-${mermaidContainer.id.split("-")[3]}`
            const mermaidCode = document.getElementById(mermaidId)!.innerText
            // const mermaidSvgId = mermaidContainer.getElementsByTagName("svg")[0].id

            const newContainer = document.createElement('div')
            const root = createRoot(newContainer)
            root.render(<MermaidModal mermaidId={mermaidId} />)
            mermaidContainer.appendChild(newContainer)
        })

    })



    return (
        <div>

        </div>
    )
}