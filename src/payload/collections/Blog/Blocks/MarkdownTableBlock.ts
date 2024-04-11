import { Block } from 'payload/types'
import { MarkdownTableMarkdown } from '../Fields/MarkdownTable/MarkdownTableMarkdown'
import { MarkdownTableTitle } from '../Fields/MarkdownTable/MarkdownTableTitle'

const MarkdownTableBlock: Block = {
  slug: 'markdownTableBlock',
  interfaceName: 'Markdown Table Block',
  fields: [MarkdownTableMarkdown],
}

export default MarkdownTableBlock
