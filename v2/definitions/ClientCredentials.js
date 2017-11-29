module.exports = {
  type: 'object',
  required: [
    'clientId',
    'clientSecret',
  ],
  properties: {
    clientId: {
      type: 'string',
      description: "Your application's clientId",
    },
    clientSecret: {
      type: 'string',
      description: "Your application's clientSecret",
    },
  },
  example: {
    clientId: '69VYLJO2W9S53ARW45QYPABCX',
    clientSecret: 'ABCSErTf78aRDPABC/r41AOIW2MlMoZR3lGgMABCDg',
  },
};
