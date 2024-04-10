import { HTMLConverterFeatureProps } from '@payloadcms/richtext-lexical'
import { BlockHTMLMuxer } from '../Converters/BlockHTMLMuxer'
import { TextNode } from 'lexical'

export const BlockHTMLMuxFeature = (props?: HTMLConverterFeatureProps) => {
  return {
    feature: () => {
      return {
        nodes: [
          {
            converters: {
              html: BlockHTMLMuxer, // <= This is where you define your HTML Converter
            },
            node: TextNode,
            type: TextNode.getType(),
          },
        ],
        props: props,
      }
    },
    key: 'Block',
  }
}
