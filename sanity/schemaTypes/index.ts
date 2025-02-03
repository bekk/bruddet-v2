import { type SchemaTypeDefinition } from 'sanity'
import { frontPage } from './pages/frontPage'
import { customImage } from './customImage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    frontPage,
    customImage,
  ],
}
