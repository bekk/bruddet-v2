import { defineField, defineType } from 'sanity';

export const hexagonButton = defineType({
  type: 'object',
  name: 'hexagonButton',
  title: 'Hexagonknapp på forside',

  fields: [
    defineField({
      name: 'shouldShowNewsletter',
      title:
        'Skal vise nyhetsbrev. Om man tar av denne kan man velge å lenke til et event eller en artikkel.',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'text',
      title: 'Tekst som står i hexagonknappen',
      type: 'string',
      description:
        "Legg til tittel på hexagon-knappen som vises på forsiden. OBS! det er opp til redaktøren og velge ord som passer med formen. Bruk understrek '_' mellom ord for å få ny linje. Eksempel: 'Program_slipp'",
      validation: (rule) => [rule.required().error('Hexagonknappen må ha en tekst')],
    }),
    defineField({
      name: 'linkToArticleOrEvent',
      title: 'Lenke til artikkel eller event',
      type: 'reference',
      to: [{ type: 'article' }, { type: 'event' }],
      hidden: ({ parent }) => parent?.shouldShowNewsletter !== false,
    }),
  ],
});
