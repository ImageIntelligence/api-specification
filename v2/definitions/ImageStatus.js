module.exports = {
  type: 'string',
  description: 'The processing status for an image',
  enum: [
    'COMPLETED_SUCCESSFULLY',
    'IMAGE_DOWNLOAD_ERROR',
    'INVALID_IMAGE_FORMAT_ERROR',
    'UNKNOWN_ERROR',
    'IN_PROGRESS',
  ],
};
