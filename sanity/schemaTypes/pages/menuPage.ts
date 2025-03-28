import { defineField, defineType } from 'sanity';

export const menuPage = defineType({
  name: 'menuPage',
  title: 'Menyside',
  type: 'document',
  groups: [{ title: 'SEO', name: 'seo' }],
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: false,
    }),
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
      validation: (rule) => [
        rule.max(100).warning('Anbefaler kortere tittel.'),
        rule.required().min(1).error('Tittel er påkrevd'),
      ],
    }),
    defineField({
      name: 'metaTitle',
      title: 'SEO tittel',
      type: 'metaTitle',
      initialValue: 'Meny',
      group: 'seo',
      validation: (rule) => [rule.required().error('Må ha SEO tittel')],
    }),
    defineField({
      name: 'metaDescription',
      title: 'SEO beskrivelse',
      type: 'metaDescription',
      initialValue: 'Oversikt over menysider',
      group: 'seo',
      validation: (rule) => [rule.required().error('Må ha SEO beskrivelse')],
    }),
    defineField({
      name: 'links',
      title: 'Undersider',
      type: 'array',
      description: 'Velg hvilke undersider, av typen Artikler, som skal vises på Menysiden',
      of: [
        {
          type: 'reference',
          to: [{ type: 'article' }],
          options: {
            filter: ({ document }) => {
              if (!document?.language) {
                return {};
              }
              return {
                filter: 'language == $lang',
                params: { lang: document.language },
              };
            },
          },
        },
      ],
      options: {
        documentInternationalization: {
          exclude: true,
        },
      },
    }),
    defineField({
      name: 'bottomLink',
      title: 'Knapp i bunnen',
      type: 'object',
      description: 'Legg til tekst og lenke på bunnen av menyen.',
      fields: [
        {
          name: 'text',
          title: 'Tekst',
          type: 'string',
        },
        {
          name: 'link',
          title: 'Link',
          type: 'reference',
          to: [{ type: 'event' }, { type: 'article' }],
          options: {
            filter: ({ document }) => {
              return {
                filter: 'language == $lang',
                params: { lang: document.language },
              };
            },
            documentInternationalization: {
              exclude: true,
            },
          },
        },
      ],
    }),
    defineField({
      name: 'socialMediaText',
      title: 'Sosiale medier',
      description: 'Legg til tekst på sosiale medier blokk',
      type: 'string',
    }),
  ],
});
