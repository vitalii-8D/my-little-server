const { defaultErrors } = require('../common')
const { statusCodes } = require('../../const')

const schema = {
  description: 'Register new User',
  tags: ['registration'],
  body: {
    type: 'object',
    properties: {
      email: { type: 'string' },
      password: { type: 'string' },
      firstName: { type: 'string' },
      lastName: { type: 'string' }
    },
    required: ['email', 'password', 'firstName', 'lastName']
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
