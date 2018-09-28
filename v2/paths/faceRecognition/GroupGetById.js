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
        description: 'Face recognition group request was successfully submitted',
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
      '500': {
        description: 'Internal server error',
      },
    },
  },
};
