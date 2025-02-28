import { defineField } from "sanity";

export const footer = defineField({
    name: "footer",
    title: "Footer",
    description: "Legg til tekst og lenke på banneret i footeren på forsiden.",
    type: "document",
    fields: [
        defineField({
            name: "language",
            type: "string",
            readOnly: true,
        }),
        defineField({
            name: "scrollingText",
            title: "Tekst",
            type: "string",
            validation: (Rule: any) => Rule.required(),
        }),
        defineField({
            name: "hoverText",
            title: "Hover tekst",
            type: "string",
            validation: (Rule: any) => Rule.required(),
        }),
        defineField({
            name: "link",
            title: "Lenke til arrangement",
            type: "reference",
            to: [{ type: "event" }],
            options: {
                filter: ({ document }) => {
                    if (!document?.language) {
                        return {
                            filter: "",
                            params: {},
                        };
                    }
                    return {
                        filter: "language == $lang",
                        params: { lang: document.language },
                    };
                },
                disableNew: false,
            },
        }),
        defineField({
            name: "showNewsletter",
            title: "Skal vise nyhetsbrev",
            type: "boolean",
            initialValue: true,
        }),
    ],
});
