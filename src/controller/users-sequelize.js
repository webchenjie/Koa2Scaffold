const { Users } = require('../db')

// 获取用户列表
const handleGetUserList = async id => {
  let data
  if (id) {
    data = await Users.findAll({
      where: {
        id
      }
    })
  } else {
    data = await Users.findAll()
  }
  return data
}

// 获取用户详情
const handleGetUserDetail = async id => {
  const [data] = await Users.findAll({
    where: { id: id ? id : '' }
  })
  console.log(data)
  return data
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
  const data = await Users.destroy({
    where: {
      id
    }
  })
  return data
}

// 修改用户
const handleSetUser = async ({ id, name, sex, age }) => {
  const data = await Users.update({
    name,
    sex,
    age
  }, {
    where: {
      id
    }
  })
  return data
}

module.exports = {
  handleGetUserList,
  handleGetUserDetail,
  handleAddUser,
  handleDelUser,
  handleSetUser
}
