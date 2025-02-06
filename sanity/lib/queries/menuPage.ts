import { defineQuery } from "next-sanity";
import { imageProjection } from "./image";

export const MENUPAGE_QUERY = defineQuery(
`*[_type == "menuPage"][0] {
    metaTitle, 
    metaDescription, 
    links[]->{title,
    ${imageProjection},
    slug,
    _type,
    text[style=="h2"]{
    defined(_key) => {_key},
    "subtitle": children[0].text,
    "slug": ^.slug.current
    }[defined(subtitle)],
    },
    socialMediaText,
    bottomLink {
      text,
      link->{
      _type,
      slug
      },
    }}`
)