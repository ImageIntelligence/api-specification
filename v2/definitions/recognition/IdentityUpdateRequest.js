module.exports = {
  type: 'object',
  required: ['imageIdsToAdd', 'imageIdsToRemove'],
  properties: {
    customId: {
      type: 'string',
      description: 'An arbitrary client specific resource identifier to reference this job (usually UUID)',
    },
    images: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          add: {
            type: 'array',
            items: {
              type: 'string',
              description: 'Images to add',
            },
            maxLength: 20,
            uniqueItems: true,
          },
          remove: {
            type: 'array',
            items: {
              type: 'string',
              description: 'Images to remove',
            },
            maxLength: 20,
            uniqueItems: true,
          }
        }
      }
    },
  },
  example: {
    customId: '0285a6b8-a617-11e6-8253-175f847ef3cf',
    images: {
      add: [
        'af278ded-5412-4916-bb5c-13769bfb7644',
        '633081ed-4c05-459b-bddc-061c66581f92',
        'c3c61384-1861-4026-be2e-4d70646231c0'
      ],
      remove: ['57ff6229-9082-4e14-aff6-4244e9dad9eb', '9521422c-76d0-4f38-aa10-1c12d11b93f5']
    }
  }
};
