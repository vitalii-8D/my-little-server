const fJWT = require('@fastify/jwt')
const fCookie = require('@fastify/cookie')
const { isPublicRequest, hasPermission, AUTH_JWT_OPTION } = require('./helpers')
const { statusCodes } = require('../../const')

module.exports = app => {
  app.register(fJWT, AUTH_JWT_OPTION)
  app.register(fCookie)

  app.addHook('onRequest', async (req, res) => {
    // if (!req.cookie) req.cookie = {}
    // if (!req.cookie.jwt) req.cookie.jwt = ''
    // req.fastify = app

    if (isPublicRequest(req)) {
      if (req.cookie?.jwt) await req.jwtVerify()
      return
    }

    let payload
    try {
      payload = await req.jwtVerify()
    } catch (err) {
      return res.status(statusCodes.UNAUTHORIZED).send({ error: 'Unauthorized!' })
    }

    if (!hasPermission(req, payload)) return res.status(statusCodes.FORBIDDEN).send({ error: 'Access is denied!' })
  })
}
