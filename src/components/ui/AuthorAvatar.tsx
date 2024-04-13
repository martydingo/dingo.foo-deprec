'use client'
import { ProfileImage, User } from "@payload-types";
import { Avatar } from "@/shadcn-ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";


export default function AuthorAvatar({ author }: { author: User }) {
    const authorInitials = `${author.name.split(" ")[0][0]}${author.name.split(" ")[1][0]}`
    const profileImageDictionary: string | ProfileImage | null | undefined = author.profileImage
    let profileImageURL: string | null | undefined
    if (profileImageDictionary) {
        if (typeof (profileImageDictionary) !== "string") {
            profileImageURL = profileImageDictionary.sizes!.avatar!.url
        }
    }
    console.log(profileImageURL)
    return (
        <Avatar className="not-prose h-fit w-fit">
            {profileImageURL && <AvatarImage className="h-10" src={profileImageURL} />}
            <AvatarFallback>
                {authorInitials}
            </AvatarFallback>
        </Avatar>
    )
}