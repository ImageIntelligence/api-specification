module.exports = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      description: 'ID of the image'
    },
    customId: {
      type: 'string',
      description: 'An arbitrary client specific resource identifier to reference this image (usually UUID)'
    },
    feedId: {
      type: 'string',
      description: 'User specified ID to reference the source of the images within this job',
    },
    identityId: {
      type: 'string',
      description: 'Identity ID associated to this resource'
    },
    url: {
      type: 'string',
      description: 'URL of the image'
    },
    boundingBox: {
      description: 'Bounding box values',
      $ref: '#/definitions/BoundingBox'
    },
    boundingBoxConfidence: {
      type: 'number',
      description: 'Confidence level of the resulting bounding box',
    },
    type: {
      type: 'string',
      description: 'Type of response e.g. "FACE"',
      enum: ['FACE']
    },
    groupId: {
      type: 'string',
      description: 'Group that the resource belongs to'
    },
    isFrontal: {
      type: 'boolean',
      description: 'Whether the image is frontal or not',
    },
    sharpness: {
      type: 'number',
      description: 'Sharpness of the image'
    },
    width: {
      type: 'number',
      description: 'Width of the image',
    },
    height: {
      type: 'number',
      description: 'Height of the image',
    },
    createdAt: {
      type: 'number',
      description: 'Timestamp of when the job was created'
    }
  },
  example: {
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
    groupId: '63652986-b730-4ab8-a175-7914a950e7a0',
    boundingBoxConfidence: 0.9129213,
    type: 'FACE',
    isFrontal: true,
    sharpness: 0.67123074,
    width: 150,
    height: 200,
    createdAt: 1487648348000
  }
};
