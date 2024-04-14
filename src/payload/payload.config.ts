import path from 'path'
// import { postgresAdapter } from '@payloadcms/db-postgres'
import {
  AlignFeature,
  BlockQuoteFeature,
  BlocksFeature,
  BoldFeature,
  CheckListFeature,
  HeadingFeature,
  IndentFeature,
  InlineCodeFeature,
  ItalicFeature,
  lexicalEditor,
  LinkFeature,
  OrderedListFeature,
  ParagraphFeature,
  RelationshipFeature,
  UnorderedListFeature,
  UploadFeature,
} from '@payloadcms/richtext-lexical'

import siteImage from './collections/Media/SiteImage/SiteImage'
import profileImage from './collections/Media/ProfileImage/ProfileImage'
import Users from './collections/Users/Users'
import Blog from './collections/Blog/Blog'
import blogImage from './collections/Media/BlogImage/BlogImage'
import Projects from './collections/Projects/Projects'
import projectImage from './collections/Media/ProjectImage/ProjectImage'

import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { buildConfig } from 'payload/config'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

function discernDb() {
  if (process.env.ENV !== 'development') {
    return mongooseAdapter({
      url: process.env.MONGODB_URI || '',
    })
  }
  else {
    return postgresAdapter({
      pool: {
        connectionString: process.env.POSTGRES_URI || '',
      },
    })
  }
}

export default buildConfig({
  //editor: slateEditor({}),
  editor: lexicalEditor(),
  collections: [blogImage, projectImage, profileImage, siteImage, Users, Blog, Projects],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  // db: postgresAdapter({
  //   pool: {
  //     connectionString: process.env.POSTGRES_URI || ''
  //   }
  // }),
  db: discernDb(),
  admin: {
    //
  },
  async onInit(payload) {
    //
  },
  // Sharp is now an optional dependency -
  // if you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.

  // This is temporary - we may make an adapter pattern
  // for this before reaching 3.0 stable
  sharp,
})
