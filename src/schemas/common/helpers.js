const arrayOf = props => ({
  type: 'array',
  items: {
    type: 'object',
    properties: props,
    additionalProperties: false
  }
})

module.exports = {
  arrayOf
}
