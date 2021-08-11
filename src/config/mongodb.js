let config

switch(process.env.NODE_ENV) {
  case 'development':
    config = {
      database: 'blog',
      host: 'mongodb://localhost:27017'
    }
  case 'production':
    config = {
      database: 'blog',
      host: 'mongodb://localhost:27017'
    }
  default:
    config = {
      database: 'blog',
      host: 'mongodb://localhost:27017'
    }
}

module.exports = config