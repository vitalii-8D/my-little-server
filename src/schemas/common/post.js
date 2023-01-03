const response = {
  id: { type: 'string' },
  title: { type: 'string' },
  text: { type: 'string' },
  tags: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        name: { type: 'string' }
      }
    }
  }
}

module.exports = {
  response
}
