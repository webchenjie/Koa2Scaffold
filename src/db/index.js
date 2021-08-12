module.exports = {
  ...require('./mysql'),
  ...require('./sequelize'),
  ...require('./mongodb'),
  ...require('./mongoose'),
  ...require('./redis')
}
