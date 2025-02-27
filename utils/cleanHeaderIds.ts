import { stegaClean } from "next-sanity";

export const cleanHeaderIds = (header: string) => {
    return stegaClean(header).replaceAll(" ", "-").toLowerCase();
};
