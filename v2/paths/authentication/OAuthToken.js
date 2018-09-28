module.exports = {
  post: {
    summary: 'Generates an access token given your client credentials',
    parameters: [
      {
        name: 'ClientCredentials',
        in: 'body',
        required: true,
        description: 'Contains a client ID and secret',
        schema: {
          $ref: '#/definitions/ClientCredentials',
        },
      },
    ],
    responses: {
      '200': {
        description: 'Access token with organization name, time of issue, and time of expiry',
        schema: {
          $ref: '#/definitions/AccessTokenResponse',
        },
      },
      '400': {
        description: 'Malformed request',
      },
      '401': {
        description: 'Request failed due to invalid authentication credentials',
      },
      '500': {
        description: 'Internal server error',
      },
    },
  },
};
