/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: 'sanity.imagePaletteSwatch';
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: 'sanity.imagePalette';
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: 'sanity.imageDimensions';
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: 'sanity.fileAsset';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type QuoteBomb = {
  _id: string;
  _type: 'quoteBomb';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  quote?: string;
  creditsSource?: string;
  creditsMedia?: string;
  placement?: 0 | 1;
};

export type Footer = {
  _id: string;
  _type: 'footer';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  language?: string;
  scrollingText?: string;
  hoverText?: string;
  link?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'event';
  };
  showNewsletter?: boolean;
};

export type ExpandableContent = Array<
  | {
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: 'span';
        _key: string;
      }>;
      style?: 'normal' | 'h3' | 'h4' | 'h5' | 'h6';
      listItem?: 'bullet' | 'number';
      markDefs?: Array<{
        href?: string;
        _type: 'link';
        _key: string;
      }>;
      level?: number;
      _type: 'block';
      _key: string;
    }
  | {
      title?: string;
      image?: {
        asset?: {
          _ref: string;
          _type: 'reference';
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt?: LocalizedString;
        credit?: string;
        _type: 'image';
      };
      _type: 'customImage';
      _key: string;
    }
  | {
      address?: Geopoint;
      _type: 'googleMaps';
      _key: string;
    }
>;

export type MetaDescription = string;

export type MetaTitle = string;

export type RoleGroup = {
  _type: 'roleGroup';
  name?: string;
  persons?: Array<{
    person?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'person';
    };
    occupation?: string;
    description?: string;
    _key: string;
  }>;
};

export type Video = {
  _id: string;
  _type: 'video';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  muxVideo?: MuxVideo;
};

export type Review = {
  _id: string;
  _type: 'review';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  type?: 'standard' | 'dice' | 'stars';
  score?: number;
  content?: string;
  source?: string;
  company?: string;
  link?: string;
  date?: string;
};

export type GoogleMaps = {
  _id: string;
  _type: 'googleMaps';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  address?: Geopoint;
};

export type Geopoint = {
  _type: 'geopoint';
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Faq = {
  _id: string;
  _type: 'faq';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  expandableBlocks?: Array<{
    title?: string;
    content?: ExpandableContent;
    _type: 'expandableBlock';
    _key: string;
  }>;
};

export type ExpandableBlock = {
  _id: string;
  _type: 'expandableBlock';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  content?: ExpandableContent;
};

export type Content = Array<
  | {
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: 'span';
        _key: string;
      }>;
      style?: 'normal' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
      listItem?: 'bullet' | 'number';
      markDefs?: Array<{
        href?: string;
        _type: 'link';
        _key: string;
      }>;
      level?: number;
      _type: 'block';
      _key: string;
    }
  | {
      title?: string;
      image?: {
        asset?: {
          _ref: string;
          _type: 'reference';
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt?: LocalizedString;
        credit?: string;
        _type: 'image';
      };
      _type: 'customImage';
      _key: string;
    }
  | {
      title?: string;
      muxVideo?: MuxVideo;
      _type: 'video';
      _key: string;
    }
  | {
      type?: 'standard' | 'dice' | 'stars';
      score?: number;
      content?: string;
      source?: string;
      company?: string;
      link?: string;
      date?: string;
      _type: 'review';
      _key: string;
    }
  | {
      title?: string;
      content?: ExpandableContent;
      _type: 'expandableBlock';
      _key: string;
    }
  | {
      quote?: string;
      creditsSource?: string;
      creditsMedia?: string;
      placement?: 0 | 1;
      _type: 'quoteBomb';
      _key: string;
    }
  | {
      address?: Geopoint;
      _type: 'googleMaps';
      _key: string;
    }
  | {
      title?: string;
      expandableBlocks?: Array<{
        title?: string;
        content?: ExpandableContent;
        _type: 'expandableBlock';
        _key: string;
      }>;
      _type: 'faq';
      _key: string;
    }
>;

export type MuxVideo = {
  _type: 'mux.video';
  asset?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'mux.videoAsset';
  };
};

