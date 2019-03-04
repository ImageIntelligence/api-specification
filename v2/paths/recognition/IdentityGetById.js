module.exports = {
  get: {
    operationId: 'recognition/identity-get',
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
        description: 'The ID of a recognition identity',
        required: true
      }
    ],
    responses: {
      '200': {
        description: 'Recognition identity resource',
        schema: {
          $ref: '#/definitions/RecognitionIdentityResponse'
        }
      },
      '401': {
        description: 'Unauthorized'
      },
      '403': {
        description: 'Forbidden'
      },
      '404': {
        description: 'No identity found with the given ID'
      },
      '500': {
        description: 'Internal server error'
      }
    }
  }
};
