module.exports = {
  post: {
    operationId: 'recognition/cluster-set-compute',
    security: [
      {
        Bearer: [],
      },
    ],
    parameters: [
      {
        name: 'RecognitionClusterSetComputeRequest',
        in: 'body',
        schema: {
          $ref: '#/definitions/RecognitionClusterSetComputeRequest',
        },
        required: true,
      },
    ],
    responses: {
      '200': {
        description: 'Face recognition compute cluster set request successful',
        schema: {
          $ref: '#/definitions/RecognitionClusterSetResponse',
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
};
