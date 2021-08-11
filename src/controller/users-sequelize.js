const { Users } = require('../db')

// 获取用户列表
const handleGetUserList = async id => {
  let result
  if (id) {
    result = await Users.findAll({
      where: {
        id
      }
    })
  } else {
    result = await Users.findAll()
  }
  return result
}

// 获取用户详情
const handleGetUserDetail = async id => {
  const [result] = await Users.findAll({
    where: { id: id ? id : '' }
  })
  return result
}

// 添加用户
const handleAddUser = async ({ name, sex, age }) => {
  const { dataValues: { id }} = await Users.create({
    name,
    sex,
    age
  })
  return id
}

// 删除用户
const handleDelUser = async id => {
  const result = await Users.destroy({
    where: {
      id
    }
  })
  return result
}

// 修改用户
const handleSetUser = async ({ id, name, sex, age }) => {
  const result = await Users.update({
    name,
    sex,
    age
  }, {
    where: {
      id
    }
  })
  return result
}

module.exports = {
  handleGetUserList,
  handleGetUserDetail,
  handleAddUser,
  handleDelUser,
  handleSetUser
}
