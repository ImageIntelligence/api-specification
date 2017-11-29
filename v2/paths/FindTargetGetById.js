module.exports = {
  get: {
    operationId: 'find-target-get',
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
        description: 'The job ID of a find-target request',
        required: true,
      },
    ],
    responses: {
      '200': {
        description: 'Resources from the find-target job successfully returned',
        schema: {
          $ref: '#/definitions/FindTargetJobResponse',
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
      '500': {
        description: 'Internal server error',
      },
    },
  },
};
