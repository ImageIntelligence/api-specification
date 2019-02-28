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
    name: {
      type: 'string',
      description: 'The name of your identity (e.g. David)',
      maxLength: 256,
    },
    imageIds: {
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
    name: 'Kevin Spacey',
    imageIds: [
      'af278ded-5412-4916-bb5c-13769bfb7644',
      '633081ed-4c05-459b-bddc-061c66581f92',
      'c3c61384-1861-4026-be2e-4d70646231c0',
    ],
    createdAt: 1487648348000,
  },
};
