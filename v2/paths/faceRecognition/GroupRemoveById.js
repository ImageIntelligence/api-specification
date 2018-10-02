module.exports = {
  delete: {
    operationId: 'face-recognition/group-remove',
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
        description: 'The ID of a face recognition group',
        required: true,
      },
    ],
    responses: {
      '200': {
        description: 'Successfully removed the face recognition group',
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
