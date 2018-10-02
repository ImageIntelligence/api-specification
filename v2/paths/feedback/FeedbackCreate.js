module.exports = {
  post: {
    operationId: 'feedback',
    security: [
      {
        Bearer: [],
      },
    ],
    parameters: [
      {
        name: 'FeedbackRequest',
        in: 'body',
        schema: {
          $ref: '#/definitions/FeedbackRequest',
        },
        required: true,
      },
    ],
    responses: {
      '200': {
        description: 'Feedback request was successfully submitted',
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
      '413': {
        description: 'Request Entity Too Large. Max request size is 1 MB',
      },
      '500': {
        description: 'Internal server error',
      },
    },
  },
};
