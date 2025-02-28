import { defineQuery } from 'next-sanity';
import { imageProjectionAsReference } from './image';

export const ARTICLEPAGE_QUERY = defineQuery(
  `*[_type=="article" && slug.current == $slug && language==$lang][0]{
        title, 
        slug, 
        ingress,
        metaTitle, 
        metaDescription, 
        galleryDisplayType,
        image, 
        text[]{..., 
          _type=="video" => {
            title, muxVideo{asset->{playbackId}
            }
          }
      },  
      "tagTexts": text[style == "h2"]
      {"subtitle": children[0].text, _key},
        roleGroups[]{
          _type,
          _key,
          name, 
          persons[]{
          _type,
          ...,
          person->{
            name,
            ${imageProjectionAsReference}, 
            text,
            }
          }
        }, 
        video{
          title, 
          muxVideo{
            asset->{
              playbackId}
            }
        },
        'event': event->{slug},
        "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
          slug,
          language,
        }
    }`,
);
