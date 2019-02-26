module.exports = {
  type: 'object',
  required: [
    'images',
    'groupId',
  ],
  properties: {
    images: {
      type: 'array',
      description: 'A list of images. Each object should contain either the image URL or blob of image bytes',
      items: {
        $ref: '#/definitions/ImageRequestItem',
      },
      maxItems: 64,
      minItems: 1,
    },
    groupId: {
      type: 'string',
    },
    webhookUrl: {
      type: 'string',
      description: 'Publicly accessible POST endpoint for receiving job status updates',
      maxLength: 2048,
    },
    customId: {
      type: 'string',
      description: 'An arbitrary client specific resource identifier to reference this job (usually UUID)',
      maxLength: 64,
    },
    feedId: {
      type: 'string',
      description: 'User specified ID to reference the source of the images within this job',
      maxLength: 64,
    },
  },
  example: {
    images: [
      {
        url: 'https://publicly.available.domain.net/image-001.jpg',
      },
      {
        url: 'https://publicly.available.domain.net/image-002.jpg',
      },
    ],
    groupId: 'd4ef671e-2067-446e-8659-1dcd32b09c9a',
    customId: '6c78df0a-67b6-4d5f-93cf-5820cfee501c',
    feedId: 'Camera_123456',
    webhookUrl: 'https://publicly.available.domain.net/90f8754aa4e287bbb2c07ec99ade0de72ddbd4b6Et',
  },
};
