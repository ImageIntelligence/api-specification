module.exports = {
  get: {
    operationId: 'video-get',
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
        description: 'The ID of a video job',
        required: true,
      },
    ],
    responses: {
      '200': {
        description: 'Resources from the video job successfully returned',
        schema: {
          $ref: '#/definitions/VideoJobResponse',
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
