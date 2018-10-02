module.exports = {
  type: 'object',
  description: 'Pixel coordinates used to represent a region of interest',
  required: [
    'xMin',
    'yMin',
    'xMax',
    'yMax',
  ],
  properties: {
    xMin: {
      type: 'number',
      format: 'int32',
    },
    yMin: {
      type: 'number',
      format: 'int32',
    },
    xMax: {
      type: 'number',
      format: 'int32',
    },
    yMax: {
      type: 'number',
      format: 'int32',
    },
  },
};
