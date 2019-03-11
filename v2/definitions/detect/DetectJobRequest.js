module.exports = {
  type: 'object',
  required: ['images', 'classes'],
  properties: {
    images: {
      type: 'array',
      description: 'A list of images. Each object should contain either the image URL or blob of image bytes',
      items: {
        $ref: '#/definitions/ImageRequestItem'
      },
      maxItems: 64,
      minItems: 1
    },
    classes: {
      type: 'array',
      minItems: 1,
      items: {
        type: 'object',
        required: ['class'],
        properties: {
          class: {
            type: 'string',
            description: 'A class (object) you want to search for'
          },
          verify: {
            type: 'string',
            enum: ['NEVER', 'AUTO', 'ALWAYS'],
            description: 'Whether or not you want HITL verification',
            default: 'AUTO'
          },
          exclusionZones: {
            type: 'object',
            description: 'A list of zones to exclude during analysis',
            required: ['type', 'zones'],
            properties: {
              type: {
                type: 'string',
                enum: ['GRID'],
                default: 'GRID',
                description: 'The type of exclusion zone'
              },
              size: {
                type: 'number',
                format: 'int32',
                enum: [32, 64, 128],
                default: 64,
                description: 'Maximum grid size (e.g. size=32 means 32x32), this is required if type is GRID'
              },
              zones: {
                type: 'array',
                description: 'A list of lists where each nested list represents a zone of the image to exclude',
                items: {
                  type: 'array',
                  items: {
                    type: 'integer',
                    description: '1 to exclude this cell, 0 to include',
                    minimum: 0,
                    maximum: 1
                  }
                }
              }
            }
          }
        }
      }
    },
    webhookUrl: {
      type: 'string',
      description: 'Publicly accessible POST endpoint for receiving job status updates',
      maxLength: 512
    },
    customId: {
      type: 'string',
      description: 'An arbitrary client specific resource identifier to reference this job (usually UUID)',
      maxLength: 64
    },
    feedId: {
      type: 'string',
      description: 'User specified ID to reference the source of the images within this job',
      maxLength: 64
    }
  },
  example: {
    images: [
      {
        url: 'https://publicly.available.domain.net/image-001.jpg',
        customId: 'some_person_filled_image'
      },
      {
        url: 'https://publicly.available.domain.net/image-002.jpg',
        customId: 'some_car_filled_image'
      }
    ],
    classes: [
      {
        class: 'person'
      },
      {
        class: 'pet',
        verify: 'ALWAYS'
      }
    ],
    customId: '6c78df0a-67b6-4d5f-93cf-5820cfee501c',
    feedId: 'Camera_123456',
    webhookUrl: 'https://publicly.available.domain.net/90f8754aa4e287bbb2c07ec99ade0de72ddbd4b6Et'
  }
};
