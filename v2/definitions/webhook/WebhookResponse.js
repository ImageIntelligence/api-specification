module.exports = {
  type: 'object',
  description: 'The response to a webhook registration request',
  required: ['id', 'url', 'application', 'organizationId', 'createdAt'],
  properties: {
    id: {
      type: 'string'
    },
    url: {
      type: 'string'
    },
    secretKey: {
      type: 'string'
    },
    application: {
      type: 'string'
    },
    organizationId: {
      type: 'string'
    },
    createdAt: {
      type: 'number'
    }
  },
  example: {
    id: 'c35eed26-2724-4823-871e-df29a44fbe69',
    url: 'https://api.acme.com/callbacks',
    application: 'test-app',
    organizationId: 'acme',
    secretKey: 'lYIzEz2xkJmvJosjXO0T8ZEnDhPjTtBTcErTv9hM0MX86w0UShSQ9qEXC3Fc6SJA',
    createdAt: 1553053749994
  }
};
