const { defaultErrors } = require('../common')
const { statusCodes } = require('../../const')

const schema = {
  description: 'Update Post',
  tags: ['Post'],
  params: {
    type: 'object',
    properties: {
      id: { type: 'string', minLength: 1 }
    },
    required: ['id']
  },
  body: {
    type: 'object',
    properties: {
      title: { type: 'string' },
      text: { type: 'string' }
    }
  },
  response: {
    ...defaultErrors,
    [statusCodes.OK]: {
      type: 'object',
      properties: {
        status: { type: 'string', example: 'Post updated!' }
      },
      required: ['status']
    }
  }
}

module.exports = schema
