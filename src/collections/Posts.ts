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
      type: 'text',
      maxLength: 75,
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'condition',
      type: 'text',
      maxLength: 50,
      required: true,
    },
    {
      name: 'size',
      type: 'text',
      maxLength: 25,
      required: true,
    },
    {
      name: 'detailedDescription',
      type: 'textarea',
      maxLength: 500,
      required: true,
    },
  ],
}
