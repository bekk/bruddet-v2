import { defineField, defineType } from 'sanity';

export const programPage = defineType({
  name: 'programPage',
  title: 'Programside',
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
      group: 'seo',
      initialValue: 'Oversikt over menysider',
      validation: (rule) => [rule.required().error('Må ha SEO beskrivelse')],
    }),
    defineField({
      name: 'links',
      title: 'Forestillinger',
      description: 'Velg forestillinger som skal vises på programsiden',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'event' }],
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
      name: 'socialMediaText',
      title: 'Sosiale medier',
      description: 'Legg til tekst på sosiale medier blokk',
      type: 'string',
    }),
  ],
});
