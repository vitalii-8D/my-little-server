const { defaultErrors } = require('../common')
const { statusCodes } = require('../../const')

const schema = {
  description: 'Create a new Post',
  tags: ['Post'],
  body: {
    type: 'object',
    properties: {
      title: { type: 'string', default: 'My New Post' },
      text: { type: 'string', default: 'My new post content' },
      tags: { type: 'array', items: { type: 'string', default: '2d5cf22e-984c-4382-9b83-e2cb906ffd38' } }
    },
    required: ['title', 'text']
  },
  responses: {
    ...defaultErrors,
    [statusCodes.CREATED]: {
      type: 'object',
      properties: {
        status: { type: 'string', example: 'Post created!' }
      },
      required: ['status']
    }
  }
}

module.exports = schema
