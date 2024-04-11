// @ts-nocheck

import { HTMLConverter, SerializedBlockNode } from '@payloadcms/richtext-lexical'
import showdown from 'showdown'

export const MarkdownTableBlockHTMLConverter: HTMLConverter<SerializedBlockNode> = {
  converter: async ({ fields }) => {
    const tableUUID = `${fields.id}-${fields.blockName
      .replace(/ /g, '_')
      .replace(/'/g, '_')
      .toLowerCase()}`

    const markdownConverter = new showdown.Converter()
    markdownConverter.setOption('tables', true)
    const htmlTable = markdownConverter.makeHtml(fields.markdownTableMarkdown)

    return `<div tableName="${fields.blockName}" id="${tableUUID}">${htmlTable}</div>`
  },
  nodeTypes: ['block'],
}
