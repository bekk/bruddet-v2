import { defineQuery } from 'next-sanity';

export const PROGRAMPAGE_QUERY = defineQuery(
  `*[_type=="programPage" && language == $lang][0] {
    metaTitle,
    metaDescription,
    title,
    socialMediaText,
    links[]->{
        title,
        image,
        slug,
        dates[]{
          ...,
        } | order(date asc)
    }
 }`,
);
