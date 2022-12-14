const permissions = require('./permissions')
const { ROLE } = require('./payloadFields')
const { appConfig } = require('../../configs')

const isPublicRequest = req => !permissions[req.routerPath]?.[req.method]

const hasPermission = (req, payload) => {
  const validRoles = permissions[req.routerPath]?.[req.method]

  return !(validRoles && !valiRoles.includes(payload[ROLE]))
}

const AUTH_COOKIE_NAME = 'jwt'
const domain = process.env.DOMAIN || 'localhost'
const AUTH_COOKIE_OPTIONS = {
  domain,
  path: '/',
  secure: false, //FIXME: true for prod // HTTPS only
  httpOnly: true,
  sameSite: true
}

const setAuthCookie = (res, token) => {
  res.setCookie(AUTH_COOKIE_NAME, token, AUTH_COOKIE_OPTIONS)
}

module.exports = {
  isPublicRequest,
  hasPermission,
  setAuthCookie
}
