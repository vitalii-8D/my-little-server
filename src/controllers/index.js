const healthCheck = require('./healthCheck')
const auth = require('./auth')
const users = require('./users')
const posts = require('./posts')
const me = require('./me')
const comments = require('./comments')

module.exports = {
  healthCheck,
  auth,
  users,
  posts,
  me,
  comments
}
