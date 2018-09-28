module.exports = {
  type: 'object',
  required: [
    'id',
    'groupId',
    'clusterIds',
    'createdAt',
  ],
  properties: {
    id: {
      type: 'string',
    },
    groupId: {
      type: 'string',
    },
    clusterIds: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    createdAt: {
      type: 'integer',
      format: 'int64',
      description: 'UNIX timestamp for when cluster sets were computed',
    },
  },
  example: {
    id: '27de906d-9fd8-423c-9ed2-044ccf46ab6a',
    groupId: 'a710d452-71c6-4794-9560-a3e94b374c14',
    clusterIds: [
      '9334ad28-5790-46d3-aa48-0af4b197159b',
      '8509b105-ec6f-4e39-80ab-025f4ba974de',
      'c3c61384-1861-4026-be2e-4d70646231c0'
    ],
    createdAt: 1487648348
  },
};
