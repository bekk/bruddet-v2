import { defineQuery } from "next-sanity";

export type ImageType = {
    alt: string | null;
    credit: string | null;
    imageUrl: string | null;
} | null;

export const imageProjectionAsReference = defineQuery(
    `
            image->{
                "alt": image.alt[$lang],
                "credit": image.credit,
                "imageUrl": image.asset->url
            }
        `,
);

export const imageProjection = defineQuery(
    `
            image {
                "alt": alt[$lang],
                "credit": credit,
                "imageUrl": asset->url
            }
        `,
);
