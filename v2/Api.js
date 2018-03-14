module.exports = {
  swagger: '2.0',
  host: 'api.imageintelligence.com',
  basePath: '/v2',
  info: {
    version: require('../package.json').version,
    title: 'Image Intelligence API Documentation',
  },
  schemes: [
    'https',
  ],
  produces: [
    'application/json',
  ],
  consumes: [
    'application/json',
  ],
  securityDefinitions: {
    Bearer: {
      name: 'Authorization',
      description: 'Bearer token based authentication',
      type: 'apiKey',
      in: 'header',
    },
  },
  paths: {
    '/oauth/token': require('./paths/OAuthToken'),
    '/detect': require('./paths/Detect'),
    '/detect/{id}': require('./paths/DetectGetById'),
    '/match': require('./paths/Match'),
    '/match/{id}': require('./paths/MatchGetById'),
    '/ask': require('./paths/Ask'),
    '/ask/{id}': require('./paths/AskGetById'),
  },
  definitions: {
    ClientCredentials: require('./definitions/ClientCredentials'),
    AccessTokenResponse: require('./definitions/AccessTokenResponse'),
    ImageStatus: require('./definitions/ImageStatus'),
    JobStatus: require('./definitions/JobStatus'),

    ImageRequestItem: require('./definitions/ImageRequestItem'),
    ImageResponseItem: require('./definitions/ImageResponseItem'),

    DetectJobRequest: require('./definitions/DetectJobRequest'),
    DetectJobResponse: require('./definitions/DetectJobResponse'),
    DetectJobResponseItem: require('./definitions/DetectJobResponseItem'),

    MatchJobRequest: require('./definitions/MatchJobRequest'),
    MatchJobResponse: require('./definitions/MatchJobResponse'),

    AskJobRequest: require('./definitions/AskJobRequest'),
    AskJobResponse: require('./definitions/AskJobResponse'),
  },
};
