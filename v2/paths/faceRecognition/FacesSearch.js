module.exports = {
  get: {
    operationId: 'face-recognition/faces-search',
    security: [
      {
        Bearer: [],
      },
    ],
    parameters: [
      {
        name: 'groupId',
        in: 'query',
        description: 'Filter by groupIds that belong to your organisation',
        type: 'string',
        required: true,
      },
      {
        name: 'before',
        in: 'query',
        description: 'Search for jobs created before this timestamp',
        type: 'number',
        required: false,
      },
      {
        name: 'after',
        in: 'query',
        description: 'Search for jobs created after this timestamp',
        type: 'number',
        required: false,
      },
    ],
    responses: {
      '200': {
        description: 'A list of faces found given your search criteria',
        schema: {
          type: 'array',
          items: {
            $ref: '#/definitions/FaceRecognitionFaceResponse',
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
