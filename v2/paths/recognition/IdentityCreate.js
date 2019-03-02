module.exports = {
  post: {
    operationId: 'recognition/identity',
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
        name: 'RecognitionIdentityCreateRequest',
        in: 'body',
        schema: {
          $ref: '#/definitions/RecognitionIdentityCreateRequest',
        },
        required: true,
      },
    ],
    responses: {
      '200': {
        description: 'Face recognition create identity request was successfully submitted',
        schema: {
          $ref: '#/definitions/RecognitionImageResponse',
        },
      },
      '400': {
        description: 'Malformed request',
      },
      '401': {
        description: 'Unauthorized',
      },
      '403': {
        description: 'Forbidden',
      },
      '500': {
        description: 'Internal server error',
      },
    },
  },
};
