module.exports = {
  post: {
    operationId: 'recognize',
    security: [
      {
        Bearer: []
      }
    ],
    parameters: [
      {
        name: 'namespace',
        type: 'string',
        in: 'path',
        required: true
      },
      {
        name: 'RecognitionJobRequest',
        in: 'body',
        schema: {
          $ref: '#/definitions/RecognitionRecognizeJobRequest'
        },
        required: true
      }
    ],
    responses: {
      '200': {
        description: 'Recognition job request was successfully submitted',
        schema: {
          $ref: '#/definitions/RecognitionRecognizeJobResponse'
        }
      },
      '400': {
        description: 'Malformed request'
      },
      '401': {
        description: 'Unauthorized'
      },
      '403': {
        description: 'Forbidden'
      },
      '413': {
        description: 'Request Entity Too Large'
      },
      '500': {
        description: 'Internal server error'
      }
    }
  }
};
