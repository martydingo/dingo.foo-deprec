'use client'
import { useLivePreview } from '@payloadcms/live-preview-react';
import { Blog as PageType, User } from '@payload-types'
import React from 'react';
import { loadSVG } from '@/components/lib/svgUtils';
import Mermaid from '../mermaid/Mermaid/Mermaid';


export const BlogPostBody: React.FC<{
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
        serverURL: "http://172.28.4.29:3000/",
        depth: 2,
    })


    return (
        <div className='mt-6'>
            <div dangerouslySetInnerHTML={{ '__html': data.content_html as string }} />
            <Mermaid />
        </div>

    )
}