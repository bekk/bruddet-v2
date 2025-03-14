import { cleanHeaderIds } from '@/utils/cleanHeaderIds';
import Link from 'next/link';
import CustomImageComponent from './CustomImageComponent';
import ExpandableBlockComponent from './ExpandableBlockComponent';
import FaqComponent, { FaqProps } from './FaqComponent';
import QuoteBombComponent, { QuoteBombProps } from './QuoteBombComponent';
import ReviewComponent, { ReviewComponentProps } from './ReviewComponent';
import VideoComponent from './VideoComponent';
import { PortableTextBlock, PortableTextComponentProps } from 'next-sanity';

const headingSpacing = 'mt-12 mb-6';
const componentSpacing = 'my-12 md:my-20';

export const portableTextComponents = {
  types: {
    customImage: CustomImageComponent,
    video: VideoComponent,
    // googleMaps: GoogleMapsComponent,
    review: ({ value }: ReviewComponentProps) => (
      <div className={componentSpacing}>
        <ReviewComponent value={value} />
      </div>
    ),
    faq: ({ value }: FaqProps) => (
      <div className={componentSpacing}>
        <FaqComponent value={value} />
      </div>
    ),
    expandableBlock: ExpandableBlockComponent,
    quoteBomb: ({ value }: QuoteBombProps) => (
      <div className={componentSpacing}>
        <QuoteBombComponent value={value} />
      </div>
    ),
  },
  block: {
    normal: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <p className="mb-6 last:mb-0">{children}</p>
    ),
    h2: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <h2 className={headingSpacing}>{children}</h2>
    ),
    h3: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <h3 className={headingSpacing}>{children}</h3>
    ),
    h4: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <h4 className={headingSpacing}>{children}</h4>
    ),
    h5: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <h5 className={headingSpacing}>{children}</h5>
    ),
    h6: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <h6 className={headingSpacing}>{children}</h6>
    ),
  },
};

export const portableTextComponentsWithH2Tag = {
  types: {
    ...portableTextComponents.types,
  },
  block: {
    ...portableTextComponents.block,
    h2: ({ children }: PortableTextComponentProps<PortableTextBlock>) => {
      const headingId = cleanHeaderIds(
        String(Array.isArray(children) ? children[0] : (children ?? '')),
      );
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
