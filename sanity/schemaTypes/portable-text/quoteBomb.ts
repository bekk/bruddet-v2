import { CommentIcon } from '@sanity/icons';
import { defineField } from 'sanity';

const PLACEMENTS = [
  {
    title: 'Venstre',
    value: 0,
  },
  {
    title: 'Høyre',
    value: 1,
  },
];

export const quoteBomb = {
  name: 'quoteBomb',
  title: 'Sitatbombe',
  type: 'document',
  icon: CommentIcon,
  fields: [
    defineField({
      title: 'Sitat',
      name: 'quote',
      type: 'text',
      description:
        'OBS: redaktør må selv passe på ord-deling for at det skal se bra ut, da figuren ikke tilpasser seg tekst.',
      validation: (rule) => [rule.max(100).warning('Anbefaler kortere quote.')],
    }),
    defineField({
      title: 'Kreditering - person',
      name: 'creditsSource',
      type: 'string',
    }),
    defineField({
      title: 'Kreditering - media/rolle',
      name: 'creditsMedia',
      type: 'string',
    }),
    defineField({
      title: 'Plassering',
      name: 'placement',
      description:
        'Velg om sitatbombe skal vises med tekst i venstre kolonne, eller som en del av bildegalleriet i høyre kolonne.',
      type: 'number',
      options: {
        list: PLACEMENTS.map(({ title, value }) => ({ title, value })),
        layout: 'radio',
      },
      initialValue: PLACEMENTS[0].value,
    }),
  ],
  preview: {
    select: {
      title: 'quote',
    },
    prepare: ({ title }: { title: string }) => {
      return {
        title: `Sitatbombe med tekst: ${title}`,
      };
    },
  },
};
