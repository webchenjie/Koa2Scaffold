const { DataTypes } = require('sequelize')
const sequelize = require('./create')

// 创建 user 模型，数据表的名字是 users
const User = sequelize.define('user', {
  // id 会自动创建，并设为主键自增
  // createdAt 和 updatedAt 也会自动创建
  name: {
    type: DataTypes.STRING, // 相当于 varchar(255)
    allowNull: false // 不能为空
  },
  age: {
    type: DataTypes.STRING, // 相当于 varchar(255)
    allowNull: false // 不能为空
  },
  sex: {
    type: DataTypes.STRING, // 相当于 varchar(255)
    allowNull: false // 不能为空
  }
})

module.exports = {
  User
}
