const { defaultErrors } = require('../common')

const schema = {
  description: 'Check if system works',
  tags: ['Health Check'],
  responses: {
    ...defaultErrors,
    200: {
      type: 'object',
      properties: {
        status: { type: 'string', example: 'OK' },
        payload: { type: 'object' }
      },
      required: ['status']
    }
  }
}

module.exports = schema
