const { defaultErrors, user } = require('../common')
const { statusCodes } = require('../../const')

const schema = {
  description: 'Create all Users',
  tags: ['User'],
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
              ...user.response
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
