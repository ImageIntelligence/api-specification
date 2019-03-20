module.exports = {
  type: 'object',
  required: ['url'],
  properties: {
    url: {
      type: 'string',
      description: 'Publicly accessible POST endpoint for receiving events from the API',
      maxLength: 2048
    },
    secretKey: {
      type: 'string',
      description: 'Private key used to cryptographically sign the webhook request payload',
      minLength: 8,
      maxLength: 256
    }
  },
  example: {
    url: 'https://api.acme.com/callbacks',
    secretKey: 'lYIzEz2xkJmvJosjXO0T8ZEnDhPjTtBTcErTv9hM0MX86w0UShSQ9qEXC3Fc6SJA'
  }
};
