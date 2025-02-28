import { defineField, defineType } from "sanity";

export const hexagonButton = defineType({
    type: "object",
    name: "hexagonButton",
    title: "Hexagonknapp på forside",

    fields: [
        defineField({
            name: "shouldShowNewsletter",
            title: "Skal vise nyhetsbrev. Om man tar av denne kan man velge å lenke til et event eller en artikkel.",
            type: "boolean",
            initialValue: true,
        }),
        defineField({
            name: "linkToArticleOrEvent",
            title: "Lenke til artikkel eller event",
            type: "reference",
            to: [{ type: "article" }, { type: "event" }],
            hidden: ({ parent }) => parent?.shouldShowNewsletter !== false,
        }),
    ],
});
