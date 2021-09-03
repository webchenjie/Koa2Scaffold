const {
  Sequelize
} = require('sequelize')
const {
  sequelizeConfig
} = require('../../config')

const sequelize = new Sequelize(
  sequelizeConfig.database,
  sequelizeConfig.user,
  sequelizeConfig.password,
  sequelizeConfig.config
)

sequelize.authenticate().then(() => {
  console.log('sequelize 连接成功~')
}).catch(() => {
  console.log('sequelize 连接失败~')
})

module.exports = sequelize
