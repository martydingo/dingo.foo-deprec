'use client'
import { Project, ProjectImage } from '@payload-types'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/shadcn-ui/hover-card'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shadcn-ui/card'
import Link from 'next/link'
import { GitHubLogoIcon } from '@radix-ui/react-icons'

export default function ProjectCard({ project }: { project: Project }) {
  const previewImage: ProjectImage = project.previewImage as ProjectImage

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Link href={`/projects/${project.slug}`}>
          <div
            className="rounded-xl bg-contain bg-no-repeat prose dark:prose-invert h-64 w-64"
            style={{ backgroundImage: `url(${previewImage.sizes!.square_small!.url as string})` }}
          >
            <Card className="bg-transparent backdrop-brightness-[.3] backdrop-blur-[2px] hover:backdrop-brightness-50 hover:backdrop-blur-none duration-200 aspect-square h-full w-full">
              <CardHeader>
                <CardTitle className="text-center prose-invert text-2xl font-normal font-titillium items-center">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-center prose-invert font-light font-titillium">
                  {new Date(project.date).toDateString()}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className='w-72'>
        <div className="flex flex-col justify-between gap-4">
          <div className='flex gap-1 justify-between'>
            <div className='flex-col'>
              <h4 className='text-sm font-semibold'>
                {project.title}
              </h4>
              <sup>
                {new Date(project.date).toDateString()}
              </sup>
            </div>
            {
              project.repository &&
              <Link href={project.repository}>
                <div>
                  <GitHubLogoIcon className='h-8 w-8' />
                </div>
              </Link>
            }
          </div>
          <div className='prose dark:prose-invert prose-sm' dangerouslySetInnerHTML={{ "__html": project.summary_html as TrustedHTML }} />
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
