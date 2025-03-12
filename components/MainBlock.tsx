import { ARTICLEPAGE_QUERYResult, EVENT_QUERYResult } from '@/sanity/types/types';
import { PortableText } from 'next-sanity';
import {
  portableTextComponents,
  portableTextComponentsWithH2Tag,
} from './portable-text/components';

type LeftBlockProps = {
  text: NonNullable<EVENT_QUERYResult>['text'] | NonNullable<ARTICLEPAGE_QUERYResult>['text'];
  shouldGenerateH2Links?: boolean;
};

export const MainBlock = ({
  text,
  shouldGenerateH2Links: shouldGenerateH2Links = false,
}: LeftBlockProps) => {
  const leftBlockTypes = ['block', 'review', 'video', 'expandableBlock', 'faq'];

  return (
    <>
      <div>
        {text?.map((block) => {
          const hidden = !leftBlockTypes.includes(block._type) ? 'lg:hidden' : '';
          return (
            <div key={block._key} className={hidden}>
              <PortableText
                components={
                  shouldGenerateH2Links ? portableTextComponentsWithH2Tag : portableTextComponents
                }
                value={block}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
