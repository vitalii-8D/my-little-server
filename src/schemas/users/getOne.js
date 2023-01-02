const { defaultErrors, user } = require('../common')
const { statusCodes } = require('../../const')

const schema = {
  description: 'Create one User',
  tags: ['User'],
  params: {
    type: 'object',
    properties: {
      id: { type: 'string', default: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc001' }
    },
    required: ['id']
  },
  response: {
    ...defaultErrors,
    [statusCodes.OK]: {
      type: 'object',
      properties: {
        ...user.response
      },
      required: ['id', 'firstName', 'lastName', 'email', 'role']
    }
  }
}

module.exports = schema
