import { PortableText, PortableTextBlock } from "next-sanity";
import { portableTextComponents } from "./components";

interface FaqProps {
  value: {
    expandableBlocks: PortableTextBlock[];
    title: string; // Adjust the type as necessary based on the expected content structure
  };
}

export default function FaqComponent({ value }: FaqProps) {
  return (
    <>
      <h3>{value.title}</h3>
      {value.expandableBlocks.map((block, index) => {
        return (
          <PortableText
            key={block._key}
            value={block}
            components={portableTextComponents}
          />
        );
      })}
    </>
  );
}
