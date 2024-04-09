'use client'

import React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/shadcn-ui/select"


function slugify(text: string) {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(/[^\w-]+/g, "") // Remove all non-word chars
        .replace(/--+/g, "-") // Replace multiple - with single -
        .replace(/^-+/, "") // Trim - from start of text
        .replace(/-+$/, "") // Trim - from end of text
}

function logSelect(value){
    if(window === undefined) return
    window.location.href = `${window.location.href.split("#")[0]}#${slugify(value)}`
}

export default function HeadingSelect({ headings }: { headings: any }) {
    let [selectedHeading, selectHeading] = React.useState()
    
    
    React.useEffect(() => {
        // headings.forEach((heading) => {
        //     let documentHeading = document.getElementById(heading.href)
        //     // documentHeading.id = `${heading.href}-${heading.index}`
        //     // console.log(`heading.slug: ${heading.href}`)
        // })
    })
    return (
        <Select 
            onValueChange={(value) => {
            selectHeading(value)
            logSelect(value)
         }} value={selectedHeading}>
            <SelectTrigger className="w-[280px]" >
                <SelectValue placeholder="Headings" />
            </SelectTrigger>
            <SelectContent>
                {
                    headings.map((heading) => {
                        return (
                            <SelectItem id="heading-select-menu" key={`${heading.href}`} value={heading.title}>
                                {heading.title}
                            </SelectItem>
                        )
                    })
                }
            </SelectContent>
        </Select >
    )
}