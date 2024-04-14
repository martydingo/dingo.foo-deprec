//@ts-nocheck
import { HTMLConverterFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { RichTextField } from 'payload/types'

export const About: RichTextField = {
  name: 'about',
  label: 'About',
  type: 'richText',
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [HTMLConverterFeature({}), ...defaultFeatures],
  }),
}
