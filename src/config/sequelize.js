let config

switch(process.env.NODE_ENV) {
  case 'development':
    config = {
      database: 'blog',
      user: 'root',
      password: '123456',
      config: {
        host: 'localhost',
        dialect: 'mysql'
      }
    }
  case 'production':
    config = {
      database: 'blog',
      user: 'root',
      password: '123456',
      config: {
        host: 'localhost',
        dialect: 'mysql'
      }
    }
  default:
    config = {
      database: 'blog',
      user: 'root',
      password: '123456',
      config: {
        host: 'localhost',
        dialect: 'mysql'
      }
    }
}

module.exports = config
