"use client";
import Link from "next/link";
import { useState } from "react";
import ScrollingCTA from "./ScrollingCTA";

type FooterHoverLinkProps = {
    link: string;
    scrollingText: string;
    hoverText: string;
    showNewsletter: boolean;
};

export const FooterHoverCTALink = ({
    link,
    scrollingText,
    hoverText,
    showNewsletter,
}: FooterHoverLinkProps) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <Link
            href={link}
            className="hidden md:w-[70%] md:flex justify-center items-center relative overflow-x-hidden w-full h-full border-x border-foreground hover:bg-primary hover:text-primary-foreground hover:underline"
            onMouseOver={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onFocus={() => setIsHovering(true)}
            onBlur={() => setIsHovering(false)}
        >
            {isHovering ? (
                <span className="font-bold ">{hoverText}</span>
            ) : (
                <ScrollingCTA text={scrollingText} />
            )}
        </Link>
    );
};