export type MuxVideoAsset = {
  _type: 'mux.videoAsset';
  status?: string;
  assetId?: string;
  playbackId?: string;
  filename?: string;
  thumbTime?: number;
  data?: MuxAssetData;
};

export type MuxAssetData = {
  _type: 'mux.assetData';
  resolution_tier?: string;
  upload_id?: string;
  created_at?: string;
  id?: string;
  status?: string;
  max_stored_resolution?: string;
  passthrough?: string;
  encoding_tier?: string;
  master_access?: string;
  aspect_ratio?: string;
  duration?: number;
  max_stored_frame_rate?: number;
  mp4_support?: string;
  max_resolution_tier?: string;
  tracks?: Array<
    {
      _key: string;
    } & MuxTrack
  >;
  playback_ids?: Array<
    {
      _key: string;
    } & MuxPlaybackId
  >;
  static_renditions?: MuxStaticRenditions;
};

export type MuxStaticRenditions = {
  _type: 'mux.staticRenditions';
  status?: string;
  files?: Array<
    {
      _key: string;
    } & MuxStaticRenditionFile
  >;
};

export type MuxStaticRenditionFile = {
  _type: 'mux.staticRenditionFile';
  ext?: string;
  name?: string;
  width?: number;
  bitrate?: number;
  filesize?: number;
  height?: number;
};

export type MuxPlaybackId = {
  _type: 'mux.playbackId';
  id?: string;
  policy?: string;
};

export type MuxTrack = {
  _type: 'mux.track';
  id?: string;
  type?: string;
  max_width?: number;
  max_frame_rate?: number;
  duration?: number;
  max_height?: number;
};

export type TranslationMetadata = {
  _id: string;
  _type: 'translation.metadata';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  translations?: Array<
    {
      _key: string;
    } & InternationalizedArrayReferenceValue
  >;
  schemaTypes?: Array<string>;
  slug?: Slug;
};

export type InternationalizedArrayReferenceValue = {
  _type: 'internationalizedArrayReferenceValue';
  value?:
    | {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'event';
      }
    | {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'genre';
      }
    | {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'frontPage';
      }
    | {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'article';
      }
    | {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'menuPage';
      }
    | {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'programPage';
      };
};

export type ProgramPage = {
  _id: string;
  _type: 'programPage';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  language?: string;
  title?: string;
  metaTitle?: MetaTitle;
  metaDescription?: MetaDescription;
  links?: Array<{
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: 'event';
  }>;
  socialMediaText?: string;
};

export type MenuPage = {
  _id: string;
  _type: 'menuPage';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  language?: string;
  title?: string;
  metaTitle?: MetaTitle;
  metaDescription?: MetaDescription;
  links?: Array<{
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: 'article';
  }>;
  bottomLink?: {
    text?: string;
    link?:
      | {
          _ref: string;
          _type: 'reference';
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: 'event';
        }
      | {
          _ref: string;
          _type: 'reference';
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: 'article';
        };
  };
  socialMediaText?: string;
};

export type Article = {
  _id: string;
  _type: 'article';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  ingress?: string;
  language?: string;
  text?: Content;
  galleryDisplayType?: 1 | 2;
  image?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'customImage';
  };
  video?: {
    title?: string;
    muxVideo?: MuxVideo;
    _type: 'video';
  };
  event?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'event';
  };
  roleGroups?: Array<
    {
      _key: string;
    } & RoleGroup
  >;
  metaTitle?: MetaTitle;
  metaDescription?: MetaDescription;
};

export type FrontPage = {
  _id: string;
  _type: 'frontPage';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  image?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'customImage';
  };
  hexagon?: HexagonButton;
  language?: string;
  metaTitle?: MetaTitle;
  metaDescription?: MetaDescription;
};

export type HexagonButton = {
  _type: 'hexagonButton';
  shouldShowNewsletter?: boolean;
  text?: string;
  linkToArticleOrEvent?:
    | {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'article';
      }
    | {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'event';
      };
};

