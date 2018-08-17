module.exports = {
  type: 'object',
  description: 'The class and type or error you encountered',
  required: [
    'class',
    'code',
  ],
  properties: {
    class: {
      type: 'string',
      description: 'The class you found an isse with'
    },
    code: {
      type: 'string',
      enum: [
        'FALSE_POSITIVE',
        'FALSE_NEGATIVE',
      ],
      description: 'The type of error you encountered',
    },
  },
  example: {
    class: 'person',
    code: 'FALSE_POSITIVE',
  },
};
