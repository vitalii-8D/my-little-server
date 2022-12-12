const permissions = require('./permissions')
const { ROLE } = require('./payloadFields')

const isPublicRequest = req => !permissions[req.routerPath]?.[req.method]

const hasPermission = (req, payload) => {
  const validRoles = permissions[req.routerPath]?.[req.method]

  return !(validRoles && !valiRoles.includes(payload[ROLE]))
}

module.exports = {
  isPublicRequest,
  hasPermission
}
