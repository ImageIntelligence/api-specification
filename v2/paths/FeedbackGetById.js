module.exports = {
  get: {
    operationId: 'feedback-get',
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
        description: 'The ID of an feedback',
        required: true,
      },
    ],
    responses: {
      '200': {
        description: 'Resources from the feedback request successfully returned',
        schema: {
          $ref: '#/definitions/FeedbackResponse',
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
        description: 'No job found with the given ID',
      },
      '500': {
        description: 'Internal server error',
      },
    },
  },
};
