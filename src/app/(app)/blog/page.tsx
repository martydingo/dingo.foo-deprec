import { getPayload } from "payload";
import payloadConfig from "@payload-config"
import BlogListBasic from "@/components/ui/blog/BlogListBasic";
import { BlogListCarousel } from "@/components/ui/blog/BlogListCarousel";

export default async function Blog() {
    const payload = await getPayload({
        config: payloadConfig
    });
    const pages = await payload.find({
        collection: "blog",
    })

    return (
        <div className="xl:container">
                    <BlogListBasic pages={pages} />
        </div>
    )
}