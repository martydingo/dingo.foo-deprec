//@ts-nocheck
'use client'
import { User as PageType, User } from "@payload-types"
import { useLivePreview } from "@payloadcms/live-preview-react"
import React from "react"

export function AboutClient({ page }: { page: User }) {
    const { data, isLoading } = useLivePreview<PageType>({
        initialData: page,
        serverURL: "http://172.28.4.29:3000/",
        depth: 2,
    })

    React.useEffect(() => {
        console.log(JSON.stringify(data, null, 2))
    })

    return (
        <div className="prose dark:prose-invert text-center xl:text-left mt-5">
            <h1>
                About
            </h1>
            <div dangerouslySetInnerHTML={{ '__html': data.about_html as string }} />
        </div>

    )
}