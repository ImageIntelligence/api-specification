module.exports = {
  patch: {
    operationId: 'face-recognition/identity-update-by-id',
    security: [
      {
        Bearer: [],
      },
    ],
    parameters: [
      {
        name: 'id',
        in: 'path',
        type: 'string',
        description: 'The ID of a face recognition identity',
        required: true,
      },
      {
        name: 'FaceRecognitionIdentityUpdateRequest',
        in: 'body',
        schema: {
          $ref: '#/definitions/FaceRecognitionIdentityUpdateRequest',
        },
        required: true,
      },
    ],
    responses: {
      '200': {
        description: 'Face recognition update identity request was successfully submitted',
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
