module.exports = {
  post: {
    operationId: 'match',
    security: [
      {
        Bearer: [],
      },
    ],
    parameters: [
      {
        name: 'MatchJobRequest',
        in: 'body',
        schema: {
          $ref: '#/definitions/MatchJobRequest',
        },
        required: true,
      },
    ],
    responses: {
      '200': {
        description: 'Match job request was successfully submitted',
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
      '413': {
        description: 'Request Entity Too Large',
      },
      '500': {
        description: 'Internal server error',
      },
    },
  },
};
