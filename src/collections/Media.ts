import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  upload: {
    formatOptions: {
      format: 'webp',
    },
    resizeOptions: {
      position: 'centre',
      fit: 'cover',
    },
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
        fit: 'cover',
        formatOptions: {
          format: 'webp',
        },
      },
      {
        name: 'card',
        width: 600,
        height: 800,
        position: 'centre',
        fit: 'outside',
        formatOptions: {
          format: 'webp',
        },
      },
      {
        name: 'inspector',
        width: 1280,
        height: undefined,
        position: 'centre',
        fit: 'cover',
        formatOptions: {
          format: 'webp',
        },
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}
