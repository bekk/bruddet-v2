import { type SchemaTypeDefinition } from 'sanity'
import { frontPage } from './pages/frontPage'
import { event } from './pages/event'
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
import { article } from './pages/article'
import { menuPage } from './pages/menuPage'
import { programPage } from './pages/programPage'
import { customImage, localizedString } from './customImage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    frontPage,
    event,
    article,
    menuPage,
    programPage,
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
    customImage,
    localizedString,
  ],
}
