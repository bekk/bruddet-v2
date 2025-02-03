import { defineQuery } from "next-sanity";

export const FRONTPAGE_QUERY = 
    defineQuery(
        `*[_type == "frontPage" && language == $lang][0]`
    )
