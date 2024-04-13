import { getPayload } from 'payload'
import payloadConfig from '@payload-config'
import BreadCrumb from '@/components/ui/navigation/BreadCrumb/BreadCrumb'
import { ProjectClient } from '@/components/ui/projects/ProjectClient'
import ProjectHeader from '@/components/ui/projects/ProjectHeader'

function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

export default async function ProjectPost({ params }: { params: { slug: string } }) {
  const payload = await getPayload({
    config: payloadConfig,
  })
  const allProjectPosts = await payload.find({
    collection: 'projects',
  })
  const projectPost = await payload.find({
    collection: 'projects',
    where: {
      slug: {
        equals: params.slug,
      },
    },
  })
  //@ts-expect-error
  const headings = projectPost.docs[0].content.root.children
    .filter((childNode) => childNode.type === 'heading' && childNode.tag !== 'h1')
    .map((heading, index) => {
      return {
        index: index,
        //@ts-expect-error
        title: heading.children[0].text,
        //@ts-expect-error
        href: slugify(heading.children[0].text),
      }
    })
    .sort((headingA, headingB) => headingA.index - headingB.index)

  return (
    <div className="flex flex-col">
      <div className="items-center basis-1/3 mx-auto xl:container xl:max-w-5xl gap-4 flex flex-col xl:flex-row xl:justify-between">
        <BreadCrumb
          rootPage={{ title: 'Projects', href: '/projects' }}
          curPage={{
            title: `${projectPost.docs[0].title as string}`,
            href: `/project/${projectPost.docs[0].slug as string}`,
          }}
          allPosts={allProjectPosts.docs}
        />
      </div>
      <div className="basis-1/3 items-center mx-auto xl:container xl:max-w-5xl mt-6 prose dark:prose-invert">
        <ProjectHeader page={projectPost.docs[0]} />
        <ProjectClient page={projectPost.docs[0]} />
        <div className="basis-1/3"></div>
      </div>
    </div>
  )
}
