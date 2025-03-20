import { defineField, defineType } from 'sanity';
import { EditIcon } from '@sanity/icons';

export const review = defineType({
  name: 'review',
  title: 'Anmeldelse',
  type: 'object',
  icon: EditIcon,
  fields: [
    defineField({
      title: 'Type anmeldelse',
      name: 'type',
      type: 'string',
      initialValue: 'standard',
      options: {
        list: [
          { title: 'Standard', value: 'standard' },
          { title: 'Terning', value: 'dice' },
          { title: 'Stjerne', value: 'stars' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      validation: (rule) => [rule.required().error('Må velge type anmeldelse')],
    }),
    defineField({
      name: 'score',
      type: 'number',
      title: 'Score',
      description: 'Dette trenger du bare velge hvis anmeldelse har stjerner eller terning',
      validation: (rule) => [rule.min(1).max(6).error(`Score må være mellom 1 og 6`)],
    }),
    defineField({
      name: 'content',
      type: 'text',
      title: 'Innhold',
      validation: (rule) => [
        rule
          .required()
          .min(2)
          .error(`Innhold er påkrevd for å poste et sitat, minimum lengde på 2 tegn`),
        rule.required().max(100).warning(`Anbefaler kortere innhold.`),
      ],
    }),
    defineField({
      name: 'source',
      type: 'string',
      title: 'Kilde',
      placeholder: 'e.g. Ola Nordmann',
    }),
    defineField({
      name: 'company',
      type: 'string',
      title: 'Medie',
      placeholder: 'e.g. Aftenposten',
    }),
    defineField({
      name: 'link',
      type: 'url',
      title: 'Lenke til anmeldelse',
    }),
    defineField({
      name: 'date',
      type: 'datetime',
      title: 'Dato for sitat',
    }),
  ],
});
