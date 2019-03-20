module.exports = {
  post: {
    operationId: 'webhooks/register',
    security: [
      {
        Bearer: []
      }
    ],
    parameters: [
      {
        name: 'WebhookRegisterRequest',
        in: 'body',
        schema: {
          $ref: '#/definitions/WebhookRegisterRequest'
        },
        required: true
      }
    ],
    responses: {
      '200': {
        description: 'Successfully registered a webhook',
        schema: {
          $ref: '#/definitions/WebhookResponse'
        }
      },
      '400': {
        description: 'Malformed request'
      },
      '401': {
        description: 'Unauthorized'
      },
      '403': {
        description: 'Forbidden'
      },
      '500': {
        description: 'Internal server error'
      }
    }
  }
};
