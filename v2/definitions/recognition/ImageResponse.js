module.exports = {
  type: 'object',
  description: 'The image processed',
  properties: {
    id: {
      type: 'string',
      description: 'ID of the image',
    },
    customId: {
      type: 'string',
      description: 'An arbitrary client specific resource identifier to reference this image (usually UUID)',
    },
    feedId: {
      type: 'string'
    },
    identityId: {
      type: 'string',
    },
    url: {
      type: 'string',
      description: 'URL of the image',
    },
    boundingBox: {
      $ref: '#/definitions/BoundingBox',
    },
    boundingBoxConfidence: {
      type: 'number'
    },
    type: {
      type: 'string',
      enum: [
        'FACE'
      ],
    },
    groupId: {
      type: 'string',
    },
    isFrontal: {
      type: 'boolean'
    },
    sharpness: {
      type: 'number',
    },
    width: {
      type: 'number',
    },
    height: {
      type: 'number',
    },
    createdAt: {
      type: 'number',
    },
  },
  example: {
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
  },
};
