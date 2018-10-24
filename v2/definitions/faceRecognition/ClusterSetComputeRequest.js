module.exports = {
  type: 'object',
  required: [
    'groupId',
  ],
  properties: {
    groupId: {
      type: 'string',
    },
    faceIds: {
      type: 'array',
      items: {
        type: 'string',
      },
      maxItems: 512,
      minItems: 1,
    },
  },
  example: {
    groupId: '633091ed-4c05-459b-b9dc-061c66591f92',
    faceIds: [
      '26df79e3-04b9-4cab-a102-875a841d7123',
      'fb37f2b6-4232-4083-98f1-dc9de6c4db45',
      'b0892abf-d4f0-4d81-af7c-5b067a8c9d37'
    ],
  },
};
