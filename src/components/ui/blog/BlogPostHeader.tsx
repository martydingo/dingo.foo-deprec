import { User } from "@payload-types";

export default function BlogPostHeader({page}: {page: {
    title: string;
    id: string;
    date: string;
    author: string | User;
    updatedAt: string;
    createdAt: string;
}})