'use client'
import { useLivePreview } from '@payloadcms/live-preview-react';
import { Project } from '@payload-types'
import React from 'react';


export function ProjectClient({ page }: { page: Project }) {
    const { data } = useLivePreview<Project>({
        initialData: page,
        serverURL: process.env.SERVER_URI as string | "",
        depth: 2,
    })

    return (
        <div>
            <div dangerouslySetInnerHTML={{ '__html': data.content_html as string }} />
        </div>

    )
}