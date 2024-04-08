import { HTMLConverterFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import { RichTextField } from "payload/types";

export const Summary: RichTextField = {
    name: 'summary',
    type: 'richText',
    editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
            ...defaultFeatures,
            HTMLConverterFeature({}),
        ]
    })
}