export type Event = {
  _id: string;
  _type: 'event';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  language?: string;
  genre?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'genre';
  };
  image?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'customImage';
  };
  ingress?: string;
  ticketInformation?: string;
  saleStartOption?: 'saleStarted' | 'saleStartKnown' | 'saleStartUnknown';
  saleStartDateTime?: string;
  dates?: Array<{
    date?: string;
    ticketUrl?: string;
    busTicketUrl?: string;
    eventTicketStatus?: 1 | 2 | 3;
    busTicketStatus?: 1 | 2 | 3;
    _key: string;
  }>;
  duration?: string;
  labels?: Array<string>;
  text?: Content;
  galleryDisplayType?: 1 | 2;
  roleGroups?: Array<
    {
      _key: string;
    } & RoleGroup
  >;
  metaTitle?: MetaTitle;
  metaDescription?: MetaDescription;
};

export type Person = {
  _id: string;
  _type: 'person';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  language?: string;
  image?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'customImage';
  };
  text?: string;
};

export type CustomImage = {
  _id: string;
  _type: 'customImage';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: LocalizedString;
    credit?: string;
    _type: 'image';
  };
};

export type LocalizedString = {
  _type: 'localizedString';
  nb?: string;
  en?: string;
};

export type SanityImageCrop = {
  _type: 'sanity.imageCrop';
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: 'sanity.imageHotspot';
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: 'sanity.imageAsset';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: 'sanity.assetSourceData';
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: 'sanity.imageMetadata';
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Genre = {
  _id: string;
  _type: 'genre';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  description?: string;
  language?: string;
};

export type Slug = {
  _type: 'slug';
  current?: string;
  source?: string;
};

export type InternationalizedArrayReference = Array<
  {
    _key: string;
  } & InternationalizedArrayReferenceValue
>;

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | QuoteBomb
  | Footer
  | ExpandableContent
  | MetaDescription
  | MetaTitle
  | RoleGroup
  | Video
  | Review
  | GoogleMaps
  | Geopoint
  | Faq
  | ExpandableBlock
  | Content
  | MuxVideo
  | MuxVideoAsset
  | MuxAssetData
  | MuxStaticRenditions
  | MuxStaticRenditionFile
  | MuxPlaybackId
  | MuxTrack
  | TranslationMetadata
  | InternationalizedArrayReferenceValue
  | ProgramPage
  | MenuPage
  | Article
  | FrontPage
  | HexagonButton
  | Event
  | Person
  | CustomImage
  | LocalizedString
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
  | Genre
  | Slug
  | InternationalizedArrayReference;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./sanity/lib/queries/articlePage.ts
// Variable: ARTICLEPAGE_QUERY
// Query: *[_type=="article" && slug.current == $slug && language==$lang][0]{        title,         slug,         ingress,        metaTitle,         metaDescription,         galleryDisplayType,        image,         text[]{...,           _type=="video" => {            title, muxVideo{asset->{playbackId}            }          }      },        "tagTexts": text[style == "h2"]      {"subtitle": children[0].text, _key},        roleGroups[]{          _type,          _key,          name,           persons[]{          _type,          ...,          person->{            name,            image->          {              "alt": select(                $lang == "en" => image.alt.en,                $lang == "nb" => image.alt.nb,              ),              "credit": image.credit,              "imageUrl": image.asset->url          }        ,             text,            }          }        },         video{          title,           muxVideo{            asset->{              playbackId}            }        },        'event': event->{slug},        "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{          slug,          language,        }    }
export type ARTICLEPAGE_QUERYResult = {
  title: string | null;
  slug: Slug | null;
  ingress: string | null;
  metaTitle: MetaTitle | null;
  metaDescription: MetaDescription | null;
  galleryDisplayType: 1 | 2 | null;
  image: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'customImage';
  } | null;
  text: Array<
    | {
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: 'span';
          _key: string;
        }>;
        style?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'normal';
        listItem?: 'bullet' | 'number';
        markDefs?: Array<{
          href?: string;
          _type: 'link';
          _key: string;
        }>;
        level?: number;
        _type: 'block';
        _key: string;
      }
    | {
        title?: string;
        image?: {
          asset?: {
            _ref: string;
            _type: 'reference';
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
          };
          hotspot?: SanityImageHotspot;
          crop?: SanityImageCrop;
          alt?: LocalizedString;
          credit?: string;
          _type: 'image';
        };
        _type: 'customImage';
        _key: string;
      }
    | {
        title?: string;
        content?: ExpandableContent;
        _type: 'expandableBlock';
        _key: string;
      }
    | {
        title?: string;
        expandableBlocks?: Array<{
          title?: string;
          content?: ExpandableContent;
          _type: 'expandableBlock';
          _key: string;
        }>;
        _type: 'faq';
        _key: string;
      }
    | {
        address?: Geopoint;
        _type: 'googleMaps';
        _key: string;
      }
    | {
        quote?: string;
        creditsSource?: string;
        creditsMedia?: string;
        placement?: 0 | 1;
        _type: 'quoteBomb';
        _key: string;
      }
    | {
        type?: 'dice' | 'standard' | 'stars';
        score?: number;
        content?: string;
        source?: string;
        company?: string;
        link?: string;
        date?: string;
        _type: 'review';
        _key: string;
      }
    | {
        title: string | null;
        muxVideo: {
          asset: null;
        } | null;
        _type: 'video';
        _key: string;
      }
  > | null;
  tagTexts: Array<{
    subtitle: string | null;
    _key: string;
  }> | null;
  roleGroups: Array<{
    _type: 'roleGroup';
    _key: string;
    name: string | null;
    persons: Array<{
      _type: null;
      person: {
        name: string | null;
        image: {
          alt: string | null;
          credit: string | null;
          imageUrl: string | null;
        } | null;
        text: string | null;
      } | null;
      occupation?: string;
      description?: string;
      _key: string;
    }> | null;
  }> | null;
  video: {
    title: string | null;
    muxVideo: {
      asset: null;
    } | null;
  } | null;
  event: {
    slug: Slug | null;
  } | null;
  _translations: Array<
    | {
        slug: null;
        language: string | null;
      }
    | {
        slug: Slug | null;
        language: string | null;
      }
    | null
  >;
} | null;

