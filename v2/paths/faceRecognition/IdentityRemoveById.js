module.exports = {
  delete: {
    operationId: 'face-recognition/identity-remove',
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
    ],
    responses: {
      '200': {
        description: 'Successfully removed the face recognition identity',
      },
      '401': {
        description: 'Unauthorized',
      },
      '403': {
        description: 'Forbidden',
      },
      '404': {
        description: 'No identity found with the given ID',
      },
      '500': {
        description: 'Internal server error',
      },
    },
  },
};