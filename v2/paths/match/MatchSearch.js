module.exports = {
  get: {
    operationId: 'match-search',
    security: [
      {
        Bearer: []
      }
    ],
    parameters: [
      {
        name: 'customId',
        in: 'query',
        description: 'Search for jobs with this custom ID',
        type: 'string',
        required: false
      },
      {
        name: 'feedId',
        in: 'query',
        description: 'Search for jobs with this feed ID',
        type: 'string',
        required: false
      },
      {
        name: 'before',
        in: 'query',
        description: 'Search for jobs created before this timestamp',
        type: 'number',
        required: false
      },
      {
        name: 'after',
        in: 'query',
        description: 'Search for jobs created after this timestamp',
        type: 'number',
        required: false
      }
    ],
    responses: {
      '200': {
        description: 'A list of jobs found given your search criteria',
        schema: {
          type: 'array',
          items: {
            $ref: '#/definitions/MatchJobResponse'
          }
        }
      },
      '401': {
        description: 'Unauthorized'
      },
      '500': {
        description: 'Internal server error'
      }
    }
  }
};
