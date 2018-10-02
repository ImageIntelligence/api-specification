module.exports = {
  get: {
    operationId: 'face-recognition/group-get',
    security: [
      {
        Bearer: [],
      },
    ],
    parameters: [
      {
        name: 'id',
        in: 'path',
        type: 'string',
        description: 'The ID of a face recognition group',
        required: true,
      },
    ],
    responses: {
      '200': {
        description: 'Face recognition group resource',
        schema: {
          $ref: '#/definitions/FaceRecognitionGroupResponse',
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
      '404': {
        description: 'No group found with the given ID',
      },
      '500': {
        description: 'Internal server error',
      },
    },
  },
};
