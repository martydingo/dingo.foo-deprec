'use client'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/shadcn-ui/breadcrumb"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/shadcn-ui/dropdown-menu"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import Link from "next/link"

import React from "react"

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

export default function BreadCrumb({ rootPage, curPage, allPosts }: { rootPage: { title: string, href: string }, curPage?: { title: string, href: string } | undefined, allPosts?: any }) {


    let headings: { "index": number, "title": string, "href": string }[]

    return (
        <div className="not-prose">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href={rootPage.href}>{rootPage.title}</BreadcrumbLink>
                    </BreadcrumbItem>
                    {curPage && <BreadcrumbSeparator />}
                    {
                        curPage &&
                        <BreadcrumbItem>
                            <DropdownMenu>
                                <DropdownMenuTrigger className="flex items-center gap-1">
                                    {curPage.title}
                                    <ChevronDownIcon />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    {
                                        allPosts
                                            // .filter((post) => post.title !== curPage.title)
                                            .map((post, index) => (
                                                <DropdownMenuItem key={`breadcrumb-posts-${index}`}>
                                                    <Link href={`${rootPage.href}/${post.slug}`}>{post.title}</Link>
                                                </DropdownMenuItem>
                                            ))
                                    }
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </BreadcrumbItem>
                    }
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    )
}