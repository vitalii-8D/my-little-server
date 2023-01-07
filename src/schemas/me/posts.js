const { defaultErrors, post, helpers, tag, comment, user } = require('../common')
const { statusCodes } = require('../../const')

const schema = {
  description: 'Get my Posts',
  tags: ['Me'],
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
            user: user.responseSchema
          }),
          user: user.responseSchema
        }),
        count: { type: 'number', example: 5 }
      }
    }
  }
}

module.exports = schema
