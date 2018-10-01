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
      require('./paths/detect/DetectSearch'),
    ),
    '/detect/{id}': require('./paths/detect/DetectGetById'),
    '/match': Object.assign(
      require('./paths/match/MatchCreate'),
      require('./paths/match/MatchSearch'),
    ),
    '/match/{id}': require('./paths/match/MatchGetById'),
    '/ask': Object.assign(
      require('./paths/ask/AskCreate'),
      require('./paths/ask/AskSearch'),
    ),
    '/ask/{id}': require('./paths/ask/AskGetById'),
    '/face-recognition/recognize': Object.assign(
      require('./paths/faceRecognition/RecognizeCreate'),
      require('./paths/faceRecognition/RecognizeSearch'),
    ),
    '/face-recognition/recognize/{id}': require('./paths/faceRecognition/RecognizeGetById'),
    '/face-recognition/groups': Object.assign(
      require('./paths/faceRecognition/GroupCreate'),
      require('./paths/faceRecognition/GroupSearch'),
    ),
    '/face-recognition/groups/{id}': require('./paths/faceRecognition/GroupGetById'),
    '/face-recognition/identities': Object.assign(
      require('./paths/faceRecognition/IdentityCreate'),
      require('./paths/faceRecognition/IdentitySearch'),
      require('./paths/faceRecognition/IdentityUpdate'),
    ),
    '/face-recognition/identities/{id}': Object.assign(
      require('./paths/faceRecognition/IdentityGetById'),
      require('./paths/faceRecognition/IdentityRemoveById'),
    ),
    '/face-recognition/cluster-sets/compute': require('./paths/faceRecognition/ClusterSetCompute'),
    '/face-recognition/cluster-sets': require('./paths/faceRecognition/ClusterSetSearch'),
    '/face-recognition/cluster-sets/{id}': require('./paths/faceRecognition/ClusterSetGetById'),
    '/feedback': Object.assign(
      require('./paths/feedback/FeedbackCreate'),
      require('./paths/feedback/FeedbackSearch'),
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

    FaceRecognitionRecognizeJobRequest: require('./definitions/faceRecognition/RecognizeJobRequest'),
    FaceRecognitionRecognizeJobResponse: require('./definitions/faceRecognition/RecognizeJobResponse'),
    FaceRecognitionGroupCreateRequest: require('./definitions/faceRecognition/GroupCreateRequest'),
    FaceRecognitionGroupResponse: require('./definitions/faceRecognition/GroupResponse'),
    FaceRecognitionIdentityCreateRequest: require('./definitions/faceRecognition/IdentityCreateRequest'),
    FaceRecognitionIdentityUpdateRequest: require('./definitions/faceRecognition/IdentityUpdateRequest'),
    FaceRecognitionIdentityResponse: require('./definitions/faceRecognition/IdentityResponse'),
    FaceRecognitionClusterSetComputeRequest: require('./definitions/faceRecognition/ClusterSetComputeRequest'),
    FaceRecognitionClusterSetComputeResponse: require('./definitions/faceRecognition/ClusterSetComputeResponse'),
    FaceRecognitionClusterSetResponse: require('./definitions/faceRecognition/ClusterSetResponse'),

    // Feedback //

    FeedbackRequest: require('./definitions/FeedbackRequest'),
    FeedbackRequestClassItem: require('./definitions/FeedbackRequestClassItem'),
    FeedbackResponse: require('./definitions/FeedbackResponse'),
  },
};
