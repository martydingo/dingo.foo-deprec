import { getPayload } from "payload";
import payloadConfig from "@payload-config"
import BlogListBasic from "@/components/ui/blog/BlogListBasic";
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
        where: {
            draft: {
                equals: false
            }
        },
        page: 1,
        limit: 3
    })
    const blogPosts = await payload.find({
        collection: "blog",
        where: {
            draft: {
                equals: false
            }
        },
        page: page,
        limit: 5
    })

    return (
        <div className="container xl:container xl:max-w-5xl max-w-2xl">

            {/* <p className="text-sm text-muted-foreground text-center">
                My featured blog posts
            </p> */}
            <BlogCarousel blogPosts={featuredBlogPosts} />
            {blogPosts.totalDocs > 1 && <Separator className="my-5" />}
            <BlogListBasic pages={blogPosts} sliceIndex={3} />
            {blogPosts.totalPages > 1 &&
                <div className='mb-5'>
                    <ArticlePagination articles={blogPosts} />
                </div>
            }
        </div>
    )
}