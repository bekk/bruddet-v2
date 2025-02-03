import { type SchemaTypeDefinition } from 'sanity'
import { frontPage } from './pages/frontPage'
import { eventPage } from './pages/eventPage'
import { genre } from './genre'
import { content } from './portable-text/content'
import { expandableBlock } from './portable-text/expandableBlock'
import { faq } from './portable-text/faq'
import { googleMaps } from './portable-text/googleMaps'
import { quoteBomb } from './portable-text/quoteBomb'
import { review } from './portable-text/review'
import { video } from './portable-text/video'
import { roleGroup } from './roleGroup'
import { metaTitle } from './metaTitle'
import { metaDescription } from './metaDescription'
import { expandableContent } from './portable-text/expandableContent'
import { person } from './person'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    frontPage,
    eventPage,
    genre,
    content,
    expandableBlock,
    faq,
    googleMaps,
    quoteBomb,
    review,
    video,
    roleGroup,
    metaTitle,
    metaDescription,
    expandableContent,
    person,
  ],
}
