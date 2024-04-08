import { RelationshipField } from "payload/types";

export const Author: RelationshipField = {
    name: 'author',
    label: 'Author',
    type: 'relationship',
    relationTo: 'users',
    required: true,
    admin: {
        allowCreate: false,
    }
}