module.exports = {
  post: {
    operationId: 'ask',
    security: [
      {
        Bearer: [],
      },
    ],
    parameters: [
      {
        name: 'AskJobRequest',
        in: 'body',
        schema: {
          $ref: '#/definitions/AskJobRequest',
        },
        required: true,
      },
    ],
    responses: {
      '200': {
        description: 'Ask job request was successfully submitted',
        schema: {
          $ref: '#/definitions/AskJobResponse',
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
