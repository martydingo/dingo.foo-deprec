import "@/styles/css/globals.css";
import { getPayloadClient } from "@/payload/payloadClient";
import Link from "next/link";
import BreadCrumb from "@/components/ui/navigation/BreadCrumb/BreadCrumb";

export default async function Project() {
    const payload = await getPayloadClient();
    const pages = await payload.find({
        collection: "projects",
    })

    return (
        <div className="flex flex-col mt-8">
            <div className="flex w-screen">
                <div className="basis-1/3" />
                <div className="basis-1/3">
                   
                </div>
                <div className="basis-1/3" />
            </div>
            <div className="pt-16 flex w-screen">
                <div className="basis-1/3" />
                <div className="basis-10/12">
                    {/* <h1 className="self-center text-center text-4xl pb-16 font-titllium">
                        All Posts
                    </h1> */}
                   
                </div>
                <div className="basis-1/3" />
            </div>
        </div>
    )
}