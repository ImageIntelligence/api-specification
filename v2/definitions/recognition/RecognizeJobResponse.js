module.exports = {
  type: 'object',
  description: 'The response to a face recognition job request',
  required: ['id', 'images', 'status', 'createdAt'],
  properties: {
    id: {
      type: 'string'
    },
    status: {
      $ref: '#/definitions/JobStatus'
    },
    customId: {
      type: 'string',
      description: 'An arbitrary client specific resource identifier to reference this job (usually UUID)'
    },
    feedId: {
      type: 'string',
      description: 'User specified ID to reference the source of the images within this job'
    },
    webhookUrl: {
      type: 'string',
      description: 'Publicly accessible POST endpoint for receiving job status updates'
    },
    createdAt: {
      type: 'integer',
      format: 'int64',
      description: 'UNIX timestamp for when the job was created'
    },
    images: {
      type: 'array',
      items: {
        type: 'object',
        required: ['id', 'url', 'status', 'objects'],
        properties: {
          id: {
            type: 'string',
            description: 'ID of the image'
          },
          url: {
            type: 'string',
            description: 'URL of the image'
          },
          proxyUrl: {
            type: 'string',
            description: 'Proxy URL of the image'
          },
          customId: {
            type: 'string',
            description: 'An arbitrary client specific resource identifier to reference this image (usually UUID)'
          },
          objects: {
            type: 'array',
            items: {
              type: 'object',
              required: ['boundingBox', 'confidence', 'createdAt'],
              properties: {
                identityId: {
                  type: 'string'
                },
                confidence: {
                  type: 'number',
                  format: 'float'
                },
                boundingBox: {
                  $ref: '#/definitions/BoundingBox'
                },
                createdAt: {
                  type: 'integer',
                  format: 'int64',
                  description: 'UNIX timestamp for when the face was created'
                }
              }
            }
          }
        }
      }
    }
  },
  example: {
    id: '5d689c71-e68f-46c3-ac71-4053806e71de',
    createdAt: 1487648348000,
    status: 'COMPLETED_SUCCESSFULLY',
    customId: '6c78df0a-67b6-4d5f-93cf-5820cfee501c',
    feedId: 'Camera_123456',
    webhookUrl: 'https://publicly.available.domain.net/90f8754aa4e287bbb2c07ec99ade0de72ddbd4b6Et',
    images: [
      {
        id: '3534852e-9d44-48d1-b42a-9d14f3652032',
        url: 'https://images.example.com/5673605764397232.jpg',
        proxyUrl: 'https://proxy.images.example.com/5673605764397232.jpg',
        customId: 'a7e0bc2d-3226-46da-b242-9bb40666b14a',
        objects: [
          {
            confidence: 0.410791,
            boundingBox: {
              xMin: 0.23873,
              yMin: 0.23873,
              xMax: 0.75087,
              yMax: 0.96537
            },
            createdAt: 1534481491910
          },
          {
            identityId: '81e45841-4996-433d-9138-3383214176d1',
            confidence: 0.05628731,
            boundingBox: {
              xMin: 0.23873,
              yMin: 0.23873,
              xMax: 0.75087,
              yMax: 0.96537
            },
            createdAt: 1534481491901
          }
        ]
      }
    ]
  }
};
