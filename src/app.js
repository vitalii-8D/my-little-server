require('dotenv').config()

const {
  appConfig: { appConfig },
  swaggerConfig
} = require('./configs')

const app = require('fastify')(appConfig)

app.register(require('@fastify/cors'))
app.register(require('@fastify/swagger'), swaggerConfig)
app.register(require('./routes'))

module.exports = app
