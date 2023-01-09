const { defaultErrors, tag } = require('../common')
const { statusCodes } = require('../../const')

const schema = {
  description: 'Get all Tags',
  tags: ['Tag'],
  response: {
    ...defaultErrors,
    [statusCodes.OK]: {
      type: 'object',
      properties: {
        items: {
          type: 'array',
          items: tag.responseSchema
        },
        count: { type: 'number', example: 5 }
      }
    }
  }
}

module.exports = schema
