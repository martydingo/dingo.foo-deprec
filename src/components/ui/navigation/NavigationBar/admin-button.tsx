import { Button } from "@/shadcn-ui/button";
import { Pencil2Icon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function AdminButton() {
    return (
        <Button asChild variant="outline" size="icon">
            <Link href="/admin">
            <Pencil2Icon className="h-4 w-4" />
            </Link>
        </Button>
    )
}