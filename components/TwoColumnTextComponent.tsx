import {
    ARTICLEPAGE_QUERYResult,
    EVENT_QUERYResult,
} from "@/sanity/types/types";
import { PortableText } from "next-sanity";
import { portableTextComponents } from "./portable-text/components";

type TwoColumnTextComponentProps = {
    text:
        | NonNullable<EVENT_QUERYResult>["text"]
        | NonNullable<ARTICLEPAGE_QUERYResult>["text"];
    shouldGenerateH2Links?: boolean;
};

export const TwoColumnTextComponent = ({
    text,
    shouldGenerateH2Links = false,
}: TwoColumnTextComponentProps) => {
    const leftBlockTypes = [
        "block",
        "review",
        "video",
        "expandableBlock",
        "faq",
    ];
    const rightBlockSickyTypes = ["customImage"];

    const stickyRightBlocks = text?.filter(
        (block) =>
            rightBlockSickyTypes.includes(block._type) ||
            (block._type === "quoteBomb" && block.placement === 1),
    );

    const leftBlocks = text?.filter(
        (block) =>
            leftBlockTypes.includes(block._type) ||
            (block._type === "quoteBomb" && block.placement === 0),
    );

    return (
        <>
            <div className="hidden md:block mx-8 lg:mx-24">
                <div className="grid grid-cols-2 gap-10 font-serif text-xl">
                    {/*left-column*/}
                    <div className="flex justify-start w-full">
                        <div className="lg:w-4/5 flex flex-col gap-8">
                            {leftBlocks?.map((block, i) => (
                                <PortableText
                                    key={i}
                                    components={portableTextComponents}
                                    value={block}
                                />
                            ))}
                        </div>
                    </div>
                    {/*right-column*/}
                    <div className="flex justify-end w-full">
                        <div
                        // className={galleryClassName}
                        >
                            {stickyRightBlocks?.map((block, i) => (
                                <div
                                    key={i}
                                    // className={
                                    //     galleryDisplayType != 1
                                    //         ? "mt-5"
                                    //         : i === 0
                                    //           ? activeGallerySlideClassName
                                    //           : inactiveGallerySlideClassName
                                    // }
                                >
                                    <PortableText
                                        key={i}
                                        components={portableTextComponents}
                                        value={block}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/*column for mobile screens*/}
            <div className="flex md:hidden flex-col gap-8">
                {text?.map((block, i) => (
                    <div
                        key={i}
                        className="flex flex-col mx-6 md:mx-8 lg:mx-24"
                    >
                        <PortableText
                            key={i}
                            components={portableTextComponents}
                            value={block}
                        />
                    </div>
                ))}
            </div>
        </>
    );
};
