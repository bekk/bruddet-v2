import { ARTICLEPAGE_QUERYResult, EVENT_QUERYResult } from '@/sanity/types/types';
import { PortableText } from 'next-sanity';
import { portableTextComponents } from './portable-text/components';

type NormalRightColumnProps = {
  text: NonNullable<EVENT_QUERYResult>['text'] | NonNullable<ARTICLEPAGE_QUERYResult>['text'];
};

export const NormalRightColumn = ({ text }: NormalRightColumnProps) => {
  const rightBlockNormalTypes = ['customImage'];

  const normalRightBlocks = text?.filter(
    (block) =>
      rightBlockNormalTypes.includes(block._type) ||
      (block._type === 'quoteBomb' && block.placement === 1),
  );

  const numberOfRightBlocks = normalRightBlocks?.length;

  return (
    <div className={`grid grid-rows-${numberOfRightBlocks} mx-auto`}>
      {normalRightBlocks?.map((block, index) => (
        <div>
          <PortableText key={index} components={portableTextComponents} value={block} />
        </div>
      ))}
    </div>
  );
};
