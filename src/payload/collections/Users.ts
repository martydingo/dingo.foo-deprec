import { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
    slug: 'users',
    access: {
        read: () => true,
    },
    auth: true,
    admin: {
        group: "Users",
        useAsTitle: 'name',
    },
    fields: [
        {
            name: "name",
            type: "text",
            required: true
        },
        {
            name: 'profileImage',
            type: 'upload',
            relationTo: 'profileImage',
        },
        // Email added by default
        // Add more fields as needed
    ],
}

export default Users