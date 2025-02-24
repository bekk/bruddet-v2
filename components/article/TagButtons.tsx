import { ARTICLEPAGE_QUERYResult } from "@/sanity/types/types";
import { stegaClean } from "next-sanity";
import Link from "next/link";
import { Button } from "../ui/button";

interface TagButtonProps {
  tagTexts: NonNullable<ARTICLEPAGE_QUERYResult>["tagTexts"];
}

export const TagButtons = ({ tagTexts }: TagButtonProps) => {
  return (
    tagTexts &&
    tagTexts.length > 1 && (
      <div className="flex gap-2 flex-wrap">
        {tagTexts?.map((tagText) => (
          <Button key={tagText._key}>
            <Link
              href={`#${stegaClean(tagText.subtitle)}`
                .replaceAll(" ", "-")
                .toLowerCase()}
            >
              {tagText.subtitle}
            </Link>
          </Button>
        ))}
      </div>
    )
  );
};
