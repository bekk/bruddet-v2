import { defineQuery } from "next-sanity";

export const imageProjectionAsReference =
    defineQuery(
        `
            image->{
                "alt": image.alt[$lang],
                "credit": image.credit,
                "imageUrl": image.asset->url
            }
        `
    )

export const imageProjection = 
    defineQuery(
        `
            image {
                "alt": alt[$lang],
                "credit": credit,
                "imageUrl": asset->url
            }
        `
    )
