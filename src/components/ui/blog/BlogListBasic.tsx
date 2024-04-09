import { Separator } from "@/components/lib/shadcn-ui/separator"
import Image from "next/image"
import Link from "next/link"

export default function BlogListBasic({ pages }) {
    return (
        <div className="prose dark:prose-invert mx-auto grid grid-cols-2">
            {
                pages.docs.map((page, index) => {
                    console.log(pages.docs.length)
                    console.log(index)
                    return (
                        <div key="">
                            <div className="">
                                <Link className="no-underline m-0" href={`/blog/${page.slug}`}>
                                        <Image className="self-center mx-auto" alt={`${page.title} preview image`} src={`${page.previewImage.sizes.square_small.url}`} width={page.previewImage.sizes.square_small.width/2} height={page.previewImage.sizes.square_small.height/2} />
                                    <p className="text-3xl font-titillium not-prose tracking-wider">
                                        {page.title}
                                    </p>
                                    <sup className="">
                                        {new Date(page.date).toDateString()}
                                    </sup>
                                </Link>
                                <section className="">
                                    <div dangerouslySetInnerHTML={{ "__html": page.summary_html }} />
                                </section>
                            </div>
                            {index < pages.docs.length - 1 && <Separator className="my-12" />}
                            {index == pages.docs.length - 1 && <div className="my-24" />}
                        </div>
                    )
                })
            }

        </div>
    )
}