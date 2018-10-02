module.exports = {
  post: {
    operationId: 'face-recognition/cluster-set-compute',
    security: [
      {
        Bearer: [],
      },
    ],
    parameters: [
      {
        name: 'FaceRecognitionClusterSetComputeRequest',
        in: 'body',
        schema: {
          $ref: '#/definitions/FaceRecognitionClusterSetComputeRequest',
        },
        required: true,
      },
    ],
    responses: {
      '200': {
        description: 'Face recognition compute cluster set request successful',
        schema: {
          $ref: '#/definitions/FaceRecognitionClusterSetComputeResponse',
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
