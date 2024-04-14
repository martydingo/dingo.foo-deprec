//@ts-nocheck
import { RichTextField } from 'payload/types'
import { BlocksFeature, lexicalEditor, HTMLConverterFeature } from '@payloadcms/richtext-lexical'

import CodeBlock from '../Blocks/CodeBlock'
import { BlockHTMLMuxFeature } from '../Features/BlockHTMLMuxFeature'
import ProjectMermaidDiagramBlock from '../Blocks/ProjectMermaidDiagramBlock'
import { BlogHeadingHTMLConverterFeature } from '../Features/BlogHeadingHTMLConverterFeature'
import MarkdownTableBlock from '../Blocks/MarkdownTableBlock'

export const Content: RichTextField = {
  name: 'content',
  label: 'Content',
  type: 'richText',
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      HTMLConverterFeature({}),
      BlogHeadingHTMLConverterFeature({}),
      BlockHTMLMuxFeature({}),
      BlocksFeature({
        blocks: [CodeBlock, ProjectMermaidDiagramBlock, MarkdownTableBlock],
      }),
      ...defaultFeatures,
    ],
  }),
}
