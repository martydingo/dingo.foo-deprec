import { CollectionConfig } from 'payload/types'
import { Title } from './Fields/Title'
import { Author } from './Fields/Author'
import { PreviewImage } from './Fields/PreviewImage'
import { Summary } from './Fields/Summary'
import { lexicalHTML } from './Fields/LexicalHTML'
import { Content } from './Fields/Content'
import { Slug } from './Fields/Slug'
import { Date } from './Fields/Date'
import exp from 'constants'
import { Tags } from './Fields/Tags'
import { Repository } from './Fields/Repository'
import { Draft } from './Fields/Draft'

const Projects: CollectionConfig = {
  slug: 'projects',
  labels: {
    singular: 'Project',
    plural: 'Projects',
  },
  access: {
    read: () => true,
  },
  admin: {
    group: 'Projects',
    livePreview: {
      url: ({ data, locale }) => {
        return `/projects/${data.slug}`
      },
    },
  },
  fields: [
    Title,
    Date,
    Author,
    Draft,
    PreviewImage,
    Tags,
    Repository,
    Summary,
    lexicalHTML('summary', { name: 'summary_html' }),
    Content,
    lexicalHTML('content', { name: 'content_html' }),
    Slug,
  ],
}

export default Projects
