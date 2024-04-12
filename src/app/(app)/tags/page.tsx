import { getPayload } from 'payload'
import payloadConfig from '@payload-config'
import { badgeVariants } from '@/shadcn-ui/badge'
import Link from 'next/link'

async function Tags() {
  const payload = await getPayload({
    config: payloadConfig,
  })
  const blogPosts = await payload.find({
    collection: 'blog',
  })
  const projectPages = await payload.find({
    collection: 'projects',
  })

  const postCollection = [...projectPages.docs, ...blogPosts.docs]
  const tagArray: string[] = []

  postCollection.forEach((post) => {
    if (post.tags) {
      post.tags.forEach((tag) => {
        tagArray.push(tag.tag!)
      })
    }
  })

  const tagUniqueArray = Array.from(new Set(tagArray))
  return (
    <main className="xl:container xl:max-w-5xl container max-w-2xl prose dark:prose-invert">
      <div>
        <h2>All Tags</h2>
      </div>
      <div className='xl:container xl:max-w-3xl max-w-xl flex flex-wrap gap-5 justify-around'>
        {tagUniqueArray.map((tag, index) => {
          return (
            <div key={`${tag}-${index}`}>
              <Link href={`/tags/${tag.toLowerCase()}`} className={`not-prose ${badgeVariants({ variant: "default" })}`}>{tag}</Link>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default Tags
