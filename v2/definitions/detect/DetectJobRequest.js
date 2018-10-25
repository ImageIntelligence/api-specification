module.exports = {
  type: 'object',
  required: [
    'images',
    'classes',
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
    classes: {
      type: 'array',
      minItems: 1,
      items: {
        type: 'object',
        required: [
          'class',
        ],
        properties: {
          class: {
            type: 'string',
            description: 'A class (object) you want to search for',
          },
          verify: {
            type: 'string',
            enum: [
              'NEVER',
              'AUTO',
              'ALWAYS',
            ],
            description: 'Whether or not you want HITL verification',
            default: 'AUTO',
          },
          exclusionZones: {
            type: 'object',
            description: 'A list of regions to exclude during analysis',
            required: [
              'points'
            ],
            properties: {
              type: {
                type: 'string',
                enum: [
                  'GRID',
                  'FREEFORM'
                ],
                default: 'GRID',
                description: 'The type of exclusion zone',
              },
              gridSize: {
                type: 'number',
                format: 'int32',
                enum: [
                  32,
                  64,
                  128,
                  256
                ],
                default: 64,
                description: 'Maximum size for the grid, only required if type=GRID',
              },
              points: {
                type: 'array',
                description: 'A list of lists where each nested list represents a region of the image to exclude',
                minItems: 1,
                items: {
                  type: 'array',
                  minItems: 3,
                  items: {
                    type: 'number',
                    format: 'in32',
                    minItems: 2,
                    maxItems: 2,
                    description: 'A 2 element tuple representing a (x, y) coordinate',
                  },
                },
              },
            },
          },
        },
      },
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
        class: 'person',
        verify: 'AUTO',
      },
      {
        class: 'car',
        verify: 'NEVER',
        exclusionZones: {
          type: 'GRID',
          gridSize: 64,
          points: [
            [[0, 0], [0, 3], [1, 0], [1, 3]],
            [[2, 6], [2, 9], [4, 6], [4, 9]],
          ],
        },
      },
    ],
    customId: '6c78df0a-67b6-4d5f-93cf-5820cfee501c',
    feedId: 'Camera_123456',
    webhookUrl: 'https://publicly.available.domain.net/90f8754aa4e287bbb2c07ec99ade0de72ddbd4b6Et',
  },
};
