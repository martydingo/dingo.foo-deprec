// 'use client';


// import mermaid from "mermaid"
// import MermaidModal from "./MermaidModal";
// import { render } from 'react-dom';
// import react from "react";

// export default function Mermaid() {

//     react.useEffect(() => {
//         const mermaidContainers = document.getElementsByClassName("mermaid-container")

//         Array.from(mermaidContainers).forEach((mermaidContainer) => {
//             console.log(mermaidContainer)
//             const html = render(<MermaidModal />, mermaidContainer)
//             console.log(html)
//             const innerContainer = document.createElement("div")
//             innerContainer.innerHTML = html
//             mermaidContainer.appendChild(innerContainer)
//         })
//     })

//     const mermaidDiagrams = document.getElementsByClassName("mermaid")
//     Object.values(mermaidDiagrams).forEach((mermaidDiagram) => async () => {
//         await mermaid.render(mermaidDiagram.id, mermaidDiagram.innerHTML)
//     })



//     return (
//         <div>

//         </div>
//     )
// }