import { CollectionConfig } from "payload/types";

const siteImage: CollectionConfig = {
    slug: 'siteImage',
    labels: {
        singular: 'Site Image',
        plural: 'Site Images',
    },
    access: {
        read: () => true,
    },
    admin: {
        group: "Site",
    },
    upload: {
        staticURL: '/images/site',
        staticDir: '../../public/images/site',
        imageSizes: [
            {
                name: 'small',
                height: 64,
                width: undefined,
                position: 'centre',
            },
            {
                name: 'medium',
                height: 128,
                width: undefined,
                position: 'centre',
            },
            {
                name: 'large',
                height: 256,
                width: undefined,
                position: 'centre',
            },
            {
                name: 'x_large',
                height: 512,
                width: undefined,
                position: 'centre',
            },
            {
                name: 'xx_large',
                height: 1024,
                width: undefined,
                position: 'centre',
            },
            {
                name: 'xxx_large',
                height: 2048,
                width: undefined,
                position: 'centre',
            },
        ],
        adminThumbnail: 'x_large',
        mimeTypes: ['image/*'],
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
        },
    ],
}

export default siteImage