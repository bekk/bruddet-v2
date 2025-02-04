import { defineQuery } from "next-sanity";

export const imageProjection = defineQuery(
    `
    image->{
        "alt": image.alt["$lang"], // Use $lang as a parameter
        "credit": image.credit,
        "imageUrl": image.asset->url
    }
    `
);