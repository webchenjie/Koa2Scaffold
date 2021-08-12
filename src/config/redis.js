let config

switch(process.env.NODE_ENV) {
  case 'development':
    config = {
      host: 'localhost',
      port: '6379'
    }
  case 'production':
    config = {
      host: 'localhost',
      port: '6379'
    }
  default:
    config = {
      host: 'localhost',
      port: '6379'
    }
}

module.exports = config
