import { type SchemaTypeDefinition } from 'sanity'
import { frontPage } from './pages/frontPage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    frontPage
  ],
}
