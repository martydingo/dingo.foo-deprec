import { Separator } from '@/components/lib/shadcn-ui/separator'
import { User } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'
import AuthorAvatar from '../AuthorAvatar'
import TagBadge from '../TagBadge'
import { Blog, BlogImage } from '@payload-types'

export default function BlogListBasic({ pages }: { pages: { docs: Blog[] } }) {
  return (
    <div className="prose dark:prose-invert mx-auto">
      {pages.docs.map((page, index) => {
        const previewImage: BlogImage = page.previewImage as BlogImage
        const author: User = page.author as User
        return (
          <div key="">
            <div className="">
              <Link className="no-underline m-0" href={`/blog/${page.slug}`}>
                <Image
                  className="self-center mx-auto"
                  alt={`${page.title} preview image`}
                  src={`${previewImage.sizes?.square_small?.url}`}
                  width={previewImage?.sizes?.square_small?.width! / 2}
                  height={previewImage?.sizes?.square_small?.height! / 2}
                />
                <p className="text-3xl font-titillium not-prose tracking-wider text-center xl:text-start">
                  {page.title}
                </p>
                <div>
                <div className="justify-center xl:justify-start mt-5">
                    <TagBadge collection="Blog" page={page} />
                  </div>
                  <div className="flex gap-x-3 justify-center xl:justify-start mt-5">
                    <div className="items-center">
                      <AuthorAvatar author={author} />
                    </div>
                    <div className="flex flex-col not-prose">
                      <p className="text-sm font-light prose dark:prose-invert">
                        Authored by {author.name}
                      </p>
                      <p className="text-sm font-thin prose dark:prose-invert">
                        {new Date(page.date).toDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <section className="">
                <div dangerouslySetInnerHTML={{ "__html": page.summary_html as TrustedHTML }} />
              </section>
            </div>
            {index < pages.docs.length - 1 && <Separator className="my-12" />}
            {index == pages.docs.length - 1 && <div className="my-24" />}
          </div>
        )
      })}
    </div>
  )
}
