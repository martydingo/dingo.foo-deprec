import { UploadField } from "payload/types";

export const ProfileImage: UploadField = {
    name: 'profileImage',
    type: 'upload',
    relationTo: 'profileImage',
}