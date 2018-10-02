module.exports = {
  post: {
    operationId: 'face-recognition/group',
    security: [
      {
        Bearer: [],
      },
    ],
    parameters: [
      {
        name: 'FaceRecognitionGroupCreateRequest',
        in: 'body',
        schema: {
          $ref: '#/definitions/FaceRecognitionGroupCreateRequest',
        },
        required: true,
      },
    ],
    responses: {
      '200': {
        description: 'Face recognition create group request was successfully submitted',
        schema: {
          $ref: '#/definitions/FaceRecognitionGroupResponse',
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