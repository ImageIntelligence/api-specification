module.exports = {
  post: {
    operationId: 'match',
    security: [
      {
        Bearer: [],
      },
    ],
    parameters: [
      {
        name: 'MatchJobRequest',
        in: 'body',
        schema: {
          $ref: '#/definitions/MatchJobRequest',
        },
        required: true,
      },
    ],
    responses: {
      '200': {
        description: 'Match job request was successfully submitted',
        schema: {
          $ref: '#/definitions/MatchJobResponse',
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
  get: {
    operationId: 'match-search',
    security: [
      {
        Bearer: [],
      },
    ],
    parameters: [
      {
        name: 'page',
        in: 'query',
        description: 'Pagination, the page to start at',
        type: 'number',
        required: false,
        default: 1,
      },
      {
        name: 'customId',
        in: 'query',
        description: 'Search for jobs with this custom ID',
        type: 'string',
        required: false,
      },
      {
        name: 'feedId',
        in: 'query',
        description: 'Search for jobs with this feed ID',
        type: 'string',
        required: false,
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
        description: 'A list of jobs found given your search criteria',
        schema: {
          type: 'array',
          items: {
            $ref: '#/definitions/MatchJobResponse',
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
