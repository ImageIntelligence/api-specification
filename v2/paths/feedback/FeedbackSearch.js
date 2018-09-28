module.exports = {
  get: {
    operationId: 'feedback-search',
    security: [
      {
        Bearer: [],
      },
    ],
    parameters: [
      {
        name: 'jobId',
        in: 'query',
        description: 'Search for feedback with this jobId',
        type: 'string',
        required: false,
      },
    ],
    responses: {
      '200': {
        description: 'A list of feedback found given your search criteria',
        schema: {
          type: 'array',
          items: {
            $ref: '#/definitions/FeedbackResponse',
          },
        },
      },
      '400': {
        description: 'Malformed request',
      },
      '401': {
        description: 'Unauthorized',
      },
      '500': {
        description: 'Internal server error',
      },
    },
  },
};
