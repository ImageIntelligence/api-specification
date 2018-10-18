module.exports = {
  type: 'object',
  description: 'The response to a feedback request',
  required: [
    'jobId',
    'createdAt',
    'classes',
  ],
  properties: {
    jobId: {
      type: 'string',
    },
    classes: {
      type: 'array',
      description: 'A list of classes and the feedback code',
      items: {
        $ref: '#/definitions/FeedbackRequestClassItem',
      },
      minItems: 1,
    },
    createdAt: {
      type: 'integer',
      format: 'int64',
      description: 'UNIX timestamp for when the feedback was created',
    },
  },
  example: {
    jobId: '24663aa2-7802-4626-a533-384a2fe6632b',
    classes: [
      {
        class: 'person',
        code: 'FALSE_NEGATIVE',
      },
      {
        class: 'car',
        code: 'FALSE_POSITIVE',
      },
    ],
    createdAt: 1534481491901,
  },
};
