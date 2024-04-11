// import { FeatureProvider } from "@payloadcms/richtext-lexical"
import { TextNode } from 'lexical'
import { HeadingHTMLConverter } from '../Converters/HeadingHTMLConverter'
import { FeatureProviderServer, HTMLConverterFeatureProps } from '@payloadcms/richtext-lexical'

export const HeadingHTMLConverterFeature = (props?: HTMLConverterFeatureProps | undefined) => {
  // console.log(`headingHTMLFeature - props: ${JSON.stringify(props)}`)
  return {
    feature: () => {
      return {
        nodes: [
          {
            converters: {
              html: HeadingHTMLConverter, // <= This is where you define your HTML Converter
            },
            node: TextNode,
            type: TextNode.getType(),
          },
        ],
        props: props,
      }
    },
    key: 'Heading',
  }
}
