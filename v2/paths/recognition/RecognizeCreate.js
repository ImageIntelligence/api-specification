module.exports = {
  post: {
    operationId: 'recognition/recognize',
    security: [
      {
        Bearer: [],
      },
    ],
    parameters: [
      {
        name: 'RecognitionJobRequest',
        in: 'body',
        schema: {
          $ref: '#/definitions/RecognitionRecognizeJobRequest',
        },
        required: true,
      },
    ],
    responses: {
      '200': {
        description: 'Face recognition job request was successfully submitted',
        schema: {
          $ref: '#/definitions/RecognitionRecognizeJobResponse',
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
