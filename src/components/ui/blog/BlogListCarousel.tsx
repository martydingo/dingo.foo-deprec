'use client';

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/shadcn-ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/shadcn-ui/carousel"
import {
    Separator,
} from "@/shadcn-ui/separator"
import Image from "next/image";
import Link from "next/link";
import { Blog, BlogImage } from "@payload-types";


export function BlogListCarousel({ pages }: { pages: { docs: Blog[] } }) {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    )
    return (
        <Carousel plugins={[plugin.current]} className="w-full max-w-lg mx-auto">
            <CarouselContent>
                {pages.docs.map((page, index) => {
                    const previewImage = page.previewImage as BlogImage
                    return (
                        <CarouselItem className="" key={index}>
                            <Link href={`/blog/${page.slug}`}>
                                <div className="p-1">
                                    <Card>
                                        {previewImage && <div className="absolute w-full h-full z-10 -ml-2 rounded">
                                            <Image fill className="object-cover brightness-90" alt={previewImage.alt as string} src={previewImage.sizes?.square_small?.url as string} />
                                        </div>}
                                        <CardContent className="flex aspect-square items-center p-6 rounded">
                                            <div className={"flex flex-col self-end justify-start backdrop-brightness-75 backdrop-blur-sm z-10 py-1 px-2 rounded-lg gap-y-2"} >
                                                <span className="z-10 text-white lg:text-xl font-thin lg:font-light">
                                                    <sub>{new Date(page.date).toDateString()}</sub>
                                                </span>
                                                <span className="text-white z-10 text-2xl font-light lg:text-5xl self-end justify-end lg:font-base font-titillium">{page.title}</span>
                                                <Separator className="z-10 bg-white prose dark:prose-invert" />
                                                <span dangerouslySetInnerHTML={{ "__html": page.summary_html as TrustedHTML }} className="text-sm z-10 text-white" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </Link>
                        </CarouselItem>
                    )
                })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
