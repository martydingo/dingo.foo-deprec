'use client'
import { Blog } from '@payload-types'
import { Badge } from '@/shadcn-ui/badge'
import { Label } from '@/shadcn-ui/label'
import { ChevronRightIcon } from '@radix-ui/react-icons'

export default function TagBadge({
  collection,
  page,
}: {
  collection: 'Blog' | 'Projects'
  page: Blog
}) {
  let tagArray: string[] = []
  if (page.tags) {
    if (page.tags.length > 0) {
      page.tags.forEach(({ tag }) => {
        if (tag) tagArray.push(tag)
      })
    }
  }

  return (
    <div className="flex xl:justify-start justify-center ml-8 xl:ml-0 mt-1 xl:mt-0">
      <div className='xl:pr-8 flex text-end items-center gap-1'>
        <Label>Tags</Label>
        <ChevronRightIcon />
      </div>
      <div className="flex flex-wrap justify-center xl:justify-evenly gap-2">
        {tagArray.map((tag, index) => (
          <Badge variant={'secondary'} key={`tag-${tag}-${index}`}>{tag}</Badge>
        ))}
      </div>
    </div>
  )
}
