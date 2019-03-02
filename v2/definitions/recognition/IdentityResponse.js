module.exports = {
  type: 'object',
  required: [
    'id',
    'name',
    'imageIds',
    'createdAt',
  ],
  properties: {
    id: {
      type: 'string',
    },
    customId: {
      type: 'string',
      required: false,
    },
    images: {
      type: 'array',
      items: {
        $ref: '#/definitions/RecognitionImageResponse',
      }
    },
    namespace: {
      type: 'string',
      maxLength: 128,
    },
    createdAt: {
      type: 'integer',
      format: 'int64',
      description: 'UNIX timestamp for when the identity was created',
    },
  },
  example: {
    id: 'ab36de62-fe3e-4907-8a03-7d27c21fa01a',
    customId: '0285a6b8-a617-11e6-8253-175f847ef3cf',
    images: [
      {
        id: '52547074-a622-11e6-8f61-63f37dc33285',
        customId: 'some_person_filled_image',
        feedId: 'Camera_123456',
        identityId: 'af278ded-5412-4916-bc5c-13469bfe7644',
        url: 'https://publicly.available.domain.net/image-001.jpg',
        boundingBox: {
          xMin: 392,
          yMin: 170,
          xMax: 90,
          yMax: 596,
        },
        groupId: 'Test GroupID',
        boundingBoxConfidence: 0.9129213,
        type: 'FACE',
        isFrontal: true,
        sharpness: false,
        width: 150,
        height: 200,
        createdAt: 1487648348000,
      }
    ],
    namespace: 'testing',
    createdAt: 1487648348000,
  },
};
