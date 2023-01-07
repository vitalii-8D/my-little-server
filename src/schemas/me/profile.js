const { defaultErrors, user } = require('../common')
const { statusCodes } = require('../../const')

const schema = {
  description: 'Get my Profile',
  tags: ['Me'],
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
