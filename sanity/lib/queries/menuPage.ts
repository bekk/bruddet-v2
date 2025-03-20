import { defineQuery } from 'next-sanity';

export const MENUPAGE_QUERY = defineQuery(
  `*[_type == "menuPage" && language == $lang][0] {
    metaTitle, 
    metaDescription,
    title,
    links[]->{
      title,
      image,
      slug,
      _type,
      text[style=="h2"] {
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
    }
  }`,
);
