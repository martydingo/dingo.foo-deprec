'use client'
import { useLivePreview } from '@payloadcms/live-preview-react';
import { type Blog } from '@payload-types'
import React from 'react';
import { loadSVG } from '@/components/lib/svgUtils';
import Mermaid from '../mermaid/Mermaid/Mermaid';
import TableWrapper from '../TableWrapper';


export function BlogPostBody({ page }: { page: Blog }) {
    const { data } = useLivePreview<Blog>({
        initialData: page,
        serverURL: process.env.SERVER_URI as string | "",
        depth: 2,
    })


    return (
        <div className='mt-6'>
            <div dangerouslySetInnerHTML={{ '__html': data.content_html as string }} />
            <Mermaid />
            <TableWrapper />
        </div>
    )
}