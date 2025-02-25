import { defineQuery } from "next-sanity";
import { imageProjectionAsReference } from "./image";

export const PROGRAMPAGE_QUERY = defineQuery(
    `*[_type=="programPage" && language == $lang][0] {
    metaTitle,
    metaDescription,
    title,
    socialMediaText,
    links[]->{
        title,
        slug,
        ${imageProjectionAsReference},
        dates
    }
 }`,
);
