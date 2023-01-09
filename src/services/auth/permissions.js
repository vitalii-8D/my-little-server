const { userRoles: roles } = require('../../const')
const methods = require('../../routes/methods')
const urls = require('../../routes/routes')

const permission = {
  // USERS
  [urls.USERS]: {
    [methods.POST]: roles.ADMIN,
    [methods.GET]: roles.ALL
  },
  [urls.USER]: {
    [methods.PATCH]: roles.ADMIN,
    [methods.GET]: roles.ALL,
    [methods.DELETE]: roles.ADMIN
  },
  [urls.ME]: {
    [methods.PATCH]: roles.ALL,
    [methods.GET]: roles.ALL
  },
  // POSTS
  [urls.POSTS]: {
    [methods.POST]: roles.ALL
    // [methods.GET]: roles.ALL
  }
}

module.exports = permission
