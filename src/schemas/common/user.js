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
  properties: response,
  additionalProperties: false
}

module.exports = {
  response,
  responseSchema
}
