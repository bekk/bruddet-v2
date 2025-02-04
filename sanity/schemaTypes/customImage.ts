import { defineField, defineType } from "sanity";
import { languages } from "../documentInternationalizationConfig";

export const localizedString = defineType({
    name: 'localizedString',
    title: 'Localized String',
    type: 'object',
    fieldsets: [
      {
        title: 'Translations',
        name: 'translations',
        options: {collapsible: true, collapsed: false},
      },
    ],
    fields: languages.map((lang) =>
      defineField({
        name: lang.id,
        title: lang.title,
        type: 'string',
        fieldset: lang.isDefault ? undefined : 'translations',
      })
    ),
  })

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
                title: "Alternativ tekst",
                name: "alt",
                type: "localizedString",
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