// Source: ./sanity/lib/queries/event.ts
// Variable: EVENT_QUERY
// Query: *[_type == "event" && slug.current == $slug && language == $lang][0]{      ...,      genre->,        image->          {              "alt": select(                $lang == "en" => image.alt.en,                $lang == "nb" => image.alt.nb,              ),              "credit": image.credit,              "imageUrl": image.asset->url          }        ,      text[]{        ...,        _type == "customImage" => {          "image":           {              "alt": select(                $lang == "en" => image.alt.en,                $lang == "nb" => image.alt.nb,              ),              "credit": image.credit,              "imageUrl": image.asset->url          }                },      },      roleGroups[]{        ...,        persons[]{          ...,          person->{            ...,            image->          {              "alt": select(                $lang == "en" => image.alt.en,                $lang == "nb" => image.alt.nb,              ),              "credit": image.credit,              "imageUrl": image.asset->url          }        ,          }        }      },      dates[]{        ...,      } | order(date asc)    }
export type EVENT_QUERYResult = {
  _id: string;
  _type: 'event';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  language?: string;
  genre: {
    _id: string;
    _type: 'genre';
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title?: string;
    description?: string;
    language?: string;
  } | null;
  image: {
    alt: string | null;
    credit: string | null;
    imageUrl: string | null;
  } | null;
  ingress?: string;
  ticketInformation?: string;
  saleStartOption?: 'saleStarted' | 'saleStartKnown' | 'saleStartUnknown';
  saleStartDateTime?: string;
  dates: Array<{
    date?: string;
    ticketUrl?: string;
    busTicketUrl?: string;
    eventTicketStatus?: 1 | 2 | 3;
    busTicketStatus?: 1 | 2 | 3;
    _key: string;
  }> | null;
  duration?: string;
  labels?: Array<string>;
  text: Array<
    | {
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: 'span';
          _key: string;
        }>;
        style?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'normal';
        listItem?: 'bullet' | 'number';
        markDefs?: Array<{
          href?: string;
          _type: 'link';
          _key: string;
        }>;
        level?: number;
        _type: 'block';
        _key: string;
      }
    | {
        title?: string;
        image: {
          alt: string | null;
          credit: string | null;
          imageUrl: string | null;
        };
        _type: 'customImage';
        _key: string;
      }
    | {
        title?: string;
        content?: ExpandableContent;
        _type: 'expandableBlock';
        _key: string;
      }
    | {
        title?: string;
        expandableBlocks?: Array<{
          title?: string;
          content?: ExpandableContent;
          _type: 'expandableBlock';
          _key: string;
        }>;
        _type: 'faq';
        _key: string;
      }
    | {
        address?: Geopoint;
        _type: 'googleMaps';
        _key: string;
      }
    | {
        quote?: string;
        creditsSource?: string;
        creditsMedia?: string;
        placement?: 0 | 1;
        _type: 'quoteBomb';
        _key: string;
      }
    | {
        type?: 'dice' | 'standard' | 'stars';
        score?: number;
        content?: string;
        source?: string;
        company?: string;
        link?: string;
        date?: string;
        _type: 'review';
        _key: string;
      }
    | {
        title?: string;
        muxVideo?: MuxVideo;
        _type: 'video';
        _key: string;
      }
  > | null;
  galleryDisplayType?: 1 | 2;
  roleGroups: Array<{
    _key: string;
    _type: 'roleGroup';
    name?: string;
    persons: Array<{
      person: {
        _id: string;
        _type: 'person';
        _createdAt: string;
        _updatedAt: string;
        _rev: string;
        name?: string;
        language?: string;
        image: {
          alt: string | null;
          credit: string | null;
          imageUrl: string | null;
        } | null;
        text?: string;
      } | null;
      occupation?: string;
      description?: string;
      _key: string;
    }> | null;
  }> | null;
  metaTitle?: MetaTitle;
  metaDescription?: MetaDescription;
} | null;

