import { UploadField } from "payload/types";

export const PreviewImage: UploadField = {
    name: 'previewImage',
    label: 'Preview Image',
    type: 'upload',
    relationTo: 'blogImage',
}