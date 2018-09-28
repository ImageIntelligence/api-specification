module.exports = {
  type: 'object',
  required: [
    'id',
    'name',
    'createdAt',
    'identityIds'
  ],
  properties: {
    id: {
      type: 'string',
    },
    name: {
      type: 'string',
      description: 'The name of your group (e.g. ACME)',
      maxLength: 256,
    },
    createdAt: {
      type: 'integer',
      format: 'int64',
      description: 'UNIX timestamp for when the group was created',
    },
    identityIds: {
      type: 'array',
      description: 'An array of identity IDs, initially empty (new group)',
      items: {
        type: 'string',
      },
    },
  },
  example: {
    id: '27de906d-9fd8-423c-9ed2-044ccf46ab6a',
    name: 'Image Intelligence',
    identityIds: [
      'a710d452-71c6-4794-9560-a3e94b374c14',
      '9334ad28-5790-46d3-aa48-0af4b197159b',
      '8509b105-ec6f-4e39-80ab-025f4ba974de'
    ],
    createdAt: 1487648348
  },
};
