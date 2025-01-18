import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from '@/sanity/products'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema],
}
