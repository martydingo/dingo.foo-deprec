import { Separator } from '@/components/lib/shadcn-ui/separator'
import { User } from '@payload-types'
import Link from 'next/link'
import AuthorAvatar from '../AuthorAvatar'
import TagBadge from '../TagBadge'
import { Blog, BlogImage } from '@payload-types'

export default function BlogListBasic({ pages }: { pages: { docs: Blog[] } }) {
  return (
    <div className="prose dark:prose-invert mx-auto">
      {pages.docs
        .slice(0)
        .map((page, index) => {
          const author: User = page.author as User
          return (
            <div key="">
              <div className="">
                <Link className="no-underline m-0" href={`/blog/${page.slug}`}>
                  <p className="prose dark:prose-invert text-3xl text-center xl:text-start">
                    {page.title}
                  </p>
                </Link>
                <div className='-mt-4'>
                  <div className="flex gap-x-3 justify-center xl:justify-start">
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
                  <div className="justify-center xl:justify-start mt-5">
                    <TagBadge collection="Blog" page={page} />
                  </div>
                </div>
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
