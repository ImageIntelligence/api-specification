module.exports = {
  type: 'object',
  required: [
    'facesToAdd',
    'facesToRemove',
  ],
  properties: {
    faceIdsToAdd: {
      type: 'array',
      items: {
        type: 'string',
        minItems: 1,
      },
    },
    faceIdsToRemove: {
      type: 'array',
      items: {
        type: 'string',
        minItems: 1,
      },
    },
  },
  example: {
    faceIdsToAdd: [
      'af278ded-5412-4916-bb5c-13769bfb7644',
      '633081ed-4c05-459b-bddc-061c66581f92',
      'c3c61384-1861-4026-be2e-4d70646231c0',
    ],
    faceIdsToRemove: [
      '57ff6229-9082-4e14-aff6-4244e9dad9eb',
      '9521422c-76d0-4f38-aa10-1c12d11b93f5',
    ],
  },
};
