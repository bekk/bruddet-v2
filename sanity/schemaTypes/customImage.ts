import { defineField, defineType } from "sanity";

export const customImage = defineType({
    type: "document",
    name: "customImage",
    title: "Bilde",

    fields: [
    defineField({
        name: "image",
        title: "Bilde",
        type: "image",
        validation: (rule) => [
            rule.required().error("Bilde er påkrevd"),
        ],
        fields: [
            defineField({
                name: "alt",
                title: "Alternativ tekst",
                type: "string",
                validation: (rule) => [
                    rule.required().error("Alternativ tekst er påkrevd"),
                ],
            }),
            defineField({
                title: "Bildekreditering",
                name: "credit",
                type: "string",
            }),
        ]
    })
    ],
});