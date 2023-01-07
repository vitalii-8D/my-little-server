const routes = {
  HEALTH_CHECK: '/health-check',

  // AUTH
  LOGIN: '/auth/login',

  // ME
  ME: '/me',
  ME_POSTS: '/me/posts',

  // USER
  USERS: '/users',
  USER: '/user/:id',

  // POST
  POSTS: '/posts',
  POST: '/post/:id',
  // COMMENTS
  POST_COMMENTS: '/post/:id/comments'
}

module.exports = routes
