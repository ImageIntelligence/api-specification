module.exports = {
  get: {
    operationId: 'detect-get',
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
        description: 'The ID of a detect job',
        required: true,
      },
    ],
    responses: {
      '200': {
        description: 'Resources from the detect job successfully returned',
        schema: {
          $ref: '#/definitions/DetectJobResponse',
        },
      },
      '401': {
        description: 'Unauthorized',
      },
      '403': {
        description: 'Forbidden',
      },
      '404': {
        description: 'No job found with the given ID',
      },
      '500': {
        description: 'Internal server error',
      },
    },
  },
};
