module.exports = {
  get: {
    operationId: 'recognition/images-get',
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
        name: 'id',
        in: 'path',
        type: 'string',
        description: 'The ID of a recognition image',
        required: true
      }
    ],
    responses: {
      '200': {
        description: 'Face resource given ID successfully returned',
        schema: {
          $ref: '#/definitions/RecognitionImageResponse'
        }
      },
      '401': {
        description: 'Unauthorized'
      },
      '403': {
        description: 'Forbidden'
      },
      '404': {
        description: 'No face found with the given ID'
      },
      '500': {
        description: 'Internal server error'
      }
    }
  }
};
