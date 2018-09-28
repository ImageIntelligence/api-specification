module.exports = {
  post: {
    operationId: 'face-recognition/recognize',
    security: [
      {
        Bearer: [],
      },
    ],
    parameters: [
      {
        name: 'FaceRecognitionJobRequest',
        in: 'body',
        schema: {
          $ref: '#/definitions/FaceRecognitionCreateJobRequest',
        },
        required: true,
      },
    ],
    responses: {
      '200': {
        description: 'Face recognition job request was successfully submitted',
        schema: {
          $ref: '#/definitions/FaceRecognitionCreateJobResponse',
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
      '413': {
        description: 'Request Entity Too Large. Max request size is 1 MB',
      },
      '500': {
        description: 'Internal server error',
      },
    },
  },
};
