'use client'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/shadcn-ui/dialog"

import mermaid from "mermaid"
import React from "react"
import saveMermaidSVG from "@/components/lib/mermaid/saveMermaidSVG"
import Image from "next/image"
import { Button } from "@/components/lib/shadcn-ui/button"
import { ZoomInIcon } from "@radix-ui/react-icons"

export default function MermaidModal({ mermaidId }: { mermaidId: string }) {

    const svgFilePath = `/images/blog/mermaid/mermaid-${mermaidId.split("-")[1]}-${mermaidId.split("-")[2]}.svg`

    React.useLayoutEffect(() => {
        // console.log(`mermaidId: ${mermaidId}`)

        async function renderSVG() {
            const mermaidElement = document.getElementById(mermaidId)
            // const mermaidCode = mermaidElement!.innerText
            const mermaidCode = mermaidElement!.innerText
            await mermaid.initialize({
                startOnLoad: false,
                securityLevel: 'loose',
                theme: "base",
                themeVariables: {
                    darkMode: true,
                    fontFamily: "Kode Mono, Red Hat Mono, Inconsolata, Monaco, Consolas, 'Courier New', Courier,",
                    fontSize: "1.3em",
                    background: "#1d2433",
                    primaryColor: "#2f3b54",
                    secondaryColor: "#1d243344",
                    tertiaryColor: "#2f3b5444",
                    primaryTextColor: "#a2aabc",
                    secondaryTextColor: "#a2aabc",
                    tertiaryTextColor: "#a2aabc",
                    primaryBorderColor: "",
                    secondaryBorderColor: "",
                    tertiaryBorderColor: "",
                    // noteBkgColor: "",
                    // noteTextColor: "",
                    // noteBorderColor: "",
                    lineColor: "#bae67e44",
                    // textColor: "",
                    mainBkg: "#1d2433",
                    // errorBkgColor: "",
                    // errorTextColor: "",
                },
                flowchart: {
                    useMaxWidth: true,
                    defaultRenderer: "dagre",
                    curve: "catmullRom"
                }
            })
            const { svg, bindFunctions } = await mermaid.render("mermaid", mermaidCode)
            bindFunctions!(mermaidElement!)
            // console.log(svg)
            saveMermaidSVG(svg, mermaidId)
            const div = document.createElement('div')
            div.innerHTML = svg
            mermaidElement!.replaceWith(div)
        }
        renderSVG()
    }, [])
    return (
        <div className="text-center mt-3" >
            <Dialog>
                <DialogTrigger>
                    <Button variant={"ghost"} className="" size={"sm"}>
                        <ZoomInIcon className="h-6 w-6 mt-0.5 text-sm" />
                        <p>View Diagram</p>
                    </Button>

                </DialogTrigger>
                <DialogContent className="max-w-none max-h-none h-[90vh] w-screen">
                    <Image className="h-96 object-fill" src={svgFilePath} alt="Mermaid Diagram" fill />
                    {/* <img src={svgFilePath} alt="Mermaid Diagram" /> */}
                    {/* <DialogHeader>
                    <DialogTitle>Diagram</DialogTitle>
                    <DialogDescription>
                        Test
                    </DialogDescription>
                </DialogHeader> */}
                </DialogContent>
            </Dialog>
        </div >
    )
}