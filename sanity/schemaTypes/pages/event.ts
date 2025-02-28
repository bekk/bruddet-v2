import { CalendarIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';
import { isUniqueOtherThanLanguage } from '@/sanity/documentInternationalizationConfig';

type ParentType = {
  saleStartOption?: 'saleStartKnown' | 'saleStartUnknown';
  [key: string]: unknown;
};

export const event = defineType({
  name: 'event',
  title: 'Forestilling',
  type: 'document',
  fieldsets: [
    {
      name: 'saleStart',
      title: 'Salgsstart',
    },
  ],
  groups: [
    { title: 'Innhold', name: 'content' },
    { title: 'Visuelt', name: 'visual' },
    { title: 'SEO', name: 'seo' },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
      group: 'content',
      validation: (rule) => [
        rule
          .required()
          .min(2)
          .error(`Tittel er påkrevd for å poste et arrangement, minimum lengde på 2 tegn.`),
        rule.max(100).warning('Anbefaler kortere tittel.'),
      ],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', isUnique: isUniqueOtherThanLanguage },
      hidden: ({ document }) => !document?.title,
      description: 'Url: bruddet.no/xxx',
      group: 'seo',
      validation: (rule) => [rule.required().error('Må ha en slug')],
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'genre',
      title: 'Sjanger',
      type: 'reference',
      to: [{ type: 'genre' }],
      group: 'content',
      validation: (rule) => rule.required().error('Må ha en sjanger'),
      options: {
        filter: ({ document }) => {
          if (!document?.language) {
            return {
              filter: '',
              params: {},
            };
          }
          return {
            filter: 'language == $lang',
            params: { lang: document.language },
          };
        },
        disableNew: false,
      },
    }),
    defineField({
      name: 'image',
      title: 'Bilde',
      type: 'reference',
      group: 'visual',
      to: [{ type: 'customImage' }],
    }),
    defineField({
      name: 'ingress',
      title: 'Ingress',
      type: 'string',
      group: 'content',
      validation: (rule) => [
        rule.required().min(2).error('Ingress er påkrevd.'),
        rule.max(200).warning('Anbefaler kortere ingress.'),
      ],
    }),
    {
      name: 'ticketInformation',
      title: 'Informasjon om billetter',
      description: 'Her kan du legge inn informasjon om f.eks. bussbilletter',
      type: 'string',
      group: 'content',
    },
    {
      name: 'saleStartOption',
      title: 'Vet du når salget starter?',
      type: 'string',
      fieldset: 'saleStart',
      options: {
        list: [
          { title: 'Har startet', value: 'saleStarted' },
          { title: 'Ja', value: 'saleStartKnown' },
          { title: 'Nei', value: 'saleStartUnknown' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'saleStarted',
      group: 'content',
    },
    defineField({
      name: 'saleStartDateTime',
      title: 'Når billettsalget starter',
      description:
        'Her kan du legge inn data og tidspunkt for når billettsalget starter. Om det står tomt vil kjøpsknappen fungere når eventet blir publisert.',
      type: 'datetime',
      fieldset: 'saleStart',
      group: 'content',
      hidden: ({ parent }: { parent: ParentType }) => parent?.saleStartOption !== 'saleStartKnown',
    }),
    defineField({
      name: 'dates',
      title: 'Datoer',
      description:
        'Datoer for forestilling, med billettlink. Spilledatoer blir vist i tekstboksene (vaskelappene).',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'object',
          icon: CalendarIcon,

          fields: [
            {
              name: 'date',
              type: 'datetime',
              title: 'Spilledato',
              validation: (rule) => rule.required().error('Dato er påkrevd.'),
            },
            {
              name: 'ticketUrl',
              type: 'url',
              title: 'Link til forestillingsbillett',
              validation: (rule) => [rule.required().error('URL er påkrevd.')],
            },
            {
              name: 'busTicketUrl',
              type: 'url',
              title: 'Link til bussbillett',
            },
            {
              name: 'eventTicketStatus',
              title: 'Status billetter (forestilling) igjen',
              type: 'number',
              initialValue: 1,
              options: {
                list: [
                  { title: 'Normalt', value: 1 },
                  { title: 'Få billetter igjen', value: 2 },
                  { title: 'Utsolgt', value: 3 },
                ],
                layout: 'radio',
                direction: 'horizontal',
              },
              validation: (rule) => [rule.required().error('Status er påkrevd.')],
            },
            {
              name: 'busTicketStatus',
              title: 'Status billetter (buss) igjen',
              type: 'number',
              initialValue: 1,
              options: {
                list: [
                  { title: 'Normalt', value: 1 },
                  { title: 'Få billetter igjen', value: 2 },
                  { title: 'Utsolgt', value: 3 },
                ],
                layout: 'radio',
                direction: 'horizontal',
              },
            },
          ],
        },
      ],
      validation: (rule) => [rule.required().min(1).error('Minst en dato er påkrevd.')],
    }),
    defineField({
      name: 'duration',
      title: 'Varighet',
      type: 'string',
      placeholder: 'e.g 1 time og 30 minutter',
      group: 'content',
      description: 'Varighet på forestillingen. Blir vist i tekstboksene (vaskelappene).',
    }),
    defineField({
      name: 'labels',
      title: 'Vaskelapper',
      description:
        'Fritekstfelt for tagger som kommer i bokser under tittel. Kan inneholde stikkord det er ønske om å fremheve, f.eks. pauser.',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'string',
          validation: (rule) => [
            rule.required().min(2).error(`Minimum lengde 2 tegn`),
            rule.max(20).warning('Anbefaler kortere tekst.'),
          ],
        },
      ],
    }),
    defineField({
      name: 'text',
      title: 'Innhold',
      type: 'content',
      group: 'content',
      description: 'Her kan du legge inn tekst, bilder, video, sitat og anmeldelser',
      options: {
        documentInternationalization: {
          exclude: true,
        },
      },
    }),
    defineField({
      name: 'galleryDisplayType',
      title: 'Visning av bilder',
      type: 'number',
      initialValue: 1,
      group: 'content',
      description:
        'Her kan du bestemme om bildene i høyre kolonne skal skiftes ut ved scroll (som er det anbefalte), eller hvis alle bildene skal vises under hverandre hele tiden.',
      options: {
        list: [
          {
            title: 'Vis ett bilde av gangen (skifter ved scrolling) - anbefalt',
            value: 1,
          },
          {
            title: 'Vis alle bilder samtidig, plassert under hverandre',
            value: 2,
          },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    }),
    defineField({
      name: 'roleGroups',
      title: 'Roller',
      description: 'Lag egne rollegrupper',
      type: 'array',
      of: [{ type: 'roleGroup' }],
      group: 'content',
      options: {
        documentInternationalization: {
          exclude: true,
        },
      },
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
