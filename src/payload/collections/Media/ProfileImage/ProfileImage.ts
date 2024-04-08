import path from 'path'
import { CollectionConfig } from 'payload/types'

const profileImage: CollectionConfig = {
  slug: 'profileImage',
  labels: {
    singular: 'Profile Image',
    plural: 'Profile Images',
  },
  access: {
    read: () => true,
  },
  admin: {
    group: 'Users',
  },
  upload: {
    staticDir: path.resolve(process.cwd(), './public/images/avatar'),
    imageSizes: [
      {
        name: 'avatar',
        width: 40,
        height: 40,
        position: 'centre',
      },
      {
        name: 'thumbnail',
        width: 512,
        height: 512,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
}

export default profileImage
