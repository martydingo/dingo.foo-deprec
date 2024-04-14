'use client'
import type { Blog, Project } from "@payload-types";
import type { PaginatedDocs } from "payload/database";
import { useSearchParams } from 'next/navigation'

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/shadcn-ui/pagination"
import React from "react";



export default function ArticlePagination({ articles }: { articles: PaginatedDocs<Blog> | PaginatedDocs<Project> }) {
    const searchParams = useSearchParams()
    const curPage = parseInt(searchParams.get("page") || "1")
    const totalPages = articles.totalPages
    return (
        <div>
            <Pagination>
                <PaginationContent>
                    {curPage !== 1 &&
                        (<PaginationItem>
                            <PaginationPrevious href={`?page=${curPage - 1}`} />
                        </PaginationItem>)
                    }

                    {
                        Array.from({ length: totalPages }).map((empty, index) => {
                            let style = ""
                            if (index + 1 === curPage) {
                                style = "text-secondary-foreground"
                            }
                            return (
                                <PaginationItem key={`page-${index + 1}`} >
                                    <PaginationLink className={`${style}`} href={`?page=${index + 1}`}>{index + 1}</PaginationLink>
                                </PaginationItem>
                            )
                        })
                    }
                    {curPage !== totalPages && (
                        <PaginationItem>
                            <PaginationNext href={`?page=${curPage + 1}`} />
                        </PaginationItem>
                    )
                    }
                </PaginationContent>
            </Pagination>
        </div>
    )
}