module.exports = {
  type: 'object',
  required: [
    'images',
    'classes',
  ],
  properties: {
    images: {
      type: 'array',
      description: 'A list of image URLs',
      items: {
        $ref: '#/definitions/ImageRequestItem',
      },
      maxLength: 64,
      minLength: 1,
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
            description: 'A class you want to search for',
          },
          hitl: {
            type: 'string',
            enum: [
              'NEVER',
              'AUTO',
              'ALWAYS',
            ],
            description: 'Whether you want HITL verification',
            default: 'AUTO',
          },
        },
      },
      minLength: 1,
    },
    webhookUrl: {
      type: 'string',
      description: 'Publicly accessible POST endpoint for receiving job status updates',
    },
    customId: {
      type: 'string',
      description: 'User specified ID to reference this job',
    },
    feedId: {
      type: 'string',
      description: 'User specified ID to reference the source of the images within this job',
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
