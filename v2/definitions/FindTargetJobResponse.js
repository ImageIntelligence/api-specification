module.exports = {
  type: 'object',
  description: 'The response to a find-target request',
  required: [
    'id',
    'createdAt',
    'status',
    'jobResults',
  ],
  properties: {
    id: {
      type: 'string',
    },
    createdAt: {
      type: 'integer',
      format: 'int64',
      description: 'UNIX timestamp for when the job was created',
    },
    status: {
      $ref: '#/definitions/JobStatus',
    },
    customId: {
      type: 'string',
      description: 'An arbitrary client specific resource identifier to reference this job (usually UUID)',
    },
    feedId: {
      type: 'string',
      description: 'User specified ID to reference the source of the images within this job',
    },
    webhookUrl: {
      type: 'string',
      description: 'Publicly accessible POST endpoint for receiving job status updates',
    },
    jobResults: {
      type: 'array',
      items: {
        type: 'object',
        required: [
          'target',
          'images',
          'hitl',
        ],
        properties: {
          target: {
            type: 'object',
            required: [
              'class',
              'images',
            ],
            properties: {
              'class': {
                type: 'string',
                description: 'The class (target) found in the image',
              },
              customId: {
                type: 'string',
                description: 'An arbitrary client specific resource identifier to reference this target image (usually UUID)',
              },
              images: {
                type: 'array',
                description: 'A list of target image URLs that were passed in during the request)',
                items: {
                  type: 'string',
                  description: 'URL of target image',
                },
                maxItems: 3,
                minItems: 1,
              },
            },
          },
          images: {
            type: 'array',
            items: {
              $ref: '#/definitions/ImageResponseItem',
            },
            minItems: 1,
          },
          hitl: {
            type: 'boolean',
            description: 'Whether human-in-the-loop verification was used for this class',
          },
        },
      },
    },
  },
  example: {
    id: '5d689c71-e68f-46c3-ac71-4053806e71de',
    jobResults: [
      {
        target: {
          'class': 'person',
          customId: 'custom_target_id',
          images: [
            'https://publicly.available.domain.net/person-001.jpg',
            'https://publicly.available.domain.net/person-002.jpg',
            'https://publicly.available.domain.net/person-003.jpg',
          ],
        },
        images: [
          {
            url: 'https://publicly.available.domain.net/image-xxx.jpg',
            customId: 'some_person_filled_image',
            proxyUrl: 'https://api.quickpix.io/images/c7e9a2ca-c2ee-4290-90b4-04fe3df35be0',
          }
        ],
        hitl: true,
      },
    ],
    createdAt: 1487648348,
    status: 'COMPLETED_SUCCESSFULLY',
    customId: '6c78df0a-67b6-4d5f-93cf-5820cfee501c',
    feedId: 'Camera_123456',
    webhookUrl: 'https://publicly.available.domain.net/90f8754aa4e287bbb2c07ec99ade0de72ddbd4b6Et',
  },
};
