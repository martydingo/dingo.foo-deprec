'use client'
import { useLivePreview } from '@payloadcms/live-preview-react';
import { Blog as PageType, User } from '@payload-types'
import React from 'react';
import { loadSVG } from '@/components/lib/svgUtils';


export const BlogPostClient: React.FC<{
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
    React.useEffect(() => {
        async function loadMermaidSVG() {
            const mermaidContainers = document.getElementsByClassName('mermaid-container')

            const mermaidCss =
                `
                .nodeLabel {
                    color: var(--tw-prose-body) !important;
                    height: max-content !important;
                    max-height: max-content;
                }

                .subgraph-lvl-0 {
                    fill: #E6E4D9  !important;
                    stroke: #F2F0E5 !important;
                }
                .subgraph-lvl-1 {
                    fill: #E6E4D9 !important;
                    stroke: #DAD8CE !important;
                    
                }
                .subgraph-lvl-2 {
                    fill: #CECDC3 !important;
                    stroke: #B7B5AC !important;
                }
                    
                
                .label-container {
                    fill: #CECDC3 !important;
                    stroke: #B7B5AC !important;
                    
                }

                .dark{
                    .nodeLabel {
                        color: var(--tw-prose-invert-body) !important;
                        height: max-content !important;
                        max-height: max-content;
                    }

                    .subgraph-lvl-0 {
                        fill: #131a24  !important;
                        stroke: #192330 !important;
                    }
                    .subgraph-lvl-1 {
                        fill: #192330 !important;
                        stroke: #212e3f !important;
                        
                    }
                    .subgraph-lvl-2 {
                        fill: #212e3f !important;
                        stroke: #29394f !important;
                        
                    }
                    .subgraph-lvl-3 {
                        fill: #29394f !important;
                        stroke: #39506d !important;
                        
                    }
                    .label-container {
                        fill: #29394f !important;
                        stroke: var(--border) !important;
                        
                    }
                }
                `



            Object.values(mermaidContainers).forEach(async (mermaidContainer) => {
                const mermaidUUID = mermaidContainers[0].id.replace('mermaid-container-', '')
                const mermaidSVG = await loadSVG(`public/images/blog/mermaid/mermaid-${mermaidUUID}.svg`)
                mermaidContainer.innerHTML = mermaidSVG
                mermaidContainer.appendChild(document.createElement('style')).textContent = mermaidCss
            })
        }
        loadMermaidSVG()
    })

    return (
        <div className='mt-6'>
            <h1>{data.title}</h1>
            <div dangerouslySetInnerHTML={{ '__html': data.content_html as string }} />
        </div>

    )
}