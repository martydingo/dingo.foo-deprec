import { getPayload } from "payload";
import payloadConfig from "@payload-config";
// import Mermaid from "@/components/ui/blog/Mermaid";
import BreadCrumb from "@/components/ui/navigation/BreadCrumb/BreadCrumb";
import HeadingSelect from "@/components/ui/navigation/HeadingSelect/HeadingSelect";
import { BlogPostBody } from "@/components/ui/blog/BlogPostBody";
import BlogPostHeader from "@/components/ui/blog/BlogPostHeader";
import { Blog } from "@payload-types";

function slugify(text: string) {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(/[^\w-]+/g, "") // Remove all non-word chars
        .replace(/--+/g, "-") // Replace multiple - with single -
        .replace(/^-+/, "") // Trim - from start of text
        .replace(/-+$/, "") // Trim - from end of text
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const payload = await getPayload({
        config: payloadConfig
    });
    const allBlogPosts = await payload.find({
        collection: "blog"
    })
    const BlogPostSearch = await payload.find({
        collection: "blog",
        where: {
            slug: {
                equals: params.slug
            },
        },
    })

    const BlogPost = BlogPostSearch.docs[0]

    const headings = BlogPost.content!.root.children
        .filter((childNode) => childNode.type === "heading" && childNode.tag !== "h1")
        //@ts-expect-error
        .map((heading, index) => { return { "index": index, "title": heading.children[0].text, "href": slugify(heading.children[0].text) } })
        .sort((headingA, headingB) => headingA.index - headingB.index)

    return (
        <div className="flex flex-col">
            <div className="items-center basis-1/3 mx-auto xl:container xl:max-w-5xl gap-4 flex flex-col xl:flex-row xl:justify-between">
                <BreadCrumb
                    rootPage={{ "title": "Blog", "href": "/blog" }}
                    curPage={{ "title": `${BlogPost.title as string}`, "href": `/blog/${BlogPost.slug as string}` }}
                    allPosts={allBlogPosts.docs}
                />
                { /* <HeadingSelect headings={headings} /> */}
            </div>
            <div className="basis-1/3 prose dark:prose-invert container xl:container xl:max-w-5xl mt-6">
                <BlogPostHeader page={BlogPost} />
                <BlogPostBody page={BlogPost} />
            </div>
            <div className="basis-1/3">
            </div>
        </div>
    )
}