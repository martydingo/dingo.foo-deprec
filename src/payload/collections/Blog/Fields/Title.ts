import { TextField } from "payload/types"

function toSlug(str) {
    return str
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');
}

export const Title: TextField = {
    name: 'title',
    label: 'Title',
    type: 'text',
    required: true,
    hooks: {
        afterChange: [({ value, data, siblingData, originalDoc, operation, req }) => {

            if (operation === "read" || operation === "delete") {
                return value;
            } else {
                siblingData.slug = toSlug(value)
                data!.slug = toSlug(value)
                originalDoc.slug = toSlug(value)
                return value;
            }
        }]
    },
}