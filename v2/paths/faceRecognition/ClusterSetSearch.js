module.exports = {
  get: {
    operationId: 'face-recognition/cluster-set-search',
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
    ],
    responses: {
      '200': {
        description: 'A list of cluster sets found given your search criteria',
        schema: {
          type: 'array',
          items: {
            $ref: '#/definitions/FaceRecognitionClusterSetResponse',
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