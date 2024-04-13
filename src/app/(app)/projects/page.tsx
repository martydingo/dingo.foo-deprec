import { getPayload } from 'payload'
import payloadConfig from '@payload-config'
import Link from 'next/link'
import ProjectCarousel from '@/components/ui/projects/ProjectCarousel'
import ProjectGrid from '@/components/ui/projects/ProjectGrid/ProjectGrid'
import ArticlePagination from '@/components/ui/ArticlePagination'

export default async function Project({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  let page = 1
  if (searchParams.page) {
    page = parseInt(searchParams.page)
  }

  const payload = await getPayload({
    config: payloadConfig,
  })
  const pages = await payload.find({
    collection: 'projects',
    page: page,
    limit: 9
  })

  return (
    <div className='container xl:container '>
      <div className='max-w-5xl mx-auto'>
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight mt-3">
          Projects
        </h2>
        <p className="text-sm text-muted-foreground">
          Hover over a project to see more details
        </p>
        <div className="pt-12 flex justify-center">
          <ProjectGrid projects={pages.docs} />
          {/* <ProjectCarousel projects={pages.docs} /> */}
        </div>
        {pages.totalPages > 1 &&
          <div className='py-8'>
            <ArticlePagination articles={pages} />
          </div>
        }
      </div>
    </div>
  )
}
