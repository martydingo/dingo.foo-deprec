//@ts-nocheck
import { FeatureProvider, UploadNode } from '@payloadcms/richtext-lexical'
import { BlockHTMLMuxer } from '../Converters/BlockHTMLMuxer'
import { CodeBlockHTMLConverter } from '../Converters/BlockHTMLCoverters/CodeBlockHTMLConverter'
import { TextNode } from 'lexical'

export const BlockHTMLMuxFeature = (props?): FeatureProvider => {
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
