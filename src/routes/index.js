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
    url: urls.LOGIN,
    schema: schemas.auth.login,
    handler: controllers.auth.login
  },

  // ME
  {
    method: methods.GET,
    url: urls.ME,
    schema: schemas.me.profile,
    handler: controllers.me.profile
  },
  {
    method: methods.GET,
    url: urls.ME_POSTS,
    schema: schemas.me.posts,
    handler: controllers.me.posts
  },

  // USER
  {
    method: methods.POST,
    url: urls.USERS,
    schema: schemas.users.create,
    handler: controllers.users.create
  },
  {
    method: methods.PATCH,
    url: urls.USER,
    schema: schemas.users.update,
    handler: controllers.users.update
  },
  {
    method: methods.GET,
    url: urls.USER,
    schema: schemas.users.getOne,
    handler: controllers.users.getOne
  },
  {
    method: methods.GET,
    url: urls.USERS,
    schema: schemas.users.getMany,
    handler: controllers.users.getMany
  },
  {
    method: methods.PATCH,
    url: urls.ME,
    schema: schemas.users.updateMe,
    handler: controllers.users.updateMe
  },
  // POSTS
  {
    method: methods.POST,
    url: urls.POSTS,
    schema: schemas.posts.create,
    handler: controllers.posts.create
  },
  {
    method: methods.GET,
    url: urls.POSTS,
    schema: schemas.posts.getMany,
    handler: controllers.posts.getMany
  },
  {
    method: methods.GET,
    url: urls.POST,
    schema: schemas.posts.getOne,
    handler: controllers.posts.getOne
  },
  {
    method: methods.PATCH,
    url: urls.POST,
    schema: schemas.posts.update,
    handler: controllers.posts.update
  },

  // COMMENTS\
  {
    method: methods.GET,
    url: urls.POST_COMMENTS,
    schema: schemas.comments.ofPost,
    handler: controllers.comments.ofPost
  }
]

const init = async app => routes.map(r => app.route(r))

module.exports = init
