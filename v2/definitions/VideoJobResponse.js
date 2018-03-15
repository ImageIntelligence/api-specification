module.exports = {
  type: 'object',
  description: 'The response to a video request',
  required: ['id', 'createdAt', 'status', 'video', 'fps', 'jobResults', 'imageResults'],
  properties: {
    id: {
      type: 'string',
    },
    createdAt: {
      type: 'integer',
      format: 'int64',
      description: 'UNIX timestamp for when the job was created',
    },
    status: {
      $ref: '#/definitions/JobStatus',
    },
    video: {
      type: 'string',
      description: 'URL of the video',
    },
    fps: {
      type: 'integer',
      description: 'Number of frames classified, per second.',
    },
    customId: {
      type: 'string',
      description:
        'An arbitrary client specific resource identifier to reference this job (usually UUID)',
    },
    feedId: {
      type: 'string',
      description: 'User specified ID to reference the source of the images within this job',
    },
    webhookUrl: {
      type: 'string',
      description: 'Publicly accessible POST endpoint for receiving job status updates',
    },
    jobResults: {
      type: 'array',
      items: {
        type: 'object',
        required: ['class', 'hitl'],
        properties: {
          class: {
            type: 'string',
            description: 'A class you want to search for',
          },
          image: {
            $ref: '#/definitions/ImageResponseItem',
          },
          hitl: {
            type: 'boolean',
            description: 'Whether human-in-the-loop verification was used for this class',
          },
        },
      },
    },
    imageResults: {
      type: 'array',
      items: {
        type: 'object',
        required: ['id', 'url', 'status', 'objects'],
        properties: {
          id: {
            type: 'string',
          },
          url: {
            type: 'string',
            description: 'URL of the image',
          },
          proxyUrl: {
            type: 'string',
            description: 'Proxy URL of the image',
          },
          customId: {
            type: 'string',
            description:
              'An arbitrary client specific resource identifier to reference this image (usually UUID)',
          },
          status: {
            $ref: '#/definitions/ImageStatus',
          },
          objects: {
            type: 'array',
            items: {
              type: 'object',
              required: ['class', 'confidence', 'verdict'],
              properties: {
                class: {
                  type: 'string',
                  description: 'The class found',
                },
                confidence: {
                  type: 'number',
                  description: 'The confidence for the class',
                },
                verdict: {
                  type: 'boolean',
                  description: "Whether we're certain if this class exists",
                },
              },
            },
          },
        },
      },
    },
  },
  example: {
    id: '5d689c71-e68f-46c3-ac71-4053806e71de',
    video: 'https://publicly.available.domain.net/videl-001.mp4',
    fps: 2,
    jobResults: [
      {
        class: 'person',
        image: {
          id: '00413783-8a5b-47ef-a1cf-5b727f028f0a',
          customId: '6',
          url: 'https://ii-images.com/a36c8848-49f5-41cb-9b32-221c2f62ddc0/6.jpg',
          proxyUrl: 'https://api.staging.quickpix.io/images/650db274-f46a-4ab8-b8aa-edeb245b6d10',
        },
        hitl: false,
      },
    ],
    imageResults: [
      {
        id: '2cf1a902-cec8-4f03-adef-35cc4cfffe49',
        url: 'https://ii-images.com/a36c8848-49f5-41cb-9b32-221c2f62ddc0/1.jpg',
        proxyUrl: 'https://api.staging.quickpix.io/images/fb6dcfdc-71eb-4cac-b5ee-dc2764832d0d',
        customId: '1',
        objects: [
          {
            class: 'person',
            confidence: 0.1233379989862442,
            verdict: false,
          },
        ],
        status: 'COMPLETED_SUCCESSFULLY',
      },
      {
        id: '41e6c48e-e693-47ba-90e2-bfd625885343',
        url: 'https://ii-images.com/a36c8848-49f5-41cb-9b32-221c2f62ddc0/2.jpg',
        proxyUrl: 'https://api.staging.quickpix.io/images/b52352e8-4b16-4e11-b417-04c47dfb129f',
        customId: '2',
        objects: [
          {
            class: 'person',
            confidence: 0.12681269645690918,
            verdict: false,
          },
        ],
        status: 'COMPLETED_SUCCESSFULLY',
      },
      {
        id: 'e1d59a97-5b62-4252-bd71-c78a017ced3a',
        url: 'https://ii-images.com/a36c8848-49f5-41cb-9b32-221c2f62ddc0/3.jpg',
        proxyUrl: 'https://api.staging.quickpix.io/images/0608193a-c8b7-4c69-8f32-e1728ba17ca0',
        customId: '3',
        objects: [
          {
            class: 'person',
            confidence: 0.12594865262508392,
            verdict: false,
          },
        ],
        status: 'COMPLETED_SUCCESSFULLY',
      },
      {
        id: 'ffb7d7ba-79cf-4491-8167-7d733a43acda',
        url: 'https://ii-images.com/a36c8848-49f5-41cb-9b32-221c2f62ddc0/4.jpg',
        proxyUrl: 'https://api.staging.quickpix.io/images/fc6f6eee-2a38-4fd1-9f09-6c68a738e784',
        customId: '4',
        objects: [
          {
            class: 'person',
            confidence: 0.13222429156303406,
            verdict: false,
          },
        ],
        status: 'COMPLETED_SUCCESSFULLY',
      },
      {
        id: '72f796c3-2154-4ba2-acd0-53f7d362c5a2',
        url: 'https://ii-images.com/a36c8848-49f5-41cb-9b32-221c2f62ddc0/5.jpg',
        proxyUrl: 'https://api.staging.quickpix.io/images/00a20af7-5eba-4af7-9697-2141cb5f3fb1',
        customId: '5',
        objects: [
          {
            class: 'person',
            confidence: 0.14063027501106262,
            verdict: false,
          },
        ],
        status: 'COMPLETED_SUCCESSFULLY',
      },
      {
        id: '0b1b74c2-9824-4cb7-9b82-66799f50991a',
        url: 'https://ii-images.com/a36c8848-49f5-41cb-9b32-221c2f62ddc0/6.jpg',
        proxyUrl: 'https://api.staging.quickpix.io/images/744e280b-7a38-40e1-b176-668301e7235a',
        customId: '6',
        objects: [
          {
            class: 'person',
            confidence: 0.9943662881851196,
            verdict: false,
          },
        ],
        status: 'COMPLETED_SUCCESSFULLY',
      },
    ],
    createdAt: 1487648348,
    status: 'COMPLETED_SUCCESSFULLY',
    customId: '6c78df0a-67b6-4d5f-93cf-5820cfee501c',
    feedId: 'Camera_123456',
    webhookUrl: 'https://publicly.available.domain.net/90f8754aa4e287bbb2c07ec99ade0de72ddbd4b6Et',
  },
};
