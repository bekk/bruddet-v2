import { internalGroqTypeReferenceTo } from '@/sanity/types/types';
import { defineQuery } from 'next-sanity';

export type ImageType = {
  alt: string | null;
  credit: string | null;
  asset: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
  } | null;
} | null;

// imageProjection should be used like this:
// As reference:
//      image->${imageProjection}
// Not as reference:
//      "image": ${imageProjection}
export const imageProjection = defineQuery(
  `
          {
              "alt": select(
                $lang == "en" => image.alt.en,
                $lang == "nb" => image.alt.nb,
              ),
              "credit": image.credit,
              "asset": image.asset
          }
        `,
);
