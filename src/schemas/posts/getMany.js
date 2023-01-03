const { defaultErrors, post } = require('../common')
const { statusCodes } = require('../../const')

const schema = {
  description: 'Get all Posts',
  tags: ['Post'],
  response: {
    ...defaultErrors,
    [statusCodes.OK]: {
      type: 'object',
      properties: {
        items: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              ...post.response
            },
            additionalProperties: false
          }
        },
        count: { type: 'number', example: 5 }
      }
    }
  }
}

module.exports = schema
