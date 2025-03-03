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

  return (
    <div className="flex flex-col items-center">
      {normalRightBlocks?.map((block, index) => (
        <PortableText key={index} components={portableTextComponents} value={block} />
      ))}
    </div>
  );
};
