const pino = require('pino')

const isProd = process.env.NODE_ENV === 'production'
const isTest = process.env.NODE_ENV === 'testing'

const MAX_BODY_SIZE = 1024 * 1024 * 4

const appConfig = {
  logger: pino({
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true
      }
    },
    level: 'info'
  }),
  bodyLimit: MAX_BODY_SIZE,
  ajv: {
    customOptions: {
      coerceTypes: 'array'
    }
  }
}

const domain = process.env.DOMAIN || 'localhost'

module.exports = {
  isProd,
  isTest,
  appConfig,
  domain
}
