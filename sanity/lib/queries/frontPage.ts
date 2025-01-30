import { defineQuery } from "next-sanity";

export const FRONTPAGE_QUERY = (lang: string) => 
    defineQuery(
        `*[_type == "frontPage" && language == ${lang}][0]`
    )