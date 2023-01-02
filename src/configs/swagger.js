const { version } = require('../../package.json')

const config = {
  routePrefix: '/',
  openapi: {
    info: {
      title: 'Training Center API',
      description: 'API doc for Training Center Project',
      version
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    }
  },
  exposeRoute: true
}

const UIConfig = {
  routePrefix: '/',
  uiConfig: {
    docExpansion: 'none',
    deepLinking: false
  }
}

module.exports = {
  config,
  UIConfig
}
