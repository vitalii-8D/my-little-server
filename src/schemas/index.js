const healthCheck = require('./healthCheck')
const auth = require('./auth')
const users = require('./users')
const posts = require('./posts')
const me = require('./me')
const comments = require('./comments')
const tags = require('./tags')

module.exports = {
  healthCheck,
  auth,
  users,
  posts,
  me,
  comments,
  tags
}
