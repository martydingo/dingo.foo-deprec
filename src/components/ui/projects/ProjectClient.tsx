'use client'
import { useLivePreview } from '@payloadcms/live-preview-react';
import { Project as PageType, User } from '@payload-types'
import React from 'react';


export const ProjectClient: React.FC<{
    page: {
        title: string
        id: string
        date: string
        author: string | User
        updatedAt: string
        createdAt: string
    }
}> = ({ page: initialPage }) => {
    const { data } = useLivePreview<PageType>({
        initialData: initialPage,
        serverURL: "http://10.2.3.130:3000/",
        depth: 1,
    })
    React.useEffect(() => {

        console.log(data)
    })
    return (
        <div>
            <div dangerouslySetInnerHTML={{ '__html': data.content_html as string }} />
        </div>

    )
}