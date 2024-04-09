import NavigationBar from "@/components/ui/navigation/NavigationBar/NavigationBar";
import React from "react";

export default function ProjectLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <NavigationBar curPage="Project" />
            {children}
        </div>
    )
}