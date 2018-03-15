module.exports = {
  type: 'object',
  required: ['video', 'fps', 'classes'],
  properties: {
    video: {
      type: 'string',
      description: 'URL of the video',
      maxLength: 512,
    },
    fps: {
      type: 'integer',
      description: 'Number of frames to be classified, per second.',
      maximum: 2,
    },
    classes: {
      type: 'array',
      items: {
        type: 'object',
        required: ['class'],
        properties: {
          class: {
            type: 'string',
            description: 'A class (object) you want to search for',
          },
        },
      },
      minItems: 1,
    },
    webhookUrl: {
      type: 'string',
      description: 'Publicly accessible POST endpoint for receiving job status updates',
      maxLength: 512,
    },
    customId: {
      type: 'string',
      description:
        'An arbitrary client specific resource identifier to reference this job (usually UUID)',
      maxLength: 64,
    },
    feedId: {
      type: 'string',
      description: 'User specified ID to reference the source of the images within this job',
      maxLength: 64,
    },
  },
  example: {
    video: 'https://publicly.available.domain.net/videl-001.mp4',
    fps: 2,
    classes: [
      {
        class: 'person',
      },
    ],
    customId: '6c78df0a-67b6-4d5f-93cf-5820cfee501c',
    feedId: 'Camera_123456',
    webhookUrl: 'https://publicly.available.domain.net/90f8754aa4e287bbb2c07ec99ade0de72ddbd4b6Et',
  },
};
