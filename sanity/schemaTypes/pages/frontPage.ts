import { defineField, defineType } from "sanity";

export const frontPage = defineType({
    name: "frontPage",
    title: "Forside",
    type: "document",
    groups: [
      { title: "Standard visning", name: "content", default: true },
      { title: "Hovedforestilling", name: "event" },
      { title: "SEO", name: "seo" },
    ],
    fields: [
      defineField({
        name: "title",
        title: "Tittel",
        type: "string",
        group: "content",
        validation: (rule) => [
          rule.max(100).warning("Må ha en kortere tittel."),
          rule.required().min(1).error("Tittel er påkrevd"),
        ],
      }),
      defineField({
        name: "image",
        title: "Bilde",
        type: "image",
        group: "content",
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
        ],
      }),
      defineField({
        name: "language",
        type: "string",
        readOnly: true,
        hidden: true,
      }),
    ],
  });