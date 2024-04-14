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
    const { data, isLoading } = useLivePreview<PageType>({
        initialData: initialPage,
        serverURL: "http://172.28.4.29:3000/",
        depth: 2,
    })


    return (
        <div>
            <div dangerouslySetInnerHTML={{ '__html': data.content_html as string }} />
        </div>

    )
}