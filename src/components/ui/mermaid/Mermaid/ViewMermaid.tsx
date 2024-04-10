'use client'

import React from "react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/shadcn-ui/dialog"
import { Button } from "@/components/lib/shadcn-ui/button"
import { ZoomInIcon } from "@radix-ui/react-icons"

export default function ViewMermaid(){
    return (
        <Dialog>
            <DialogTrigger>
                <Button variant={"ghost"} size={"sm"}>
                    <ZoomInIcon className="h-6 w-6 mt-0.5 text-sm" /> 
                    <p>View Diagram</p>
                </Button>
            </DialogTrigger>
            </Dialog>
    )
}