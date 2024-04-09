'use client';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/shadcn-ui/dialog"
import mermaid from "mermaid";
import React from "react";

export default function MermaidModal({ mermaidCode, mermaidId }: { mermaidCode: string, mermaidId: string }) {

    let [svg, setSvg] = React.useState()

    const mermaidElement = document.getElementById(mermaidId)
    console.log(mermaidElement)
    const mermaidModalId = `mermaid-modal-${mermaidId.split("-")[1]}`
    React.useEffect(() => {
        async () => {
            setSvg(await mermaid.render(mermaidId, mermaidCode))

            // const mermaidDiagrams = document.getElementsByClassName("mermaid")
            // await mermaid.run({
            //     nodes: document.querySelectorAll('.mermaid'),
            // });
        }
    })
    return (
        <div>
            <Dialog>
                <DialogTrigger>View Diagram</DialogTrigger>
                <DialogContent className="max-w-[95%] max-h-[95%]">
                    {/* <DialogHeader>
                        <DialogTitle>Diagram</DialogTitle>
                        <DialogDescription>
                            Test
                        </DialogDescription>
                    </DialogHeader> */}
                    <div id={mermaidModalId}>
                        <pre id={`mermaid-${mermaidId.split("-")[1]}-2`} className="mermaid">
                            {svg}
                        </pre>
                    </div>
                </DialogContent>
            </Dialog>
        </div >
    )
}