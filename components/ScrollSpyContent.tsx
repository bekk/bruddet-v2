"use client";
import { ReactNode } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";

type ScrollSpyContentProps = {
    parentId: string;
    items: ReactNode[];
    className?: string;
};

export const ScrollSpyContent = ({
    parentId,
    items,
    className = "",
}: ScrollSpyContentProps) => {
    const activeIndex = useScrollSpy(parentId, items.length);
    console.log("items", items);
    console.log("items length", items.length);
    console.log("activeIndex", activeIndex);

    return (
        <div
            className={`sticky top-0 w-full transition-opacity duration-300 ${className}`}
        >
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`absolute top-4 right-0 w-full transition-opacity duration-300 justify-items-center ${
                        index === activeIndex
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                    }`}
                >
                    {item}
                </div>
            ))}
        </div>
    );
};
