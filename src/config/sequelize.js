let config

switch(process.env.NODE_ENV) {
  case 'development':
    config = {
      database: 'blog',
      user: 'root',
      password: '123456',
      config: {
        host: 'localhost',
        dialect: 'mysql',
        pool: {
          max: 5,
          min: 0,
          idle: 10000
        }
      }
    }
  case 'production':
    config = {
      database: 'blog',
      user: 'root',
      password: '123456',
      config: {
        host: 'localhost',
        dialect: 'mysql',
        pool: {
          max: 5,
          min: 0,
          idle: 10000
        }
      }
    }
  default:
    config = {
      database: 'blog',
      user: 'root',
      password: '123456',
      config: {
        host: 'localhost',
        dialect: 'mysql',
        pool: {
          max: 5,
          min: 0,
          idle: 10000
        }
      }
    }
}

module.exports = config