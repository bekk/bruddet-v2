import { ImageIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const customImage = defineType({
  type: 'image',
  name: 'customImage',
  title: 'Bilde',
  icon: ImageIcon,
  options: {
    hotspot: true,
  },

  fields: [
    defineField({
      title: 'Alternativ tekst',
      name: 'alt',
      type: 'string',
    }),
    defineField({
      title: 'Bildekreditering',
      name: 'credit',
      type: 'string',
    }),
  ],
});
