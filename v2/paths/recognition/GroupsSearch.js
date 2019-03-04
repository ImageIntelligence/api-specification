module.exports = {
  post: {
    operationId: 'recognition/groups-search',
    security: [
      {
        Bearer: []
      }
    ],
    parameters: [
      {
        name: 'namespace',
        type: 'string',
        description: "Groups' namespace",
        in: 'path',
        required: true
      },
      {
        name: 'RecognitionSearchRequest',
        in: 'body',
        schema: {
          $ref: '#/definitions/RecognitionSearchRequest'
        },
        required: true
      }
    ],
    responses: {
      '200': {
        description: 'A list of jobs found given your search criteria',
        schema: {
          type: 'array',
          items: {
            $ref: '#/definitions/RecognitionGroupsResponse'
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
