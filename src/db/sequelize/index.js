const sequelize = require('./create')
const Users = require('./users')

// sequelize.sync({ alter: true }) // 异步同步模型

module.exports = {
  Users
}
