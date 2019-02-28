module.exports = {
  type: 'object',
  required: [
    'id',
    'identityId',
    'createdAt',
  ],
  properties: {
    id: {
      type: 'string',
    },
    identityId: {
      type: 'string',
    },
    createdAt: {
      type: 'integer',
      format: 'int64',
      description: 'UNIX timestamp for when the identity was created',
    },
  },
  example: {
    id: 'ab36de62-fe3e-4907-8a03-7d27c21fa01a',
    identityId: 'af278ded-5412-4916-bc5c-13469bfe7644',
    createdAt: 1487648348000,
  },
};
