module.exports = {
  type: 'object',
  required: [
    'id',
    'groupId',
    'clusters',
    'createdAt',
  ],
  properties: {
    id: {
      type: 'string',
    },
    groupId: {
      type: 'string',
    },
    clusters: {
      type: 'array',
      items: {
        type: 'object',
        required: [
          'id',
          'faces',
          'createdAt',
        ],
        properties: {
          id: {
            type: 'string',
          },
          faces: {
            type: 'array',
            items: {
              type: 'object',
              required: [
                'id',
                'groupId',
              ],
              properties: {
                id: {
                  type: 'string',
                },
                groupId: {
                  type: 'string',
                },
                identityId: {
                  type: 'string',
                },
              }
            },
          },
          createdAt: {
            type: 'integer',
            format: 'int64',
          },
        },
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
    groupId: '20e4649d-112a-4532-8ca8-82bd66c4bb3e',
    clusters: [
      {
        id: 'f8e27917-6b2a-4cfb-93d0-fa0a7481893d',
        faces: [
          {
            id: '8b6adf4e-3bdb-4b21-8b5c-6d216c4b8582',
            groupId: '20e4649d-112a-4532-8ca8-82bd66c4bb3e',
            identityId: '48e605a1-8dfe-4e90-bea3-ebf1eb4db753',
          },
          {
            id: '875d8131-e424-46c9-91c8-0fcb7f013854',
            groupId: '20e4649d-112a-4532-8ca8-82bd66c4bb3e',
            identityId: 'cc775195-d3ce-4784-aa21-520dca1ddd3b',
          },
        ],
        createdAt: 1487648350,
      },
      {
        id: 'e9723382-0238-43f6-a111-59e0e8fcfa61',
        faces: [
          {
            id: '21ddc2ab-a0e4-4ec8-9125-936f68283885',
            groupId: '20e4649d-112a-4532-8ca8-82bd66c4bb3e',
            identityId: 'b4f00a2a-60af-4d27-b0a6-5b1b61a7b011',
          },
        ],
        createdAt: 1487648356,
      }
    ],
    createdAt: 1487648348
  },
};
