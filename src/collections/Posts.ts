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
      name: 'shortDescription',
      type: 'text',
      maxLength: 75,
      required: true,
    },
    {
      name: 'price',
      type: 'number',
    },
    {
      name: 'condition',
      type: 'select',
      hasMany: false,
      admin: {
        isClearable: true,
        isSortable: true,
      },
      options: [
        {
          label: 'Neuwertig',
          value: 'Neuwertig',
        },
        {
          label: 'Sehr gut',
          value: 'Sehr gut',
        },
        { label: 'Gut', value: 'Gut' },
        { label: 'Akzeptabel', value: 'Akzeptabel' },
        { label: 'Beschädigt', value: 'Beschädigt' },
      ],
      required: true,
    },
    {
      name: 'size',
      type: 'text',
      maxLength: 25,
    },
    {
      name: 'detailedDescription',
      type: 'textarea',
      maxLength: 500,
      required: true,
    },
  ],
}
