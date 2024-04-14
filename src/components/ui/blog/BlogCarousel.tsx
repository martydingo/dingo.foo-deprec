'use client'
import { Blog, BlogImage, User } from "@payload-types"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/shadcn-ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import React from "react"

import Image from "next/image"
import { AspectRatio } from "@/shadcn-ui/aspect-ratio"
import { Card, CardContent } from "@/shadcn-ui/card"
import Link from "next/link"
import TagBadge from "../TagBadge"
import AuthorAvatar from "../AuthorAvatar"


export default function BlogCarousel({ blogPosts }: { blogPosts: { docs: Blog[] } }) {
    const autoplayPlugin = React.useRef(
        Autoplay({ delay: 10000, stopOnInteraction: true })
    )
    return (
        <div className="xl:max-w-5xl max-w-2xl mx-auto mt-10">
            <Carousel plugins={[autoplayPlugin.current]}>
                <CarouselContent>
                    {
                        blogPosts.docs.map((blogPost, index) => {
                            const previewImage = blogPost.previewImage as BlogImage
                            const author: User = blogPost.author as User

                            return (
                                <CarouselItem key={`blog-carousel-${index}`}>
                                    <div className="flex flex-col xl:flex-row">
                                        <div className="basis-1/2">
                                            <AspectRatio ratio={4 / 3}>
                                                <Link href={`/blog/${blogPost.slug}`}>
                                                    <Image fill className="object-cover rounded-xl shadow-xl" alt={previewImage.alt as string} src={previewImage.sizes?.square_small?.url as string} />
                                                </Link>
                                            </AspectRatio>
                                        </div>
                                        <div className="basis-1/2 p-5 flex flex-col justify-center">
                                            <Link href={`/blog/${blogPost.slug}`}>
                                                <h1 className="prose dark:prose-invert text-3xl text-center xl:text-start">
                                                    {blogPost.title}
                                                </h1>
                                            </Link>
                                            <div className="flex gap-x-3 justify-center xl:justify-start mt-5">
                                                <div className="items-center">
                                                    <AuthorAvatar author={author} />
                                                </div>
                                                <div className="flex flex-col not-prose">
                                                    <p className="text-sm font-light prose dark:prose-invert">
                                                        Authored by {author.name}
                                                    </p>
                                                    <p className="text-sm font-thin prose dark:prose-invert">
                                                        {new Date(blogPost.date).toDateString()}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="mt-5">
                                                <TagBadge collection="Blog" page={blogPost} />
                                            </div>
                                            <div className="prose dark:prose-invert">
                                                <div dangerouslySetInnerHTML={{ "__html": blogPost.summary_html as TrustedHTML }} />
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            )
                        })
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </div>
    )
}