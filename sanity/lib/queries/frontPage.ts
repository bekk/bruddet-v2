import { defineQuery } from "next-sanity";
import { imageProjection } from "./image";

export const FRONTPAGE_QUERY = defineQuery(
    `
    *[_type == "frontPage"][0]{
      ...,
      ${imageProjection}
    }
  `
);
