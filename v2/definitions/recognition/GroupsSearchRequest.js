module.exports = {
  type: 'object',
  required: [],
  properties: {
    limit: {
      type: 'number',
      description: 'Number of maximum objects in the query',
      minimum: 1,
      maximum: 100,
      default: 20,
    },
    offset: {
      type: 'number',
      description: 'Number of results to skip before returning a result',
      minimum: 0,
      maximum: 100,
      default: 0,
    },
    start: {
      type: 'number',
      description: 'Pagination, the page to start at',
    },
    end: {
      type: 'number',
      description: 'Pagination, the page to end at',
    },
    sortBy: {
      type: 'string',
      description: 'Sort group search by an ID',
    },
    ids: {
      description: 'A list of group IDs to search for',
      type: 'array',
      items: {
        type: 'string',
        minItems: 1,
      },
    },
  },
  example: {
    limit: 5,
    offset: 1,
    start: 12,
    end: 50,
    sortBy: 5,
    ids: [ 5, 6, 7, 8, 9, 10 ],
  },
};
