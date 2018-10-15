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
      description: 'Faces with a smaller width than this will be excluded',
    },
    minHeight: {
      type: 'number',
      format: 'int32',
      default: 64,
      description: 'Faces with a smaller height than this will be excluded',
    },
  },
  example: {
    groupId: '633091ed-4c05-459b-b9dc-061c66591f92',
    minWidth: 32,
    minHeight: 32,
  },
};
