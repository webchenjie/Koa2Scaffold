const { Users } = require('../db')

// 获取用户列表
const handleGetUserList = async id => {
  if (id) {
    return await Users.find({ id }).sort({ _id: -1 })
  } else {
    return await Users.find().sort({ _id: -1 })
  }
}

// 获取用户详情
const handleGetUserDetail = async id => {
  return await Users.findById(id)
}

// 添加用户
const handleAddUser = async ({ name, sex, age }) => {
  const result = await Users.create({
    name,
    sex,
    age
  })
  return result?._id
}

// 删除用户
const handleDelUser = async id => {
  const result = await Users.findOneAndDelete({ _id: id })
  if (result?._id) {
    return true
  }
  return false
}

// 修改用户
const handleSetUser = async ({ id, name, sex, age }) => {
  const result = await Users.findOneAndUpdate({
    _id: id // 条件
  }, {
    name,
    sex,
    age
  }, {
    new: true // 返回修改之后的最新的内容
  })
  if (result?._id) {
    return true
  }
  return false
}

module.exports = {
  handleGetUserList,
  handleGetUserDetail,
  handleAddUser,
  handleDelUser,
  handleSetUser
}
