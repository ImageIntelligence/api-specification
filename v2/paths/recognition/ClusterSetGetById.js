module.exports = {
  get: {
    operationId: 'recognition/cluster-set-get',
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
        description: 'Face recognition cluster set resource',
        schema: {
          $ref: '#/definitions/RecognitionClusterSetResponse',
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
      '404': {
        description: 'No cluster set was found with the given ID',
      },
      '500': {
        description: 'Internal server error',
      },
    },
  },
};
