const response = {
  id: { type: 'string' },
  firstName: { type: 'string' },
  lastName: { type: 'string' },
  email: { type: 'string' },
  role: {
    enum: ['admin', 'user']
  }
}

const responseSchema = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    email: { type: 'string' }
  },
  additionalProperties: false
}

module.exports = {
  response,
  responseSchema
}
