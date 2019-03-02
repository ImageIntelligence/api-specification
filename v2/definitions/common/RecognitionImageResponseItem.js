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
    url: 'https://publicly.available.domain.net/image-001.jpg',
    proxyUrl: 'https://api.quickpix.io/images/c7e9a2ca-c2ee-4290-90b4-04fe3df35be0',
    customId: 'some_person_filled_image',
  },
};
