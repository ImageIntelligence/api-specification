module.exports = {
  post: {
    operationId: 'recognition/recognize-search',
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
        name: 'RecognitionSearchRequest',
        in: 'body',
        schema: {
          $ref: '#/definitions/RecognitionSearchRequest'
        },
        required: true
      }
    ],
    responses: {
      '200': {
        description: 'A list of resources found given your search criteria',
        schema: {
          type: 'array',
          items: {
            $ref: '#/definitions/RecognitionRecognizeJobResponse'
          }
        }
      },
      '401': {
        description: 'Unauthorized'
      },
      '500': {
        description: 'Internal server error'
      }
    }
  }
};
