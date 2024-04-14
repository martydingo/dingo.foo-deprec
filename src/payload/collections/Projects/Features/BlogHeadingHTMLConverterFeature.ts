import { HTMLConverterFeatureProps } from '@payloadcms/richtext-lexical'
import { TextNode } from 'lexical'
import { BlogHeadingHTMLConverter } from '../Converters/BlogHeadingHTMLConverter'

export const BlogHeadingHTMLConverterFeature = (props?: HTMLConverterFeatureProps | undefined) => {
  // console.log(`headingHTMLFeature - props: ${JSON.stringify(props)}`)
  return {
    feature: () => {
      return {
        nodes: [
          {
            converters: {
              html: BlogHeadingHTMLConverter, // <= This is where you define your HTML Converter
            },
            node: TextNode,
            type: TextNode.getType(),
          },
        ],
        props: props,
      }
    },
    key: 'heading',
  }
}
