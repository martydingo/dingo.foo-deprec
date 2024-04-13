import { Label } from '@/shadcn-ui/label'
import { ChevronRightIcon, GitHubLogoIcon } from '@radix-ui/react-icons'

import { Project, User } from '@payload-types'
import TagBadge from '../TagBadge'
import AuthorAvatar from '../AuthorAvatar'
import Link from 'next/link'
import { Separator } from '@/shadcn-ui/separator'

export default function ProjectHeader({ page }: { page: Project }) {
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
            <p className="text-sm font-light prose dark:prose-invert">Authored by {author.name}</p>
            <p className="text-sm font-thin prose dark:prose-invert">{new Date(page.date).toDateString()}</p>
          </div>
        </div>
        <div className='justify-center xl:justify-start'>
          <TagBadge collection="Projects" page={page} />
        </div>
        {
          page.repository &&
          <div className="flex xl:justify-start justify-center ml-8 xl:ml-0 mt-5 xl:mt-5">
            <div className='flex text-end items-center gap-1'>
              <Label>Code Repository</Label>
              <ChevronRightIcon />
            </div>
            <div className="ml-1">
              <Link href={page.repository}>
                <div>
                  <GitHubLogoIcon className='h-8 w-8' />
                </div>
              </Link>
            </div>
          </div>
        }
        <Separator />
      </div>
    </div>
  )
}
