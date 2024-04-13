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
    <div>
      <div className="flex flex-col mt-8">
        <div className="flex w-screen">
          <div className="basis-1/3" />
          <div className="basis-1/3"></div>
          <div className="basis-1/3" />
        </div>
        <div className="pt-16 flex w-screen">
          <div className="basis-1/3" />
          <div className="basis-10/12">
            {/* <h1 className="self-center text-center text-4xl pb-16 font-titllium">
                        All Posts
                    </h1> */}
            <ProjectGrid projects={pages.docs} />
            {/* <ProjectCarousel projects={pages.docs} /> */}
          </div>
          <div className="basis-1/3" />
        </div>
      </div>
      {pages.totalPages > 1 &&
        <div className='py-8'>
          <ArticlePagination articles={pages} />
        </div>
      }
    </div>
  )
}
