module.exports = {
  type: 'object',
  description: 'The response to a answer request',
  required: [
    'id',
    'createdAt',
    'status',
    'question',
    'jobResults'
  ],
  properties: {
    id: {
      type: 'string',
    },
    createdAt: {
      type: 'integer',
      format: 'int64',
      description: 'UNIX timestamp for when the job was created',
    },
    status: {
      $ref: '#/definitions/JobStatus',
    },
    customId: {
      type: 'string',
      description: 'An arbitrary client specific resource identifier to reference this job (usually UUID)',
    },
    feedId: {
      type: 'string',
      description: 'User specified ID to reference the source of the images within this job',
    },
    webhookUrl: {
      type: 'string',
      description: 'Publicly accessible POST endpoint for receiving job status updates',
    },
    question: {
      type: 'string',
      description: 'The Yes/No question to be answered',
      maxLength: 256,
    },
    jobResults: {
      type: 'object',
      required: [ ],
      properties: {
        image: {
          type: 'object',
          $ref: '#/definitions/ImageResponseItem',
        }
      },
    },
  },
  example: {
    id: '5d689c71-e68f-46c3-ac71-4053806e71de',
    jobResults: {
      image: {
        url: 'https://publicly.available.domain.net/image-001.jpg',
        customId: 'some_garage_door_open_image',
        proxyUrl: 'https://api.quickpix.io/images/c7e9a2ca-c2ee-4290-90b4-04fe3df35be0',
      },
    },
    question: 'Is my garage door open?',
    createdAt: 1487648348,
    status: 'COMPLETED_SUCCESSFULLY',
    customId: '6c78df0a-67b6-4d5f-93cf-5820cfee501c',
    feedId: 'Camera_123456',
    webhookUrl: 'https://publicly.available.domain.net/90f8754aa4e287bbb2c07ec99ade0de72ddbd4b6Et',
  },
};
