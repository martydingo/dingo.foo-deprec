import { getPayload } from 'payload'
import payloadConfig from '@payload-config'
import BlogListBasic from '@/components/ui/blog/BlogListBasic'

async function Tag({ params }: { params: { slug: string } }) {
  const payload = await getPayload({
    config: payloadConfig,
  })
  const tagToSearch = params.slug
  console.log(tagToSearch)
  const taggedBlogPosts = await payload.find({
    collection: 'blog',
    where: {
      'tags.tag': {
        contains: tagToSearch,
      },
    },
  })
  const taggedProjectPages = await payload.find({
    collection: 'projects',
    where: {
      'tags.tag': {
        contains: tagToSearch,
      },
    },
  })

  const taggedPages = [...taggedBlogPosts.docs, ...taggedProjectPages.docs]

  return (
    <main className="xl:container xl:max-w-5xl container max-w-2xl">
      <div className='prose dark:prose-invert capitalize text-xl'>

      <h2>
        Posts Tagged With {tagToSearch}
      </h2>
      </div>
      <div>
        <BlogListBasic pages={{"docs": taggedPages}} />
      </div>
    </main>
  )
}

export default Tag
