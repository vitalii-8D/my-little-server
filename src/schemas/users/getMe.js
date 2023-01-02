const { defaultErrors, user } = require('../common')
const { statusCodes } = require('../../const')

const schema = {
  description: 'Create one User',
  tags: ['User'],
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
