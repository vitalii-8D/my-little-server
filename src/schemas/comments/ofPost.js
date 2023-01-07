const { defaultErrors, comment, helpers, user } = require('../common')
const { statusCodes } = require('../../const')

const schema = {
  description: 'Comments of Post',
  tags: ['Comment'],
  params: {
    type: 'object',
    properties: {
      id: { type: 'string', default: 'd7550a4b-3b2b-4b81-ba03-62f0ad52c371' }
    },
    required: ['id']
  },
  query: {
    type: 'object',
    properties: {
      populate: { type: 'string' }
    }
  },
  response: {
    ...defaultErrors,
    [statusCodes.OK]: {
      type: 'object',
      properties: {
        items: helpers.arrayOf({
          ...comment.response,
          user: user.responseSchema
        }),
        count: { type: 'number', example: 5 }
      }
    }
  }
}

module.exports = schema
