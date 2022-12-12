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
  },
  // AUTH
  {
    method: methods.POST,
    url: urls.REGISTER,
    schema: schemas.auth.register,
    handler: controllers.auth.register
  }
  // {
  //   method: methods.POST,
  //   url: urls.LOGIN,
  //   schema: schemas.auth.login,
  //   handler: controllers.auth.login
  // }
]

const init = async app => routes.map(r => app.route(r))

module.exports = init
