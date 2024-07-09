import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'itemName',
      type: 'text',
      maxLength: 50,
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      maxLength: 300,
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
  ],
}
