import path from 'path'
import { CollectionConfig } from 'payload/types'

const blogImage: CollectionConfig = {
  slug: 'blogImage',
  labels: {
    singular: 'Blog Image',
    plural: 'Blog Images',
  },
  access: {
    read: () => true,
  },
  admin: {
    group: 'Blog',
  },
  upload: {
    staticDir: path.resolve(process.cwd(), './public/images/blog'),
    imageSizes: [
      {
        name: 'banner_large',
        width: 1440,
        height: undefined,
      },
      {
        name: 'banner_medium',
        width: 1080,
        height: undefined,
      },
      {
        name: 'banner_small',
        width: 720,
        height: undefined,
      },
      {
        name: 'square_large',
        width: 1440,
        height: 1440,
        position: 'centre',
      },
      {
        name: 'square_medium',
        width: 1080,
        height: 1080,
        position: 'centre',
      },
      {
        name: 'square_small',
        width: 720,
        height: 720,
        position: 'centre',
      },
    ],
    // adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
}

export default blogImage
