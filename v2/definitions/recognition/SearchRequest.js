module.exports = {
  type: 'object',
  properties: {
    limit: {
      type: 'number',
      description: 'Number of maximum objects in the query',
      minimum: 1,
      maximum: 100,
      default: 20
    },
    offset: {
      type: 'number',
      description: 'Number of results to skip before returning a result',
      minimum: 0,
      maximum: 100,
      default: 0
    },
    start: {
      type: 'number',
      description: 'Search for created after this timestamp'
    },
    end: {
      type: 'number',
      description: 'Search for created before this timestamp'
    },
    sortBy: {
      type: 'string',
      enum: ['ASC', 'DESC'],
      default: 'DESC',
      description: 'Sort search by an ID'
    },
    ids: {
      description: 'A list of resource ids to search against (e.g. imageId or identityId)',
      type: 'array',
      items: {
        type: 'string',
        maximum: 100
      }
    },
    feedIds: {
      description:
        'A list of user defined feedIds to search against (if null then all resources without a feedId will be returned)',
      type: 'array',
      items: {
        type: 'string',
        maximum: 20
      }
    },
    customIds: {
      description: 'A list of user defined customIds to search against (same null property as feedIds)',
      type: 'array',
      items: {
        type: 'string',
        maximum: 20
      }
    }
  },
  example: {
    limit: 50,
    start: 1551665066,
    end: 1551666066,
    sortBy: 'ASC',
    ids: [
      '99f65ae1-9ce9-495a-891b-418e87c90941',
      'bc98e809-c46b-4792-be3e-c57be414642b',
      '65dd9554-ce46-4a29-bcd7-eeb48683b421'
    ]
  }
};
