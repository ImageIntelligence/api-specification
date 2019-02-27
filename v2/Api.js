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
    '/recognition/recognize': Object.assign(
      require('./paths/recognition/RecognizeCreate'),
      require('./paths/recognition/RecognizeSearch')
    ),
    '/recognition/recognize/{id}': require('./paths/recognition/RecognizeGetById'),
    '/recognition/identities': Object.assign(
      require('./paths/recognition/IdentityCreate'),
      require('./paths/recognition/IdentitySearch')
    ),
    '/recognition/identities/{id}': Object.assign(
      require('./paths/recognition/IdentityGetById'),
      require('./paths/recognition/IdentityRemoveById'),
      require('./paths/recognition/IdentityUpdateById')
    ),
    '/recognition/groups/search': require('./paths/recognition/GroupsSearch'),
    '/recognition/cluster-sets/compute': require('./paths/recognition/ClusterSetCompute'),
    '/recognition/cluster-sets': require('./paths/recognition/ClusterSetSearch'),
    '/recognition/cluster-sets/{id}': Object.assign(
      require('./paths/recognition/ClusterSetGetById'),
      require('./paths/recognition/ClusterSetRemoveById')
    ),
    '/recognition/faces': require('./paths/recognition/FacesSearch'),
    '/recognition/faces/{id}': Object.assign(
      require('./paths/recognition/FacesGetById')
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

    // Recognition //

    RecognitionRecognizeJobRequest: require('./definitions/recognition/RecognizeJobRequest'),
    RecognitionRecognizeJobResponse: require('./definitions/recognition/RecognizeJobResponse'),
    RecognitionIdentityCreateRequest: require('./definitions/recognition/IdentityCreateRequest'),
    RecognitionIdentityUpdateRequest: require('./definitions/recognition/IdentityUpdateRequest'),
    RecognitionIdentityResponse: require('./definitions/recognition/IdentityResponse'),
    RecognitionFaceResponse: require('./definitions/recognition/FaceResponse'),
    RecognitionGroupsSearchResponse: require('./definitions/recognition/GroupsSearchResponse'),
    RecognitionClusterSetComputeRequest: require('./definitions/recognition/ClusterSetComputeRequest'),
    RecognitionClusterSetResponse: require('./definitions/recognition/ClusterSetResponse'),

    // Feedback //

    FeedbackRequest: require('./definitions/feedback/FeedbackRequest'),
    FeedbackRequestClassItem: require('./definitions/feedback/FeedbackRequestClassItem'),
    FeedbackResponse: require('./definitions/feedback/FeedbackResponse'),
  },
};
