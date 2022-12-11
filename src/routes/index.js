const methods = require('./methods')
const urls = require('./routes')
const schemas = require('../schemas')
const controllers = require('../controllers')

const routes = [
  // HEALTH CHECK
  {
    method: methods.GET,
    url: urls.HEALTH_CHECK,
    schema: schemas.healthCheck,
    handler: controllers.healthCheck
  }
]

const init = async app => routes.map(r => app.route(r))

module.exports = init
