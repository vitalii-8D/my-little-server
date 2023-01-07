const { defaultErrors } = require('../common')
const { statusCodes } = require('../../const')

const schema = {
  description: 'Create a new User',
  tags: ['User'],
  body: {
    type: 'object',
    properties: {
      email: { type: 'string', default: 'default.email@gmail.com' },
      password: { type: 'string', default: 'pass' },
      firstName: { type: 'string', default: 'First' },
      lastName: { type: 'string', default: 'Last' }
    },
    required: ['email', 'password', 'firstName', 'lastName'],
    additionalProperties: false
  },
  responses: {
    ...defaultErrors,
    [statusCodes.CREATED]: {
      type: 'object',
      properties: {
        status: { type: 'string', example: 'User created!' }
      },
      required: ['status']
    }
  }
}

module.exports = schema
