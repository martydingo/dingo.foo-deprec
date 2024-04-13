import { getPayload } from "payload";
import payloadConfig from "@payload-config"
import BlogListBasic from "@/components/ui/blog/BlogListBasic";
import { BlogListCarousel } from "@/components/ui/blog/BlogListCarousel";
import ArticlePagination from "@/components/ui/ArticlePagination";
import BlogCarousel from "@/components/ui/blog/BlogCarousel";
import { Separator } from "@/shadcn-ui/separator";

export default async function Blog({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
    let page = 1
    if (searchParams.page) {
        page = parseInt(searchParams.page)
    }

    const payload = await getPayload({
        config: payloadConfig
    });
    const featuredBlogPosts = await payload.find({
        collection: "blog",
        page: 1,
        limit: 3
    })
    const blogPosts = await payload.find({
        collection: "blog",
        page: page,
        limit: 1
    })

    return (
        <div className="container xl:container">
            <p className='text-2xl'>
                Featured
            </p>
            <BlogCarousel blogPosts={featuredBlogPosts} />
            <Separator className="my-5" />
            <p className='text-2xl'>
                Further Reading
            </p>
            <BlogListBasic pages={blogPosts} />
            {blogPosts.totalPages > 1 &&
                <div className='py-8'>
                    <ArticlePagination articles={blogPosts} />
                </div>
            }
        </div>
    )
}