const { userRoles: roles } = require('../../const')
const methods = require('../../routes/methods')
const urls = require('../../routes/routes')

const permission = {
  [urls.USERS]: {
    [methods.GET]: roles.ALL,
    [methods.POST]: roles.ADMIN
  },
  [urls.USER]: {
    [methods.GET]: roles.ALL,
    [methods.DELETE]: roles.ADMIN,
    [methods.PATCH]: roles.ALL
  }
}

module.exports = permission
