module.exports = {
  type: 'object',
  required: [
    'name',
  ],
  properties: {
    name: {
      type: 'string',
      description: 'The name of your group (e.g. ACME)',
      maxLength: 256,
    },
  },
  example: {
    name: 'Image Intelligence'
  },
};
