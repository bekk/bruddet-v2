import { defineQuery } from 'next-sanity';

export type ImageType = {
  alt: string | null;
  credit: string | null;
  imageUrl: string | null;
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
              "imageUrl": image.asset->url
          }
        `,
);
