import { getPayloadClient } from "@/payload/payloadClient";

export async function fetchBlogPosts() {
        const payload = await getPayloadClient();
        const blogPosts = await payload.find({
            collection: "blog",
        })
        return blogPosts
}