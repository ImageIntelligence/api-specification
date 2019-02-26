module.exports = {
  get: {
    operationId: 'recognition/identity-search',
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
        description: 'A list of identities that exist in the system',
        schema: {
          type: 'array',
          items: {
            $ref: '#/definitions/RecognitionIdentityResponse',
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
