module.exports = {
  type: 'object',
  description: 'The image processed',
  required: [
    'url',
  ],
  properties: {
    url: {
      type: 'string',
      description: 'URL of the image',
    },
    proxyUrl: {
      type: 'string',
      description: 'Proxy URL of the image',
    },
    customId: {
      type: 'string',
      description: 'An arbitrary client specific resource identifier to reference this image (usually uuid)',
    },
  },
  example: {
    url: 'https://publicly.available.domain.net/image-001.jpg',
    proxyUrl: 'https://api.quickpix.io/images/c7e9a2ca-c2ee-4290-90b4-04fe3df35be0',
    customId: '0285a6b8-a617-11e6-8253-175f847ef3cf',
  },
};
