module.exports = {
  post: {
    operationId: 'face-recognition/identity',
    security: [
      {
        Bearer: [],
      },
    ],
    parameters: [
      {
        name: 'FaceRecognitionIdentityCreateRequest',
        in: 'body',
        schema: {
          $ref: '#/definitions/FaceRecognitionIdentityCreateRequest',
        },
        required: true,
      },
    ],
    responses: {
      '200': {
        description: 'Face recognition create identity request was successfully submitted',
        schema: {
          $ref: '#/definitions/FaceRecognitionIdentityResponse',
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
