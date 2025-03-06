import { cleanHeaderIds } from '@/utils/cleanHeaderIds';
import Link from 'next/link';
import CustomImageComponent from './CustomImageComponent';
import ExpandableBlockComponent from './ExpandableBlockComponent';
import FaqComponent, { FaqProps } from './FaqComponent';
import QuoteBombComponent, { QuoteBombProps } from './QuoteBombComponent';
import ReviewComponent, { ReviewComponentProps } from './ReviewComponent';
import VideoComponent from './VideoComponent';

const headingSpacing = 'mt-12 mb-6';
const headingSpacingWrapper = (
  Tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  children: React.ReactNode[],
) => {
  return (
    <div className={headingSpacing}>
      <Tag>{children}</Tag>
    </div>
  );
};

const componentSpacing = 'my-12 md:my-20';
const componentSpacingWrapper = (Tag: React.ElementType, value: any) => {
  return (
    <div className={componentSpacing}>
      <Tag value={value} />
    </div>
  );
};

export const portableTextComponents = {
  types: {
    customImage: CustomImageComponent,
    video: VideoComponent,
    expandableBlock: ExpandableBlockComponent,
    // googleMaps: GoogleMapsComponent,
    review: ({ value }: ReviewComponentProps) => componentSpacingWrapper(ReviewComponent, value),
    quoteBomb: ({ value }: QuoteBombProps) => componentSpacingWrapper(QuoteBombComponent, value),
    faq: ({ value }: FaqProps) => componentSpacingWrapper(FaqComponent, value),
  },
  block: {
    normal: ({ children }: { children: React.ReactNode[] }) => (
      <p className="mb-6 last:mb-0">{children}</p>
    ),
    h2: ({ children }: { children: React.ReactNode[] }) => headingSpacingWrapper('h2', children),
    h3: ({ children }: { children: React.ReactNode[] }) => headingSpacingWrapper('h3', children),
    h4: ({ children }: { children: React.ReactNode[] }) => headingSpacingWrapper('h4', children),
    h5: ({ children }: { children: React.ReactNode[] }) => headingSpacingWrapper('h5', children),
    h6: ({ children }: { children: React.ReactNode[] }) => headingSpacingWrapper('h6', children),
  },
};

export const portableTextComponentsWithH2Tag = {
  types: {
    ...portableTextComponents.types,
  },
  block: {
    ...portableTextComponents.block,
    h2: ({ children }: { children: React.ReactNode[] }) => {
      const headingId = cleanHeaderIds(String(children[0]));
      return (
        <div id={headingId} className={headingSpacing}>
          <Link
            href={`#${headingId}`}
            aria-hidden="true"
            tabIndex={-1}
            className="pointer-events-none cursor-text"
          >
            <h2 className="font-impact">{children}</h2>
          </Link>
        </div>
      );
    },
  },
};
