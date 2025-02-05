import { defineQuery } from "next-sanity";
import { imageProjection } from "./image";

export const EVENT_QUERY = defineQuery(
    `
    *[_type == "event" && slug.current == $slug && language == $lang][0]{
      ...,
      genre->,
      ${imageProjection}
    }
  `
);