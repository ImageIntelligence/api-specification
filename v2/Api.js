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
    '/find-target': require('./paths/FindTarget'),
    '/find-target/{id}': require('./paths/FindTargetGetById'),
    '/answer': require('./paths/Answer'),
    '/answer/{id}': require('./paths/AnswerGetById'),
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

    FindTargetJobRequest: require('./definitions/FindTargetJobRequest'),
    FindTargetJobResponse: require('./definitions/FindTargetJobResponse'),

    AnswerJobRequest: require('./definitions/AnswerJobRequest'),
    AnswerJobResponse: require('./definitions/AnswerJobResponse'),
  },
};
