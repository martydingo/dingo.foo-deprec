import { Blog, User } from "@payload-types";
import TagBadge from "../TagBadge";
import AuthorAvatar from "../AuthorAvatar";

export default function BlogPostHeader({page}: {page: Blog}){
    const author: User = page.author as User
    return (
        <div>
            <h1>
                {page.title}
            </h1>
            <div>
                <div className="mt-6 flex">
                    <AuthorAvatar author={author} />
                    <div className="flex flex-col not-prose">
                    <p className="text-sm">Authored by {author.name}</p>
                    <p className="text-sm">{new Date(page.date).toDateString()}</p>
                    </div>
                </div>
            </div>
            <div>
                <TagBadge collection="Blog" page={page} />
            </div>
        </div>
    )
}