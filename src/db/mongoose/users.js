const mongoose = require('./create')

// 规范
const usersSchema = mongoose.Schema({
  name: {
    type: String, // 类型
    required: false // 不能为空
  },
  age: {
    type: String, // 类型
    required: false // 不能为空
  },
  sex: {
    type: String, // 类型
    required: false // 不能为空
  }
}, { timestamps: true }) // 会自动加时间戳

const Users = mongoose.model('users', usersSchema) // users 对应 users 集合

module.exports = Users
