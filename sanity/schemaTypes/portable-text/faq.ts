import { defineField } from "sanity";

export const faq = {
    name: "faq",
    title: "FAQ",
    description: "Her kan du legge inn FAQ-spørsmål og svar",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Tittel",
        }),
        defineField({
            name: "expandableBlocks",
            title: "Ekspanderbar blokk",
            type: "array",
            of: [{ type: "expandableBlock" }],
        }),
    ],
};
