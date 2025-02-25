import { EVENT_QUERYResult } from "@/sanity/types/types";
import { PortableText } from "next-sanity";
import { portableTextComponents } from "./portable-text/components";
import { ScrollSpyContent } from "./ScrollSpyContent";

type StickyRightColumnProps = {
    text: NonNullable<EVENT_QUERYResult>["text"];
};

export const StickyRightColumn = ({ text }: StickyRightColumnProps) => {
    const rightBlockSickyTypes = ["customImage"];

    const stickyRightBlocks = text?.filter(
        (block) =>
            rightBlockSickyTypes.includes(block._type) ||
            (block._type === "quoteBomb" && block.placement === 1),
    );

    return (
        <>
            <ScrollSpyContent
                parentId="scroll-content"
                items={
                    stickyRightBlocks?.map((block) => (
                        <PortableText
                            components={portableTextComponents}
                            value={block}
                        />
                    )) || []
                }
                className="h-screen"
            />
        </>
    );
};
