module.exports = {
  type: 'object',
  description: 'An image you want to process',
  required: [
    'url',
  ],
  properties: {
    url: {
      type: 'string',
      description: 'URL of the image',
    },
    customId: {
      type: 'string',
      description: 'User specified ID to reference this item',
    },
  },
  example: {
    url: 'https://publicly.available.domain.net/image-001.jpg',
    customId: '0285a6b8-a617-11e6-8253-175f847ef3cf',
  },
};
