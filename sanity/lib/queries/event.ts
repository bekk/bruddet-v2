import { defineQuery } from 'next-sanity';
import { imageProjection, imageProjectionAsReference } from './image';

export const EVENT_QUERY = defineQuery(
  `
    *[_type == "event" && slug.current == $slug && language == $lang][0]{
      ...,
      genre->,
      ${imageProjectionAsReference},
      text[]{
        ...,
        _type == "customImage" => {
          ${imageProjection},
        },
      },
       roleGroups[]{
        ...,
        persons[]{
          ...,
          person->{
            ...,
            ${imageProjectionAsReference},
          }
        }
      }
      

    }
  `,
);
