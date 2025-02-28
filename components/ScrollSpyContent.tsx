"use client";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { ReactNode } from "react";

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

    return (
        <div
            className={`sticky top-0 w-full transition-opacity duration-300 ${className}`}
        >
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`absolute top-16 right-0 w-full transition-opacity duration-300 justify-items-center ${
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
