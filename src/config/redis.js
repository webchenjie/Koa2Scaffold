let config

switch (process.env.NODE_ENV) {
  case 'development':
    config = {
      host: 'localhost',
      port: '6379'
    }
    break
  case 'production':
    config = {
      host: 'localhost',
      port: '6379'
    }
    break
  default:
    config = {
      host: 'localhost',
      port: '6379'
    }
}

module.exports = config
