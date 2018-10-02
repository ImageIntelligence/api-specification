module.exports = {
  delete: {
    operationId: 'face-recognition/cluster-set-remove',
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
        description: 'The ID of a face recognition cluster set',
        required: true,
      },
    ],
    responses: {
      '200': {
        description: 'Successfully removed the face recognition cluster set',
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
