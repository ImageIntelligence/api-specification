module.exports = {
  patch: {
    operationId: 'recognition/identity-update-by-id',
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
      },
      {
        name: 'RecognitionIdentityUpdateRequest',
        in: 'body',
        schema: {
          $ref: '#/definitions/RecognitionIdentityUpdateRequest'
        },
        required: true
      }
    ],
    responses: {
      '200': {
        description: 'Recognition update identity request was successfully submitted',
        schema: {
          $ref: '#/definitions/RecognitionIdentityResponse'
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
      '500': {
        description: 'Internal server error'
      }
    }
  }
};
