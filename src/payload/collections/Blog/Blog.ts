import { CollectionConfig } from "payload/types"

import { lexicalHTML } from "./Fields/LexicalHTML"


// Fields
import { PreviewImage } from "./Fields/PreviewImage"
import { Author } from "./Fields/Author"
import { Date } from "./Fields/Date"
import { Slug } from "./Fields/Slug"
import { Title } from "./Fields/Title"

// Endpoints
import { bySlug } from "./Endpoints/bySlug"
import { Content } from "./Fields/Content"
import { Summary } from "./Fields/Summary"
import { Series } from "./Fields/Series"


const Blog: CollectionConfig = {
    slug: 'blog',
    labels: {
        singular: 'Blog Post',
        plural: 'Blog Posts',
    },
    access: {
        read: () => true,
    },
    admin: {
        group: "Blog",
        livePreview: {
            url: ({
                data,
                documentInfo,
                locale
            }) => { return `/blog/${data.slug}` }
        },
    },

    fields: [
        Title,
        Date,
        Author,
        Series,
        PreviewImage,
        Summary,
        lexicalHTML('summary', { name: 'summary_html' }),
        Content,
        lexicalHTML('content', { name: 'content_html' }),
        Slug,
    ],
    endpoints: [
        bySlug
    ],
}


export default Blog