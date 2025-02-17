'use client'

import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shadcn-ui/dialog'
import { Button } from '@/components/lib/shadcn-ui/button'
import { ZoomInIcon } from '@radix-ui/react-icons'
import '@/styles/css/mermaid.css'

export default function ViewMermaid({ mermaidSvg }: { mermaidSvg: string }) {
  return (
    <div className="text-center">
      <Dialog>
        <DialogTrigger>
          <div>
            <Button variant={'ghost'} size={'sm'}>
              <ZoomInIcon className="h-6 w-6 mt-0.5 text-sm" />
              <p>View Diagram</p>
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-none max-h-fit h-[95vh] w-[95vw] prose dark:prose-invert overflow-auto">
          <div dangerouslySetInnerHTML={{ __html: mermaidSvg }} />
        </DialogContent>
      </Dialog>
    </div>
  )
}
