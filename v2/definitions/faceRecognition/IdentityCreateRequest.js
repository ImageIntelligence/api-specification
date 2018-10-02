module.exports = {
  type: 'object',
  required: [
    'groupId',
    'name',
    'faceIds',
  ],
  properties: {
    groupId: {
      type: 'string',
    },
    name: {
      type: 'string',
      description: 'The name of your identity (e.g. David)',
      maxLength: 256,
    },
    faceIds: {
      type: 'array',
      items: {
        type: 'string',
        minItems: 1,
      },
    },
  },
  example: {
    groupId: '14935044-1afd-49f5-9986-a2fae2f31f23',
    name: 'Kevin Spacey',
    faceIds: [
      'af278ded-5412-4916-bb5c-13769bfb7644',
      '633081ed-4c05-459b-bddc-061c66581f92',
      'c3c61384-1861-4026-be2e-4d70646231c0',
    ],
  },
};
