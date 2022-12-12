const { defaultErrors } = require('../common')
const { statusCodes } = require('../../const')

const schema = {
  description: 'Register new User',
  tags: ['registration'],
  body: {
    type: 'object',
    properties: {
      email: { type: 'string' },
      password: { type: 'string' }
    },
    required: ['email', 'password', 'firstName', 'lastName']
  },
  responses: {
    ...defaultErrors,
    [statusCodes.OK]: {
      type: 'object',
      properties: {
        status: { type: 'string', example: 'User created!' },
        token: { type: 'string' }
      },
      required: ['status', 'token']
    }
  }
}

module.exports = schema
