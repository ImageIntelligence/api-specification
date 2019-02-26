module.exports = {
  get: {
    operationId: 'recognition/cluster-set-search',
    security: [
      {
        Bearer: [],
      },
    ],
    parameters: [
      {
        name: 'groupId',
        in: 'query',
        description: 'Filter by groupIds that belong to your organisation',
        type: 'string',
        required: true,
      },
      {
        name: 'before',
        in: 'query',
        description: 'Search for cluster-sets created before this timestamp',
        type: 'number',
        required: false,
      },
      {
        name: 'after',
        in: 'query',
        description: 'Search for cluster-sets created after this timestamp',
        type: 'number',
        required: false,
      },
    ],
    responses: {
      '200': {
        description: 'A list of cluster sets found given your search criteria',
        schema: {
          type: 'array',
          items: {
            $ref: '#/definitions/RecognitionClusterSetResponse',
          },
        },
      },
      '401': {
        description: 'Unauthorized',
      },
      '500': {
        description: 'Internal server error',
      },
    },
  },
};
