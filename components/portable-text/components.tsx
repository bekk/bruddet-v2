import { cleanHeaderIds } from '@/utils/cleanHeaderIds';
import Link from 'next/link';
import CustomImageComponent from './CustomImageComponent';
import ExpandableBlockComponent from './ExpandableBlockComponent';
import FaqComponent from './FaqComponent';
import QuoteBombComponent from './QuoteBombComponent';
import ReviewComponent from './ReviewComponent';
import VideoComponent from './VideoComponent';

export const portableTextComponents = {
  types: {
    customImage: CustomImageComponent,
    video: VideoComponent,
    // googleMaps: GoogleMapsComponent,
    review: ReviewComponent,
    faq: FaqComponent,
    expandableBlock: ExpandableBlockComponent,
    quoteBomb: QuoteBombComponent,
  },
};

export const portableTextComponentsWithH2Tag = {
  ...portableTextComponents,
  block: {
    h2: ({ children }: { children: React.ReactNode[] }) => {
      const headingId = cleanHeaderIds(String(children[0]));
      return (
        <div id={headingId}>
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
