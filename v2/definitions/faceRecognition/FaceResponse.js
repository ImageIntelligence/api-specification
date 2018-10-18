module.exports = {
  type: 'object',
  required: [
    'id',
    'groupId',
    'identityId',
    'createdAt',
  ],
  properties: {
    id: {
      type: 'string',
    },
    groupId: {
      type: 'string',
    },
    faceIds: {
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
    groupId: '14935044-1afd-49f5-9986-a2fae2f31f23',
    identityId: 'af278ded-5412-4916-bc5c-13469bfe7644',
    createdAt: 1487648348,
  },
};
