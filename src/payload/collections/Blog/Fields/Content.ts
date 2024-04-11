import { RichTextField } from 'payload/types'
import {
  BlocksFeature,
  lexicalEditor,
  HTMLConverterFeature,
  FeatureProviderServer,
} from '@payloadcms/richtext-lexical'

import CodeBlock from '../Blocks/CodeBlock'
import { BlockHTMLMuxFeature } from '../Features/BlockHTMLMuxFeature'
import BlogMermaidDiagramBlock from '../Blocks/BlogMermaidDiagramBlock'
import { HeadingHTMLConverterFeature } from '../Features/HeadingHTMLConverterFeature'
import MarkdownTableBlock from '../Blocks/MarkdownTableBlock'

export const Content: RichTextField = {
  name: 'content',
  label: 'Content',
  type: 'richText',
  editor: lexicalEditor({
    //@ts-ignore
    features: ({ defaultFeatures }) => {
      return [
        ...defaultFeatures,
        HeadingHTMLConverterFeature({}),
        HTMLConverterFeature({}),
        BlockHTMLMuxFeature({}),
        BlocksFeature({
          blocks: [CodeBlock, BlogMermaidDiagramBlock, MarkdownTableBlock],
        }),
      ]
    },
  }),
}
