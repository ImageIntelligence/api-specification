module.exports = {
  get: {
    operationId: 'face-recognition/identity-search',
    security: [
      {
        Bearer: [],
      },
    ],
    parameters: [],
    responses: {
      '200': {
        description: 'A list of identities that exist in the system',
        schema: {
          type: 'array',
          items: {
            $ref: '#/definitions/FaceRecognitionIdentityResponse',
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
