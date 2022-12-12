require('dotenv').config()

const development = {
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'root',
  database: process.env.MYSQL_DATABASE || 'db',
  host: process.env.MYSQL_HOST || '127.0.0.1',
  dialect: 'mysql',
  logging: true
}

const testing = {
  ...development,
  logging: false
}

const production = {
  ...testing
}

module.exports = {
  development,
  testing,
  production
}
