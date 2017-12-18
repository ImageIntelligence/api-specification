module.exports = {
  type: 'object',
  required: [
    'images',
    'question'
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
    question: {
      type: 'string',
      description: 'The Yes/No question to be answered',
      maxLength: 256,
    },
    examples: {
      type: 'object',
      required: [ ],
      properties: {
        yes: {
          type: 'array',
          description: 'A list of example image URLs for the \'Yes\' answer to the question',
          items: {
            type: 'string',
            description: 'The image URL of the target image',
            maxLength: 512,
          },
          maxItems: 3,
          minItems: 1,
        },
        no: {
          type: 'array',
          description: 'A list of example image URLs for the \'No\' answer to the question',
          items: {
            type: 'string',
            description: 'The image URL of the target image',
            maxLength: 512,
          },
          maxItems: 3,
          minItems: 1,
        },
      }
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
        customId: 'some_garage_door_open_image',
      },
      {
        url: 'https://publicly.available.domain.net/image-002.jpg',
        customId: 'some_garage_door_closed_image',
      },
    ],
    question: "Is my garage door open?",
    examples: {
      yes: [
        "https://publicly.available.domain.net/yes-image-001.jpg",
        "https://publicly.available.domain.net/yes-image-002.jpg",
        "https://publicly.available.domain.net/yes-image-003.jpg",
      ],
      no: [
        "https://publicly.available.domain.net/no-image-001.jpg",
        "https://publicly.available.domain.net/no-image-002.jpg",
        "https://publicly.available.domain.net/no-image-003.jpg",
      ],
    },
    customId: '6c78df0a-67b6-4d5f-93cf-5820cfee501c',
    feedId: 'Camera_123456',
    webhookUrl: 'https://publicly.available.domain.net/90f8754aa4e287bbb2c07ec99ade0de72ddbd4b6Et',
  },
};
