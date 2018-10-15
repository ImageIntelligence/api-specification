module.exports = {
  type: 'object',
  required: [
    'groupId',
  ],
  properties: {
    groupId: {
      type: 'string',
    },
    minImageSize: {
      type: 'object',
      required: [
        'height',
        'width',
      ],
      properties: {
        height: {
          type: 'number',
          format: 'int32',
          default: 100,
        },
        width: {
          type: 'number',
          format: 'int32',
          default: 100,
        },
      },
    },
  },
  example: {
    groupId: '633091ed-4c05-459b-b9dc-061c66591f92',
    minImageSize: {
      width: 128,
      height: 128,
    },
  },
};
