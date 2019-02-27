module.exports = {
  post: {
    operationId: 'recognition/groups-search',
    security: [
      {
        Bearer: [],
      },
    ],
    parameters: [
      {
        name: 'limit',
        in: 'body',
        description: 'Number of maximum objects in the query',
        type: 'number',
        required: true,
      },
      {
        name: 'offset',
        in: 'body',
        description: 'Number of results to skip before returning a result',
        type: 'number',
        required: true,
      },
      {
        name: 'start',
        in: 'body',
        description: 'Pagination, the page to start at',
        type: 'number',
        required: false,
      },
      {
        name: 'end',
        in: 'body',
        description: 'Pagination, the page to end at',
        type: 'number',
        required: false,
      },
      {
        name: 'sortBy',
        in: 'body',
        description: 'Sort group search by an ID',
        type: 'number',
        required: false,
      },
      {
        name: 'ids',
        in: 'body',
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
