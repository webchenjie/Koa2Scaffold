const {
  Users
} = require('../db')

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
  const result = await Users.findAll({
    where: {
      id: id || ''
    }
  })
  return result?.[0]
}

// 添加用户
const handleAddUser = async ({
  name,
  sex,
  age
}) => {
  const result = await Users.create({
    name,
    sex,
    age
  })
  return result?.dataValues?.id
}

// 删除用户
const handleDelUser = async id => {
  return await Users.destroy({
    where: {
      id
    }
  })
}

// 修改用户
const handleSetUser = async ({
  id,
  name,
  sex,
  age
}) => {
  return await Users.update({
    name,
    sex,
    age
  }, {
    where: {
      id
    }
  })
}

module.exports = {
  handleGetUserList,
  handleGetUserDetail,
  handleAddUser,
  handleDelUser,
  handleSetUser
}
