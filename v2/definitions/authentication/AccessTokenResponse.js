module.exports = {
  type: 'object',
  required: ['accessToken', 'expiresAt', 'issuedAt', 'orgName', 'appName', 'scope'],
  properties: {
    accessToken: {
      type: 'string',
      description: 'A generated access token used to authenticate with the API'
    },
    expiresAt: {
      type: 'number',
      format: 'int64',
      description: 'The UNIX timestamp for when this access token expires'
    },
    issuedAt: {
      type: 'number',
      format: 'int64',
      description: 'The UNIX timestamp for when this access token was generated'
    },
    orgName: {
      type: 'string',
      description: 'Name of the organization this token belongs to'
    },
    appName: {
      type: 'string',
      description: 'Name of the application this access token was generated from'
    },
    scope: {
      type: 'string',
      description: 'A list of space delimited scopes'
    }
  },
  example: {
    accessToken: 'eyJzdHQiOiJhY2....xUC3RJFY1T8',
    expiresAt: 1489105452385,
    issuedAt: 1489019052385,
    orgName: 'acme',
    appName: 'acme-app',
    scope:
      'recognition:read recognition:create recognition:update recognition:remove ask:read ask:create match:read match:create feedback:create feedback:read detect:create detect:read find-target:create find-target:read find-object:create find-object:read'
  }
};
