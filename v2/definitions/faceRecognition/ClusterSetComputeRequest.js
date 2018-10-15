module.exports = {
  type: 'object',
  required: [
    'groupId',
  ],
  properties: {
    groupId: {
      type: 'string',
    },
    minWidth: {
      type: 'number',
      format: 'int32',
      default: 64,
    },
    minHeight: {
      type: 'number',
      format: 'int32',
      default: 64,
    },
  },
  example: {
    groupId: '633091ed-4c05-459b-b9dc-061c66591f92',
    minWidth: 32,
    minHeight: 32,
  },
};
