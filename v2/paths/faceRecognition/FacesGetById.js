module.exports = {
  get: {
    operationId: 'face-recognition/faces-get',
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
        description: 'The ID of a face recognition face',
        required: true,
      },
    ],
    responses: {
      '200': {
        description: 'Face resource given ID successfully returned',
        schema: {
          $ref: '#/definitions/FaceRecognitionFaceResponse',
        },
      },
      '401': {
        description: 'Unauthorized',
      },
      '403': {
        description: 'Forbidden',
      },
      '404': {
        description: 'No face found with the given ID',
      },
      '500': {
        description: 'Internal server error',
      },
    },
  },
};
