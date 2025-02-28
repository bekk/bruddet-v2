import { ARTICLEPAGE_QUERYResult } from "@/sanity/types/types";
import { cleanHeaderIds } from "@/utils/cleanHeaderIds";
import Link from "next/link";
import { Button } from "../ui/button";

interface TagButtonProps {
    tagTexts: NonNullable<ARTICLEPAGE_QUERYResult>["tagTexts"];
}
export const TagButtons = ({ tagTexts }: TagButtonProps) => {
    return (
        tagTexts &&
        tagTexts.length > 1 && (
            <div className="flex gap-2 flex-wrap md:justify-center">
                {tagTexts?.map((tagText) =>
                    tagText.subtitle ? (
                        <Button key={tagText._key}>
                            <Link href={`#${cleanHeaderIds(tagText.subtitle)}`}>
                                {tagText.subtitle}
                            </Link>
                        </Button>
                    ) : null,
                )}
            </div>
        )
    );
};
