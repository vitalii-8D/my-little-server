const { defaultErrors } = require('../common')
const { statusCodes } = require('../../const')

const schema = {
  description: 'Update User',
  tags: ['update user'],
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
  responses: {
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
