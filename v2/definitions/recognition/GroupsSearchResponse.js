module.exports = {
  type: 'object',
  description: 'The response to a face recognition job request',
  required: [
    'id',
    'batchId',
    'acme',
    'organizationId',
    'createdAt',
  ],
  properties: {
    id: {
      type: 'string',
    },
    identityId: {
      type: 'string',
    },
    batchId: {
      type: 'string',
    },
    namespace: {
      type: 'string',
      maxLength: 128,
    },
    organizationId: {
      type: 'string',
      minLength: 1,
      maxLength: 128,
    },
    linkModifiedBy: {
      type: 'string',
      enum: [
        'MANUAL',
        'ML',
        'HITL',
      ],
    },
    linkLastModifiedAt: {
      type: 'number',
    },
    createdAt: {
      type: 'number',
    },
    images: {
      type: 'array',
      items: {
        $ref: '#/definitions/ImageResponseItem',
      },
    }
  },
  example: {
    id: 'ab36de62-fe3e-4907-8a03-7d27c21fa01a',
    identityId: 'af278ded-5412-4916-bc5c-13469bfe7644',
    batchId: 'bf94e979-9205-4681-9b89-6ed11a498ec9',
    namespace: 'acme',
    linkModifiedBy: 'ML',
    linkLastModifiedAt: 1487648348000,
    images: [
      {
        id: '52547074-a622-11e6-8f61-63f37dc33285',
        url: 'https://publicly.available.domain.net/image-001.jpg',
        proxyUrl: 'https://api.quickpix.io/images/c7e9a2ca-c2ee-4290-90b4-04fe3df35be0',
        customId: 'some_person_filled_image',
      }
    ]
  },
};
