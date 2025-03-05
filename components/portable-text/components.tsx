import { cleanHeaderIds } from '@/utils/cleanHeaderIds';
import Link from 'next/link';
import CustomImageComponent from './CustomImageComponent';
import ExpandableBlockComponent from './ExpandableBlockComponent';
import FaqComponent, { FaqProps } from './FaqComponent';
import QuoteBombComponent, { QuoteBombProps } from './QuoteBombComponent';
import ReviewComponent, { ReviewComponentProps } from './ReviewComponent';
import VideoComponent from './VideoComponent';

export const portableTextComponents = {
  types: {
    customImage: CustomImageComponent,
    video: VideoComponent,
    // googleMaps: GoogleMapsComponent,
    review: ({ value }: ReviewComponentProps) => (
      <div className="my-12 md:my-20">
        <ReviewComponent value={value} />
      </div>
    ),
    faq: ({ value }: FaqProps) => (
      <div className="my-4 md:my-12">
        <FaqComponent value={value} />
      </div>
    ),
    expandableBlock: ExpandableBlockComponent,
    quoteBomb: ({ value }: QuoteBombProps) => (
      <div className="my-12 md:my-20">
        <QuoteBombComponent value={value} />
      </div>
    ),
  },
  block: {
    normal: ({ children }: { children: React.ReactNode[] }) => (
      <p className="mb-6 last:mb-0">{children}</p>
    ),
    h2: ({ children }: { children: React.ReactNode[] }) => (
      <h2 className="mt-12 mb-6 text-3xl font-bold">{children}</h2>
    ),
    h3: ({ children }: { children: React.ReactNode[] }) => (
      <h3 className="mt-12 mb-6 text-2xl font-semibold">{children}</h3>
    ),
    h4: ({ children }: { children: React.ReactNode[] }) => (
      <h4 className="mt-12 mb-6 text-xl font-semibold">{children}</h4>
    ),
    h5: ({ children }: { children: React.ReactNode[] }) => (
      <h5 className="mt-12 mb-6 text-lg font-medium">{children}</h5>
    ),
    h6: ({ children }: { children: React.ReactNode[] }) => (
      <h6 className="mt-12 mb-6 text-base font-medium">{children}</h6>
    ),
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
        <div id={headingId} className="mt-12 mb-6">
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
