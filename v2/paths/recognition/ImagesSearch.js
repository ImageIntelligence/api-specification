module.exports = {
  get: {
    operationId: 'recognition/images-search',
    security: [
      {
        Bearer: [],
      },
    ],
    parameters: [
      {
        name: 'namespace',
        type: 'string',
        description: 'Groups\' namespace',
        in: 'path',
        required: true,
      },
      {
        name: 'before',
        in: 'query',
        description: 'Search for faces created before this timestamp',
        type: 'number',
        required: false,
      },
      {
        name: 'after',
        in: 'query',
        description: 'Search for faces created after this timestamp',
        type: 'number',
        required: false,
      },
      {
        name: 'minWidth',
        in: 'query',
        type: 'number',
        format: 'int32',
        description: 'Faces with a smaller width than this will be excluded'
      },
      {
        name: 'minHeight',
        in: 'query',
        type: 'number',
        format: 'int32',
        description: 'Faces with a smaller height than this will be excluded',
      },
    ],
    responses: {
      '200': {
        description: 'A list of faces found given your search criteria',
        schema: {
          type: 'array',
          items: {
            $ref: '#/definitions/RecognitionFaceResponse',
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
