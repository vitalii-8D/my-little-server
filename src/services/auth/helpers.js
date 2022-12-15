const permissions = require('./permissions')
const { payloadFields } = require('../../const')

const isPublicRequest = req => !permissions[req.routerPath]?.[req.method]

const hasPermission = (req, payload) => {
  const validRoles = permissions[req.routerPath]?.[req.method]

  return !(validRoles && !validRoles.includes(payload[payloadFields.ROLE]))
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
const AUTH_JWT_OPTION = {
  secret: process.env.JWT_SIGN_SECRET || 'secret',
  cookie: {
    cookieName: AUTH_COOKIE_NAME,
    sign: false
  },
  verify: {
    maxAge: process.env.MAX_AUTH_TOKEN_AGE || '1m'
  }
}

const setAuthCookie = (res, token) => {
  res.setCookie(AUTH_COOKIE_NAME, token, AUTH_COOKIE_OPTIONS)
}

module.exports = {
  isPublicRequest,
  hasPermission,
  setAuthCookie,
  AUTH_COOKIE_NAME,
  AUTH_JWT_OPTION
}
