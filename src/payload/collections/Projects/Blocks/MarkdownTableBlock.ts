import { Block } from 'payload/types'
import { MarkdownTableMarkdown } from '../Fields/MarkdownTable/MarkdownTableMarkdown'

const MarkdownTableBlock: Block = {
  slug: 'markdownTableBlock',
  interfaceName: 'Markdown Table Block',
  fields: [MarkdownTableMarkdown],
}

export default MarkdownTableBlock
