module.exports = {
  type: 'object',
  description: 'The response to a face recognition job request',
  properties: {
    id: {
      type: 'string'
    },
    identityId: {
      type: 'string'
    },
    batchId: {
      type: 'string'
    },
    namespace: {
      type: 'string',
      maxLength: 128
    },
    linkModifiedBy: {
      type: 'string',
      enum: ['MANUAL', 'ML', 'HITL']
    },
    linkLastModifiedAt: {
      type: 'number'
    },
    createdAt: {
      type: 'number'
    },
    images: {
      type: 'array',
      items: {
        $ref: '#/definitions/RecognitionImageResponse'
      }
    }
  },
  example: {
    id: 'ab36de62-fe3e-4907-8a03-7d27c21fa01a',
    identityId: 'af278ded-5412-4916-bc5c-13469bfe7644',
    batchId: 'bf94e979-9205-4681-9b89-6ed11a498ec9',
    namespace: 'acme',
    linkModifiedBy: 'ML',
    linkLastModifiedAt: 1487648348000,
    createdAt: 1487648348000,
    images: [
      {
        id: '52547074-a622-11e6-8f61-63f37dc33285',
        customId: 'some_person_filled_image',
        feedId: 'Camera_123456',
        identityId: 'af278ded-5412-4916-bc5c-13469bfe7644',
        url: 'https://publicly.available.domain.net/image-001.jpg',
        boundingBox: {
          xMin: 0.23873,
          yMin: 0.23873,
          xMax: 0.75087,
          yMax: 0.96537
        },
        groupId: '65dd9554-ce46-4a29-bcd7-eeb48683b421',
        boundingBoxConfidence: 0.9129213,
        type: 'FACE',
        isFrontal: true,
        sharpness: 0.671230746,
        width: 150,
        height: 200,
        createdAt: 1487648348000
      }
    ]
  }
};
