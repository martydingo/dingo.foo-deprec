import { Block, FieldWithRichTextRequiredEditor } from 'payload/types'
import { MarkdownTableMarkdown } from '../Fields/MarkdownTable/MarkdownTableMarkdown'

const MarkdownTableBlock: Omit<Block, 'fields'> & {
  fields: FieldWithRichTextRequiredEditor[]
} = {
  slug: 'markdownTableBlock',
  interfaceName: 'Markdown Table Block',
  fields: [MarkdownTableMarkdown],
}

export default MarkdownTableBlock
