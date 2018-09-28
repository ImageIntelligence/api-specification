module.exports = {
  type: 'string',
  description: 'The processing status for an image',
  enum: [    
    'COMPLETED_SUCCESSFULLY',
    'IN_PROGRESS',
    'UNKNOWN_ERROR',
    'JOB_ERROR',
    'IMAGE_DOWNLOAD_ERROR',
    'INVALID_IMAGE_FORMAT_ERROR',
    'SPIDERWEBS_ERROR',
    'DETECTION_ENGINE_ERROR',
    'MODEL_SERVICE_ERROR',
    'MALFORMED_MESSAGE_ERROR'
  ],
};
