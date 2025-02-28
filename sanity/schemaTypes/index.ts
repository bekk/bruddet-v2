import { type SchemaTypeDefinition } from 'sanity';
import { customImage, localizedString } from './customImage';
import { genre } from './genre';
import { hexagonButton } from './hexagonButton';
import { metaDescription } from './metaDescription';
import { metaTitle } from './metaTitle';
import { article } from './pages/article';
import { event } from './pages/event';
import { frontPage } from './pages/frontPage';
import { menuPage } from './pages/menuPage';
import { programPage } from './pages/programPage';
import { person } from './person';
import { content } from './portable-text/content';
import { expandableBlock } from './portable-text/expandableBlock';
import { expandableContent } from './portable-text/expandableContent';
import { faq } from './portable-text/faq';
import { googleMaps } from './portable-text/googleMaps';
import { review } from './portable-text/review';
import { video } from './portable-text/video';
import { roleGroup } from './roleGroup';

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
    review,
    video,
    roleGroup,
    metaTitle,
    metaDescription,
    expandableContent,
    person,
    customImage,
    localizedString,
    hexagonButton,
  ],
};
