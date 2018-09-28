module.exports = {
  type: 'string',
  description: 'The status for a job',
  enum: [
    'COMPLETED_SUCCESSFULLY',
    'COMPLETED_PARTIAL_ERROR',
    'COMPLETED_ALL_ERROR',
    'IN_PROGRESS',
  ],
};
