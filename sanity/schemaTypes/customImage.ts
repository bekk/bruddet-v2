import { defineField, defineType } from "sanity";

export const customImage =
    defineField({
        name: "customImage",
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