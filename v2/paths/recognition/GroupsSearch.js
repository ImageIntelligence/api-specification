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
        name: 'RecognitionGroupsSearchRequest',
        in: 'body',
        schema: {
          $ref: '#/definitions/RecognitionGroupsSearchRequest',
        },
        required: true,
      },
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
