const getPopulatingFields = (populateString, allowedValue) => {
  if (!populateString) return null

  const fields = populateString.split(',').filter(f => allowedValue.includes(f))
  return fields.length ? fields : null
}

module.exports = {
  getPopulatingFields
}
