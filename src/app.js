require('dotenv').config()

const {
  appConfig: { appConfig },
  swagger
} = require('./configs')

const app = require('fastify')(appConfig)

app.register(require('@fastify/cors'))

app.register(require('@fastify/swagger'), swagger.config)
app.register(require('@fastify/swagger-ui'), swagger.UIConfig)

require('./services/auth')(app)

app.register(require('./routes'))

module.exports = app
