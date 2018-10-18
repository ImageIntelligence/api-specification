module.exports = {
  type: 'object',
  description: 'The response to a feedback request',
  required: [
    'id',
    'jobId',
    'createdAt',
    'classes',
  ],
   properties: {
    id: {
      type: 'string',
    },
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
    id: '5d689c71-e68f-46c3-ac71-4053806e71de',
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
