module.exports = {
  type: 'object',
  required: [
    'id',
    'groupId',
    'name',
    'faceIds',
    'createdAt',
  ],
  properties: {
    id: {
      type: 'string',
    },
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
    createdAt: {
      type: 'integer',
      format: 'int64',
      description: 'UNIX timestamp for when the identity was created',
    },
  },
  example: {
    id: 'ab36de62-fe3e-4907-8a03-7d27c21fa01a',
    groupId: '14935044-1afd-49f5-9986-a2fae2f31f23',
    name: 'Kevin Spacey',
    faceIds: [
      'af278ded-5412-4916-bb5c-13769bfb7644',
      '633081ed-4c05-459b-bddc-061c66581f92',
      'c3c61384-1861-4026-be2e-4d70646231c0',
    ],
    createdAt: 1487648348000,
  },
};
