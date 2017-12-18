module.exports = {
  post: {
    operationId: 'answer',
    security: [
      {
        Bearer: [],
      },
    ],
    parameters: [
      {
        name: 'AnswerJobRequest',
        in: 'body',
        schema: {
          $ref: '#/definitions/AnswerJobRequest',
        },
        required: true,
      },
    ],
    responses: {
      '200': {
        description: 'Answer job request was successfully submitted',
        schema: {
          $ref: '#/definitions/AnswerJobResponse',
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
      '500': {
        description: 'Internal server error',
      },
    },
  },
  get: {
    operationId: 'answer-search',
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
            $ref: '#/definitions/AnswerJobResponse',
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
