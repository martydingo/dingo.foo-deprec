import { CollectionConfig } from 'payload/types'
import { Name } from './Fields/Name'
import { ProfileImage } from './Fields/ProfileImage'
import { About } from './Fields/About'
import { lexicalHTML } from './Fields/LexicalHTML'

const Users: CollectionConfig = {
    slug: 'users',
    access: {
        read: () => true,
    },
    auth: true,
    admin: {
        group: "Users",
        useAsTitle: 'name',
        livePreview: {
            url: "/about"
        }
    },
    fields: [
        Name,
        ProfileImage,
        About,
        lexicalHTML('about', { name: 'about_html' }),
    ],
}

export default Users