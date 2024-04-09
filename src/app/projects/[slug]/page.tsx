import "@/styles/css/globals.css";
import { getPayloadClient } from "@/payload/payloadClient";
import Mermaid from "@/components/ui/project/Mermaid";
import BreadCrumb from "@/components/ui/navigation/BreadCrumb/BreadCrumb";
import HeadingSelect from "@/components/ui/navigation/HeadingSelect/HeadingSelect";

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

export default async function ProjectPost({ params }: { params: { slug: string } }) {
    const payload = await getPayloadClient();
    const allProjectPosts = await payload.find({
        collection: "project"
    })
    const ProjectPost = await payload.find({
        collection: "project",
        where: {
            slug: {
                equals: params.slug
            },
        },
    })

    const headings = ProjectPost.docs[0].content.root.children
        .filter((childNode) => childNode.type === "heading" && childNode.tag !== "h1")
        .map((heading, index) => { return { "index": index, "title": heading.children[0].text, "href": slugify(heading.children[0].text) } })
        .sort((headingA, headingB) => headingA.index - headingB.index)

    return (
        <div className="flex flex-col">
            <div className="items-center basis-1/3 mx-auto xl:container xl:max-w-5xl gap-4 flex flex-col xl:flex-row xl:justify-between">
                <BreadCrumb
                    rootPage={{ "title": "Project", "href": "/project" }}
                    curPage={{ "title": `${ProjectPost.docs[0].title as string}`, "href": `/project/${ProjectPost.docs[0].slug as string}` }}
                    allPosts={allProjectPosts.docs}
                />
                <HeadingSelect headings={headings} />
            </div>
            <div className="basis-1/3 prose dark:prose-invert container xl:container xl:max-w-5xl grid">
                <div className="mx-auto flex xl:ml-0">
          
                </div>
                <ProjectPostClient page={ProjectPost.docs[0]} />
            </div>
            <div className="basis-1/3">

            </div>
            <Mermaid />
        </div>
    )
}