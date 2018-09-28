module.exports = {
  swagger: '2.0',
  host: 'api.imageintelligence.com',
  basePath: '/v2',
  info: {
    version: require('../package.json').version || '2',
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
    '/feedback': require('./paths/Feedback'),
    '/feedback/{id}': require('./paths/FeedbackGetById'),
    '/face-recognition/recognize': require('./paths/faceRecognition/RecognizeCreate'),
  },
  definitions: {
    // Common //
    BoundingBox: require('./definitions/common/BoundingBox'),
    ImageStatus: require('./definitions/common/ImageStatus'),
    JobStatus: require('./definitions/common/JobStatus'),
    ImageRequestItem: require('./definitions/common/ImageRequestItem'),
    ImageResponseItem: require('./definitions/common/ImageResponseItem'),

    // Authentication //

    ClientCredentials: require('./definitions/authentication/ClientCredentials'),
    AccessTokenResponse: require('./definitions/authentication/AccessTokenResponse'),

    // Detect //

    DetectJobRequest: require('./definitions/DetectJobRequest'),
    DetectJobResponse: require('./definitions/DetectJobResponse'),
    DetectJobResponseItem: require('./definitions/DetectJobResponseItem'),

    // Match //

    MatchJobRequest: require('./definitions/MatchJobRequest'),
    MatchJobResponse: require('./definitions/MatchJobResponse'),

    // Ask //

    AskJobRequest: require('./definitions/AskJobRequest'),
    AskJobResponse: require('./definitions/AskJobResponse'),

    // FaceRecognition //

    FaceRecognitionCreateJobRequest: require('./definitions/faceRecognition/CreateJobRequest'),
    FaceRecognitionCreateJobResponse: require('./definitions/faceRecognition/CreateJobResponse'),

    // Feedback //

    FeedbackRequest: require('./definitions/FeedbackRequest'),
    FeedbackRequestClassItem: require('./definitions/FeedbackRequestClassItem'),
    FeedbackResponse: require('./definitions/FeedbackResponse'),
  },
};
