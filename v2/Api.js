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
    '/oauth/token': require('./paths/authentication/OAuthToken'),
    '/detect': Object.assign(
      require('./paths/detect/DetectCreate'),
      require('./paths/detect/DetectSearch')
    ),
    '/detect/{id}': require('./paths/detect/DetectGetById'),
    '/match': Object.assign(
      require('./paths/match/MatchCreate'),
      require('./paths/match/MatchSearch')
    ),
    '/match/{id}': require('./paths/match/MatchGetById'),
    '/ask': Object.assign(
      require('./paths/ask/AskCreate'),
      require('./paths/ask/AskSearch')
    ),
    '/ask/{id}': require('./paths/ask/AskGetById'),
    '/face-recognition/recognize': Object.assign(
      require('./paths/faceRecognition/RecognizeCreate'),
      require('./paths/faceRecognition/RecognizeSearch')
    ),
    '/face-recognition/recognize/{id}': require('./paths/faceRecognition/RecognizeGetById'),
    '/face-recognition/identities': Object.assign(
      require('./paths/faceRecognition/IdentityCreate'),
      require('./paths/faceRecognition/IdentitySearch')
    ),
    '/face-recognition/identities/{id}': Object.assign(
      require('./paths/faceRecognition/IdentityGetById'),
      require('./paths/faceRecognition/IdentityRemoveById'),
      require('./paths/faceRecognition/IdentityUpdateById')
    ),
    '/face-recognition/cluster-sets/compute': require('./paths/faceRecognition/ClusterSetCompute'),
    '/face-recognition/cluster-sets': require('./paths/faceRecognition/ClusterSetSearch'),
    '/face-recognition/cluster-sets/{id}': Object.assign(
      require('./paths/faceRecognition/ClusterSetGetById'),
      require('./paths/faceRecognition/ClusterSetRemoveById')
    ),
    '/face-recognition/faces': require('./paths/faceRecognition/FacesSearch'),
    '/face-recognition/faces/{id}': Object.assign(
      require('./paths/faceRecognition/FacesGetById')
    ),
    '/feedback': Object.assign(
      require('./paths/feedback/FeedbackCreate'),
      require('./paths/feedback/FeedbackSearch')
    ),
    '/feedback/{id}': require('./paths/feedback/FeedbackGetById'),
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

    DetectJobRequest: require('./definitions/detect/DetectJobRequest'),
    DetectJobResponse: require('./definitions/detect/DetectJobResponse'),
    DetectJobResponseItem: require('./definitions/detect/DetectJobResponseItem'),

    // Match //

    MatchJobRequest: require('./definitions/match/MatchJobRequest'),
    MatchJobResponse: require('./definitions/match/MatchJobResponse'),

    // Ask //

    AskJobRequest: require('./definitions/ask/AskJobRequest'),
    AskJobResponse: require('./definitions/ask/AskJobResponse'),

    // FaceRecognition //

    FaceRecognitionRecognizeJobRequest: require('./definitions/faceRecognition/RecognizeJobRequest'),
    FaceRecognitionRecognizeJobResponse: require('./definitions/faceRecognition/RecognizeJobResponse'),
    FaceRecognitionIdentityCreateRequest: require('./definitions/faceRecognition/IdentityCreateRequest'),
    FaceRecognitionIdentityUpdateRequest: require('./definitions/faceRecognition/IdentityUpdateRequest'),
    FaceRecognitionIdentityResponse: require('./definitions/faceRecognition/IdentityResponse'),
    FaceRecognitionFaceResponse: require('./definitions/faceRecognition/FaceResponse'),
    FaceRecognitionClusterSetComputeRequest: require('./definitions/faceRecognition/ClusterSetComputeRequest'),
    FaceRecognitionClusterSetResponse: require('./definitions/faceRecognition/ClusterSetResponse'),

    // Feedback //

    FeedbackRequest: require('./definitions/feedback/FeedbackRequest'),
    FeedbackRequestClassItem: require('./definitions/feedback/FeedbackRequestClassItem'),
    FeedbackResponse: require('./definitions/feedback/FeedbackResponse'),
  },
};
