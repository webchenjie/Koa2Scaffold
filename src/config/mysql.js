let config

switch (process.env.NODE_ENV) {
  case 'development':
    config = {
      host: 'localhost',
      user: 'root',
      password: '123456',
      port: '3306',
      database: 'blog'
    }
    break
  case 'production':
    config = {
      host: 'localhost',
      user: 'root',
      password: '123456',
      port: '3306',
      database: 'blog'
    }
    break
  default:
    config = {
      host: 'localhost',
      user: 'root',
      password: '123456',
      port: '3306',
      database: 'blog'
    }
}

module.exports = config
