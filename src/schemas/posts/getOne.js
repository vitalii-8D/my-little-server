const { defaultErrors, post } = require('../common')
const { statusCodes } = require('../../const')

const schema = {
  description: 'Get one Post',
  tags: ['Post'],
  params: {
    type: 'object',
    properties: {
      id: { type: 'string', default: 'd7550a4b-3b2b-4b81-ba03-62f0ad52c371' }
    },
    required: ['id']
  },
  response: {
    ...defaultErrors,
    [statusCodes.OK]: {
      type: 'object',
      properties: {
        ...post.response
      },
      required: ['id', 'title', 'text']
    }
  }
}

module.exports = schema
