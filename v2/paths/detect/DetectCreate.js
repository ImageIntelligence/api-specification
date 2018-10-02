module.exports = {
  post: {
    operationId: 'detect',
    security: [
      {
        Bearer: [],
      },
    ],
    parameters: [
      {
        name: 'DetectJobRequest',
        in: 'body',
        schema: {
          $ref: '#/definitions/DetectJobRequest',
        },
        required: true,
      },
    ],
    responses: {
      '200': {
        description: 'Detect job request was successfully submitted',
        schema: {
          $ref: '#/definitions/DetectJobResponse',
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