// Source: ./sanity/lib/queries/footer.ts
// Variable: FOOTER_QUERY
// Query: *[_type=="footer" && language==$lang][0] {..., "link": link->slug.current}
export type FOOTER_QUERYResult = {
  _id: string;
  _type: 'footer';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  language?: string;
  scrollingText?: string;
  hoverText?: string;
  link: string | null;
  showNewsletter?: boolean;
} | null;

// Source: ./sanity/lib/queries/frontPage.ts
// Variable: FRONTPAGE_QUERY
// Query: *[_type == "frontPage" && language == $lang][0]{      ...,      hexagon {        ...,         linkToArticleOrEvent -> {...,},      },      image->          {              "alt": select(                $lang == "en" => image.alt.en,                $lang == "nb" => image.alt.nb,              ),              "credit": image.credit,              "imageUrl": image.asset->url          }        ,    }
export type FRONTPAGE_QUERYResult = {
  _id: string;
  _type: 'frontPage';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  image: {
    alt: string | null;
    credit: string | null;
    imageUrl: string | null;
  } | null;
  hexagon: {
    _type: 'hexagonButton';
    shouldShowNewsletter?: boolean;
    text?: string;
    linkToArticleOrEvent:
      | {
          _id: string;
          _type: 'article';
          _createdAt: string;
          _updatedAt: string;
          _rev: string;
          title?: string;
          slug?: Slug;
          ingress?: string;
          language?: string;
          text?: Content;
          galleryDisplayType?: 1 | 2;
          image?: {
            _ref: string;
            _type: 'reference';
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: 'customImage';
          };
          video?: {
            title?: string;
            muxVideo?: MuxVideo;
            _type: 'video';
          };
          event?: {
            _ref: string;
            _type: 'reference';
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: 'event';
          };
          roleGroups?: Array<
            {
              _key: string;
            } & RoleGroup
          >;
          metaTitle?: MetaTitle;
          metaDescription?: MetaDescription;
        }
      | {
          _id: string;
          _type: 'event';
          _createdAt: string;
          _updatedAt: string;
          _rev: string;
          title?: string;
          slug?: Slug;
          language?: string;
          genre?: {
            _ref: string;
            _type: 'reference';
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: 'genre';
          };
          image?: {
            _ref: string;
            _type: 'reference';
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: 'customImage';
          };
          ingress?: string;
          ticketInformation?: string;
          saleStartOption?: 'saleStarted' | 'saleStartKnown' | 'saleStartUnknown';
          saleStartDateTime?: string;
          dates?: Array<{
            date?: string;
            ticketUrl?: string;
            busTicketUrl?: string;
            eventTicketStatus?: 1 | 2 | 3;
            busTicketStatus?: 1 | 2 | 3;
            _key: string;
          }>;
          duration?: string;
          labels?: Array<string>;
          text?: Content;
          galleryDisplayType?: 1 | 2;
          roleGroups?: Array<
            {
              _key: string;
            } & RoleGroup
          >;
          metaTitle?: MetaTitle;
          metaDescription?: MetaDescription;
        }
      | null;
  } | null;
  language?: string;
  metaTitle?: MetaTitle;
  metaDescription?: MetaDescription;
} | null;

