import "@/styles/css/globals.css";
import { getPayloadClient } from "@/payload/payloadClient";
import Mermaid from "@/components/ui/blog/Mermaid";
import BreadCrumb from "@/components/ui/navigation/BreadCrumb/BreadCrumb";
import HeadingSelect from "@/components/ui/navigation/HeadingSelect/HeadingSelect";
import { BlogPostClient } from "@/components/ui/blog/BlogPostClient";

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
    const payload = await getPayloadClient();
    const allBlogPosts = await payload.find({
        collection: "blog"
    })
    const BlogPost = await payload.find({
        collection: "blog",
        where: {
            slug: {
                equals: params.slug
            },
        },
    })

    const headings = BlogPost.docs[0].content.root.children
        .filter((childNode) => childNode.type === "heading" && childNode.tag !== "h1")
        .map((heading, index) => { return { "index": index, "title": heading.children[0].text, "href": slugify(heading.children[0].text) } })
        .sort((headingA, headingB) => headingA.index - headingB.index)

    return (
        <div className="flex flex-col">
            <div className="items-center basis-1/3 mx-auto xl:container xl:max-w-5xl gap-4 flex flex-col xl:flex-row xl:justify-between">
                <BreadCrumb
                    rootPage={{ "title": "Blog", "href": "/blog" }}
                    curPage={{ "title": `${BlogPost.docs[0].title as string}`, "href": `/blog/${BlogPost.docs[0].slug as string}` }}
                    allPosts={allBlogPosts.docs}
                />
                <HeadingSelect headings={headings} />
            </div>
            <div className="basis-1/3 prose dark:prose-invert container xl:container xl:max-w-5xl grid">
                <div className="mx-auto flex xl:ml-0">
          
                </div>
                <BlogPostClient page={BlogPost.docs[0]} />
            </div>
            <div className="basis-1/3">

            </div>
            <Mermaid />
        </div>
    )
}