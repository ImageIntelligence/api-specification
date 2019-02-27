module.exports = {
  get: {
    operationId: 'recognition/recognize-search',
    security: [
      {
        Bearer: [],
      },
    ],
    parameters: [
      {
        name: 'limit',
        in: 'query',
        description: 'Number of maximum objects in the query',
        type: 'number',
        required: true,
      },
      {
        name: 'offset',
        in: 'query',
        description: '',
        type: 'number',
        required: true,
      },
      {
        name: 'start',
        in: 'query',
        description: 'Pagination, the page to start at',
        type: 'number',
        required: false,
      },
      {
        name: 'end',
        in: 'query',
        description: 'Pagination, the page to end at',
        type: 'number',
        required: false,
      },
      {
        name: 'sortBy',
        in: 'query',
        description: 'Sort group search by an ID',
        type: 'number',
        required: false,
      },
      {
        name: 'ids',
        in: 'query',
        description: 'A list of group IDs to search for',
        type: 'array',
        items: {
          type: 'string',
          minItems: 1,
        },
        required: false,
      }
    ],
    responses: {
      '200': {
        description: 'A list of jobs found given your search criteria',
        schema: {
          type: 'array',
          items: {
            $ref: '#/definitions/RecognitionGroupsSearchResponse',
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
