let config

switch (process.env.NODE_ENV) {
  case 'development':
    config = {
      database: 'blog',
      host: 'mongodb://localhost:27017'
    }
    break
  case 'production':
    config = {
      database: 'blog',
      host: 'mongodb://localhost:27017'
    }
    break
  default:
    config = {
      database: 'blog',
      host: 'mongodb://localhost:27017'
    }
}

module.exports = config
