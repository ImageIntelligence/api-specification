module.exports = {
  type: 'object',
  required: [
    'images',
    'target'
  ],
  properties: {
    images: {
      type: 'array',
      description: 'A list of image URLs. A maxiumum batch of size of 64 image URls may be submitted',
      items: {
        $ref: '#/definitions/ImageRequestItem',
      },
      maxLength: 64,
      minLength: 1,
    },
    target: {
      type: 'object',
      required: [
        'class',
        'images',
      ],
      properties: {
        class: {
          type: 'string',
          description: 'The target class you want to find in your images',
        },
        customId: {
          type: 'string',
          description: 'User specified ID to reference this target',
        },
        images: {
          type: 'array',
          description: 'A list of target image URLs',
          items: {
            type: 'string',
            description: 'The image URL of the target image',
          },
          maxLength: 3,
          minLength: 1,
        },
      },
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
    target: {
      'class': 'person',
      customId: 'example_target_id',
      images: [
        'https://publicly.available.domain.net/person-001.jpg',
        'https://publicly.available.domain.net/person-002.jpg',
        'https://publicly.available.domain.net/person-003.jpg',
      ],
    },
    customId: '6c78df0a-67b6-4d5f-93cf-5820cfee501c',
    feedId: 'Camera_123456',
    webhookUrl: 'https://publicly.available.domain.net/90f8754aa4e287bbb2c07ec99ade0de72ddbd4b6Et',
  },
};
