'use client'

import React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shadcn-ui/carousel'
import { Card, CardContent } from '@/shadcn-ui/card'
import { Separator } from '@/shadcn-ui/separator'
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectCarousel({ projects }) {
  const autoplayPlugin = React.useRef(Autoplay({ delay: 5000, stopOnInteraction: true }))
  return (
    <Carousel plugins={[autoplayPlugin.current]} className="w-full max-w-lg mx-auto">
      <CarouselContent>
        {projects.map((project, index) => (
          <CarouselItem className="" key={index}>
            <Link href={`/blog/${project.slug}`}>
              <div className="p-1">
                <Card className='rounded'>
                  {project.previewImage && (
                    <div className="absolute w-full h-full z-10 -ml-2 rounded">
                      <Image
                        fill
                        className="object-cover brightness-90"
                        alt={project.previewImage.alt}
                        src={project.previewImage.sizes.square_small.url}
                      />
                    </div>
                  )}
                  <CardContent className="flex aspect-square items-center p-6 rounded">
                    <div
                      className={
                        'flex flex-col self-end justify-start bg-slate-800/50 backdrop-brightness-50 backdrop-blur-sm z-10 py-1 px-2 rounded-xl gap-y-2'
                      }
                    >
                      <span className="z-10 text-white lg:text-xl font-thin lg:font-light">
                        <sub>{new Date(project.date).toDateString()}</sub>
                      </span>
                      <span className="text-white z-10 text-2xl font-light lg:text-5xl lg:font-base font-titillium">
                        {project.title}
                      </span>
                      <Separator className="z-10 bg-white prose dark:prose-invert" />
                      <span
                        dangerouslySetInnerHTML={{ __html: project.summary_html }}
                        className="text-sm z-10 text-white"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
