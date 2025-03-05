import { ARTICLEPAGE_QUERYResult, EVENT_QUERYResult } from '@/sanity/types/types';
import { PortableText } from 'next-sanity';
import {
  portableTextComponents,
  portableTextComponentsWithH2Tag,
} from './portable-text/components';

type LeftBlockProps = {
  text: NonNullable<EVENT_QUERYResult>['text'] | NonNullable<ARTICLEPAGE_QUERYResult>['text'];
  shouldGenerageH2Links?: boolean;
};

export const MainBlock = ({ text, shouldGenerageH2Links = false }: LeftBlockProps) => {
  const leftBlockTypes = ['block', 'review', 'video', 'expandableBlock', 'faq'];

  const leftBlocks = text?.filter(
    (block) =>
      leftBlockTypes.includes(block._type) ||
      (block._type === 'quoteBomb' && block.placement === 0),
  );

  return (
    <>
      <div className="hidden lg:block">
        {leftBlocks?.map((block) => (
          <PortableText
            key={block._key}
            components={
              shouldGenerageH2Links ? portableTextComponentsWithH2Tag : portableTextComponents
            }
            value={block}
          />
        ))}
      </div>
      <div className="lg:hidden">
        {text?.map((block) => (
          <PortableText
            key={block._key}
            components={
              shouldGenerageH2Links ? portableTextComponentsWithH2Tag : portableTextComponents
            }
            value={block}
          />
        ))}
      </div>
    </>
  );
};