// Source: ./sanity/lib/queries/image.ts
// Variable: imageProjection
// Query: {              "alt": select(                $lang == "en" => image.alt.en,                $lang == "nb" => image.alt.nb,              ),              "credit": image.credit,              "imageUrl": image.asset->url          }
export type ImageProjectionResult = {
  alt: null;
  credit: never;
  imageUrl: never;
};

// Source: ./sanity/lib/queries/menuPage.ts
// Variable: MENUPAGE_QUERY
// Query: *[_type == "menuPage" && language == $lang][0] {    metaTitle,     metaDescription,    title,    links[]->{      title,      image->          {              "alt": select(                $lang == "en" => image.alt.en,                $lang == "nb" => image.alt.nb,              ),              "credit": image.credit,              "imageUrl": image.asset->url          }        ,      slug,      _type,      text[style=="h2"] {        defined(_key) => {_key},        "subtitle": children[0].text,        "slug": ^.slug.current      }[defined(subtitle)],    },    socialMediaText,    bottomLink {      text,      link->{      _type,      slug      },    }  }
export type MENUPAGE_QUERYResult = {
  metaTitle: MetaTitle | null;
  metaDescription: MetaDescription | null;
  title: string | null;
  links: Array<{
    title: string | null;
    image: {
      alt: string | null;
      credit: string | null;
      imageUrl: string | null;
    } | null;
    slug: Slug | null;
    _type: 'article';
    text: Array<{
      _key: string;
      subtitle: string | null;
      slug: string | null;
    }> | null;
  }> | null;
  socialMediaText: string | null;
  bottomLink: {
    text: string | null;
    link:
      | {
          _type: 'article';
          slug: Slug | null;
        }
      | {
          _type: 'event';
          slug: Slug | null;
        }
      | null;
  } | null;
} | null;

// Source: ./sanity/lib/queries/programPage.ts
// Variable: PROGRAMPAGE_QUERY
// Query: *[_type=="programPage" && language == $lang][0] {    metaTitle,    metaDescription,    title,    socialMediaText,    links[]->{        title,        slug,        image->          {              "alt": select(                $lang == "en" => image.alt.en,                $lang == "nb" => image.alt.nb,              ),              "credit": image.credit,              "imageUrl": image.asset->url          }        ,        dates    } }
export type PROGRAMPAGE_QUERYResult = {
  metaTitle: MetaTitle | null;
  metaDescription: MetaDescription | null;
  title: string | null;
  socialMediaText: string | null;
  links: Array<{
    title: string | null;
    slug: Slug | null;
    image: {
      alt: string | null;
      credit: string | null;
      imageUrl: string | null;
    } | null;
    dates: Array<{
      date?: string;
      ticketUrl?: string;
      busTicketUrl?: string;
      eventTicketStatus?: 1 | 2 | 3;
      busTicketStatus?: 1 | 2 | 3;
      _key: string;
    }> | null;
  }> | null;
} | null;

