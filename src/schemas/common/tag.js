const response = {
  id: { type: 'string' },
  name: { type: 'string' }
}

const responseSchema = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' }
  },
  additionalProperties: false
}

module.exports = {
  response,
  responseSchema
}
