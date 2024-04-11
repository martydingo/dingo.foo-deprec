import { ArrayField } from 'payload/types'

export const Tags: ArrayField = {
  name: 'tags',
  label: 'Tags',
  type: 'array',
  minRows: 1,
  maxRows: 5,
  fields: [
    {
      name: 'tag',
      type: 'text',
    },
  ],
}
