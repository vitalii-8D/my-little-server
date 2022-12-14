const { defaultErrors } = require('../common')
const { statusCodes } = require('../../const')

const schema = {
  description: 'Update User',
  tags: ['User'],
  params: {
    type: 'object',
    properties: {
      id: { type: 'string', minLength: 1 }
    },
    required: ['id']
  },
  body: {
    type: 'object',
    properties: {
      firstName: { type: 'string' },
      lastName: { type: 'string' }
    }
  },
  response: {
    ...defaultErrors,
    [statusCodes.OK]: {
      type: 'object',
      properties: {
        status: { type: 'string', example: 'User updated!' }
      },
      required: ['status']
    }
  }
}

module.exports = schema
