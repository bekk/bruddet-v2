import { defineQuery } from 'next-sanity';

export const EVENT_QUERY = defineQuery(
  `
    *[_type == "event" && slug.current == $slug && language == $lang][0]{
      ...,
      genre->,
      image,
      roleGroups[]{
        ...,
        persons[]{
          ...,
          person-> {
            ...,
            "biography": select(
              $lang == "nb" => biography.nb, 
              $lang == "en" => biography.en,
            )
          }
        }
      },
      dates[]{
        ...,
      } | order(date asc)
    }
  `,
);
