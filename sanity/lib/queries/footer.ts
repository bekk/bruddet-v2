import { defineQuery } from "next-sanity";

export const FOOTER_QUERY = defineQuery(
    `*[_type=="footer" && language==$lang][0] {..., "link": link->slug.current}`,
);
