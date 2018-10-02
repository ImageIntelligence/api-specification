module.exports = {
  get: {
    operationId: 'face-recognition/group-search',
    security: [
      {
        Bearer: [],
      },
    ],
    parameters: [],
    responses: {
      '200': {
        description: 'A list of groups that exist in the system',
        schema: {
          type: 'array',
          items: {
            $ref: '#/definitions/FaceRecognitionGroupResponse',
          },
        },
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
