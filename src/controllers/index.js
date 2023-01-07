const healthCheck = require('./healthCheck')
const auth = require('./auth')
const users = require('./users')
const posts = require('./posts')
const me = require('./me')

module.exports = {
  healthCheck,
  auth,
  users,
  posts,
  me
}
