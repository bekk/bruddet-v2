import { EVENT_QUERYResult } from "@/sanity/types/types";
import { PortableText } from "next-sanity";
import { portableTextComponents } from "./portable-text/components";

type LeftBlockProps = {
    text: NonNullable<EVENT_QUERYResult>["text"];
};

export const MainBlock = ({ text }: LeftBlockProps) => {
    const leftBlockTypes = [
        "block",
        "review",
        "video",
        "expandableBlock",
        "faq",
    ];

    const leftBlocks = text?.filter(
        (block) =>
            leftBlockTypes.includes(block._type) ||
            (block._type === "quoteBomb" && block.placement === 0),
    );

    return (
        <>
            <div className="hidden xl:block">
                {leftBlocks?.map((block) => (
                    <PortableText
                        key={block._key}
                        components={portableTextComponents}
                        value={block}
                    />
                ))}
            </div>
            <div className="xl:hidden">
                {text?.map((block) => (
                    <PortableText
                        key={block._key}
                        components={portableTextComponents}
                        value={block}
                    />
                ))}
            </div>
        </>
    );
};