// Query TypeMap
import '@sanity/client';
declare module '@sanity/client' {
  interface SanityQueries {
    '*[_type=="article" && slug.current == $slug && language==$lang][0]{\n        title, \n        slug, \n        ingress,\n        metaTitle, \n        metaDescription, \n        galleryDisplayType,\n        image, \n        text[]{..., \n          _type=="video" => {\n            title, muxVideo{asset->{playbackId}\n            }\n          }\n      },  \n      "tagTexts": text[style == "h2"]\n      {"subtitle": children[0].text, _key},\n        roleGroups[]{\n          _type,\n          _key,\n          name, \n          persons[]{\n          _type,\n          ...,\n          person->{\n            name,\n            image->\n          {\n              "alt": select(\n                $lang == "en" => image.alt.en,\n                $lang == "nb" => image.alt.nb,\n              ),\n              "credit": image.credit,\n              "imageUrl": image.asset->url\n          }\n        , \n            text,\n            }\n          }\n        }, \n        video{\n          title, \n          muxVideo{\n            asset->{\n              playbackId}\n            }\n        },\n        \'event\': event->{slug},\n        "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{\n          slug,\n          language,\n        }\n    }': ARTICLEPAGE_QUERYResult;
    '\n    *[_type == "event" && slug.current == $slug && language == $lang][0]{\n      ...,\n      genre->,\n        image->\n          {\n              "alt": select(\n                $lang == "en" => image.alt.en,\n                $lang == "nb" => image.alt.nb,\n              ),\n              "credit": image.credit,\n              "imageUrl": image.asset->url\n          }\n        ,\n      text[]{\n        ...,\n        _type == "customImage" => {\n          "image": \n          {\n              "alt": select(\n                $lang == "en" => image.alt.en,\n                $lang == "nb" => image.alt.nb,\n              ),\n              "credit": image.credit,\n              "imageUrl": image.asset->url\n          }\n        \n        },\n      },\n      roleGroups[]{\n        ...,\n        persons[]{\n          ...,\n          person->{\n            ...,\n            image->\n          {\n              "alt": select(\n                $lang == "en" => image.alt.en,\n                $lang == "nb" => image.alt.nb,\n              ),\n              "credit": image.credit,\n              "imageUrl": image.asset->url\n          }\n        ,\n          }\n        }\n      },\n      dates[]{\n        ...,\n      } | order(date asc)\n    }\n  ': EVENT_QUERYResult;
    '*[_type=="footer" && language==$lang][0] {..., "link": link->slug.current}': FOOTER_QUERYResult;
    '\n    *[_type == "frontPage" && language == $lang][0]{\n      ...,\n      hexagon {\n        ..., \n        linkToArticleOrEvent -> {...,},\n      },\n      image->\n          {\n              "alt": select(\n                $lang == "en" => image.alt.en,\n                $lang == "nb" => image.alt.nb,\n              ),\n              "credit": image.credit,\n              "imageUrl": image.asset->url\n          }\n        ,\n    }\n  ': FRONTPAGE_QUERYResult;
    '\n          {\n              "alt": select(\n                $lang == "en" => image.alt.en,\n                $lang == "nb" => image.alt.nb,\n              ),\n              "credit": image.credit,\n              "imageUrl": image.asset->url\n          }\n        ': ImageProjectionResult;
    '*[_type == "menuPage" && language == $lang][0] {\n    metaTitle, \n    metaDescription,\n    title,\n    links[]->{\n      title,\n      image->\n          {\n              "alt": select(\n                $lang == "en" => image.alt.en,\n                $lang == "nb" => image.alt.nb,\n              ),\n              "credit": image.credit,\n              "imageUrl": image.asset->url\n          }\n        ,\n      slug,\n      _type,\n      text[style=="h2"] {\n        defined(_key) => {_key},\n        "subtitle": children[0].text,\n        "slug": ^.slug.current\n      }[defined(subtitle)],\n    },\n    socialMediaText,\n    bottomLink {\n      text,\n      link->{\n      _type,\n      slug\n      },\n    }\n  }': MENUPAGE_QUERYResult;
    '*[_type=="programPage" && language == $lang][0] {\n    metaTitle,\n    metaDescription,\n    title,\n    socialMediaText,\n    links[]->{\n        title,\n        slug,\n        image->\n          {\n              "alt": select(\n                $lang == "en" => image.alt.en,\n                $lang == "nb" => image.alt.nb,\n              ),\n              "credit": image.credit,\n              "imageUrl": image.asset->url\n          }\n        ,\n        dates\n    }\n }': PROGRAMPAGE_QUERYResult;
  }
}
