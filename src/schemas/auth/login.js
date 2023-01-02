const { defaultErrors } = require('../common')
const { statusCodes } = require('../../const')

const schema = {
  description: 'Register new User',
  tags: ['Auth'],
  body: {
    type: 'object',
    properties: {
      email: { type: 'string', default: 'keks@mail.com' },
      password: { type: 'string', default: 'pass' }
    },
    required: ['email', 'password']
  },
  response: {
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
