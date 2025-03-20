import { defineField, defineType } from 'sanity';

export const frontPage = defineType({
  name: 'frontPage',
  title: 'Forside',
  type: 'document',
  groups: [
    { title: 'Standard visning', name: 'content', default: true },
    { title: 'Hovedforestilling', name: 'event' },
    { title: 'SEO', name: 'seo' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
      group: 'content',
      validation: (rule) => [
        rule.max(100).warning('Må ha en kortere tittel.'),
        rule.required().min(1).error('Tittel er påkrevd'),
      ],
    }),
    defineField({
      name: 'image',
      title: 'Bilde',
      type: 'customImage',
    }),
    defineField({
      name: 'hexagon',
      title: 'Hexagonknapp',
      type: 'hexagonButton',
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: false,
    }),
    defineField({
      name: 'metaTitle',
      title: 'SEO tittel',
      type: 'metaTitle',
      group: 'seo',
      validation: (rule) => [rule.required().error('Må ha SEO tittel')],
    }),
    defineField({
      name: 'metaDescription',
      title: 'SEO beskrivelse',
      type: 'metaDescription',
      group: 'seo',
      validation: (rule) => [rule.required().error('Må ha SEO beskrivelse')],
    }),
  ],
});
