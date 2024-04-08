import { CollectionConfig } from "payload/types";

const projectImage: CollectionConfig = {
    slug: 'projectImage',
    labels: {
        singular: 'Project Image',
        plural: 'Project Images',
    },
    access: {
        read: () => true,
    },
    admin: {
        group: "Projects",
    },
    upload: {
        staticURL: '/images/projects',
        staticDir: '../../public/images/projects',
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

export default projectImage