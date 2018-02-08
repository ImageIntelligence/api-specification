module.exports = {
  type: 'object',
  required: [
    'images',
    'classes',
  ],
  properties: {
    images: {
      type: 'array',
      items: {
        $ref: '#/definitions/ImageRequestItem',
      },
      maxItems: 64,
      minItems: 1,
    },
    classes: {
      type: 'array',
      items: {
        type: 'object',
        required: [
          'class',
        ],
        properties: {
          'class': {
            type: 'string',
            description: 'A class (object) you want to search for',
          },
          hitl: {
            type: 'string',
            enum: [
              'NEVER',
              'AUTO',
              'ALWAYS',
            ],
            description: 'Whether or not you want HITL verification',
            default: 'AUTO',
          },
        },
      },
      minItems: 1,
    },
    webhookUrl: {
      type: 'string',
      description: 'Publicly accessible POST endpoint for receiving job status updates',
      maxLength: 512,
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
        customId: 'some_person_filled_image',
      },
      {
        url: 'https://publicly.available.domain.net/image-002.jpg',
        customId: 'some_car_filled_image',
      },
    ],
    classes: [
      {
        'class': 'person',
        hitl: 'ALWAYS',
      },
      {
        'class': 'car',
        hitl: 'NEVER',
      },
    ],
    customId: '6c78df0a-67b6-4d5f-93cf-5820cfee501c',
    feedId: 'Camera_123456',
    webhookUrl: 'https://publicly.available.domain.net/90f8754aa4e287bbb2c07ec99ade0de72ddbd4b6Et',
  },
};
