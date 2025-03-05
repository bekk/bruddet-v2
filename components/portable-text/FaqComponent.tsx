import { PortableText, PortableTextBlock } from 'next-sanity';
import { portableTextComponents } from './components';

export interface FaqProps {
  value: {
    expandableBlocks: PortableTextBlock[];
    title: string; // Adjust the type as necessary based on the expected content structure
  };
}

export default function FaqComponent({ value }: FaqProps) {
  return (
    <>
      <h3 className="my-8">{value.title}</h3>
      <div>
        {value.expandableBlocks.map((block) => {
          return (
            <PortableText key={block._key} value={block} components={portableTextComponents} />
          );
        })}
      </div>
    </>
  );
}
