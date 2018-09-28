module.exports = {
  get: {
    operationId: 'match-get',
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
        description: 'The ID of a match job',
        required: true,
      },
    ],
    responses: {
      '200': {
        description: 'Resources from the match job successfully returned',
        schema: {
          $ref: '#/definitions/MatchJobResponse',
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
