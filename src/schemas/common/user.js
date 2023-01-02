const response = {
  id: { type: 'string' },
  firstName: { type: 'string' },
  lastName: { type: 'string' },
  email: { type: 'string' },
  role: {
    enum: ['admin', 'user']
  }
}

module.exports = {
  response
}
