import { defineQuery } from 'next-sanity';

export const ARTICLEPAGE_QUERY = defineQuery(
  `*[_type=="article" && slug.current == $slug && language==$lang][0]{
      title, 
      slug, 
      ingress,
      metaTitle, 
      metaDescription, 
      galleryDisplayType,
      image,
      text[],  
      "tagTexts": text[style == "h2"]
      {"subtitle": children[0].text, _key},
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
        video,
        "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
          slug,
          language,
        }
    }`,
);
