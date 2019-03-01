module.exports = {
  post: {
    operationId: 'recognition/identity-search',
    security: [
      {
        Bearer: [],
      },
    ],
    parameters: [
      {
        name: 'namespace',
        type: 'string',
        description: 'Groups\' namespace',
        in: 'path',
        required: true,
      },
      {
        name: 'RecognitionSearchRequest',
        in: 'body',
        schema: {
          $ref: '#/definitions/RecognitionSearchRequest',
        },
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
