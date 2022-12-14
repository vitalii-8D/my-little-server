const fJWT = require('@fastify/jwt')
const fCookie = require('@fastify/cookie')
const { isPublicRequest, hasPermission } = require('./helpers')
const { statusCodes } = require('../../const')

const AUTH_COOKIE_NAME = 'jwt'

module.exports = app => {
  app.register(fJWT, {
    secret: process.env.JWT_SIGN_SECRET || 'secret',
    cookie: {
      cookieName: AUTH_COOKIE_NAME,
      sign: false
    },
    verify: {
      maxAge: process.env.MAX_AUTH_TOKEN_AGE || '12h'
    }
  })

  app.register(fCookie)

  app.addHook('onRequest', async (req, res) => {
    req.fastify = app

    if (isPublicRequest(req)) {
      // if  (Object.values(req.cookie).length) req.jwtVerify()
        return
    }

    let payload
    try {
      payload = req.jwtVerify()
    } catch (err) {
      return res.status(statusCodes.UNAUTHORIZED).send({ error: 'Unauthorized!' })
    }

    if (!hasPermission(req, payload)) return res.status(statusCodes.FORBIDDEN).send({ error: 'Access is denied!' })
  })
}
