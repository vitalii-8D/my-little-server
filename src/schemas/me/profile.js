const { defaultErrors, user } = require('../common')
const { statusCodes } = require('../../const')

const schema = {
  description: 'Get my Profile',
  tags: ['Me'],
  response: {
    ...defaultErrors,
    [statusCodes.OK]: user.responseSchema
  }
}

module.exports = schema
