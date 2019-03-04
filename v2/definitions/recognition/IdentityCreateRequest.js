module.exports = {
  type: 'object',
  properties: {
    customId: {
      type: 'string',
      description: 'Custom ID to use',
      maxLength: 256
    },
    imageIds: {
      type: 'array',
      description: 'A list of image ids you want associated with this identity',
      items: {
        type: 'string',
        minItems: 1
      }
    }
  },
  example: {
    customId: 'af278ded-5412-4916-bb5c-13769bfb7644',
    imageIds: [
      'af278ded-5412-4916-bb5c-13769bfb7644',
      '633081ed-4c05-459b-bddc-061c66581f92',
      'c3c61384-1861-4026-be2e-4d70646231c0'
    ]
  }
};
