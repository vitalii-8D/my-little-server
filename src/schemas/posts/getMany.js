const { defaultErrors, post, helpers, tag, comment, user } = require('../common')
const { statusCodes } = require('../../const')

const schema = {
  description: 'Get all Posts',
  tags: ['Post'],
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
          ...post.response,
          tags: helpers.arrayOf(tag.response),
          comments: helpers.arrayOf({
            ...comment.response,
            user: user.response
          }),
          user: user.response
        }),
        count: { type: 'number', example: 5 }
      }
    }
  }
}

module.exports = schema
