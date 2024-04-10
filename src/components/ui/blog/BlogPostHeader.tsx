import { Blog, User } from '@payload-types'
import TagBadge from '../TagBadge'
import AuthorAvatar from '../AuthorAvatar'

export default function BlogPostHeader({ page }: { page: Blog }) {
  const author: User = page.author as User
  return (
    <div>
      <h1 className='text-center xl:text-left'>{page.title}</h1>
      <div>
        <div className="flex gap-x-3 -mt-2 justify-center xl:justify-start">
          <div className="items-center">
            <AuthorAvatar author={author} />
          </div>
          <div className="flex flex-col not-prose mb-5">
            <p className="text-sm prose dark:prose-invert">Authored by {author.name}</p>
            <p className="text-sm prose dark:prose-invert">{new Date(page.date).toDateString()}</p>
          </div>
        </div>
        <div className='justify-center xl:justify-start'>
          <TagBadge collection="Blog" page={page} />
        </div>
      </div>
    </div>
  )
}
