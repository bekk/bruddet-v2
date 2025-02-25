import { defineField, defineType } from "sanity";

export const genre = defineType({
    name: "genre",
    title: "Sjanger",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Tittel",
            type: "string",
            validation: (rule) => rule.required().error("Tittel er påkrevd"),
        },
        {
            name: "description",
            title: "Sjangerbeskrivelse",
            type: "text",
            description: "Valgfri beskrivelse av sjangeren",
        },
        defineField({
            name: "language",
            type: "string",
            readOnly: true,
            hidden: true,
        }),
    ],
});
