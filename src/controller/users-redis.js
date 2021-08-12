const { handleRedisGet, handleRedisSet, handleRedisDel } = require('../db')

// 获取用户列表
const handleGetUserList = async id => {
  return await handleRedisGet('name')
}

// 获取用户详情
const handleGetUserDetail = async id => {
  return await handleRedisGet('name')
}

// 添加用户
const handleAddUser = async ({ name, sex, age }) => {
  return await handleRedisSet('user2', JSON.stringify({ name, sex, age }))
}

// 删除用户
const handleDelUser = async (id) => {
  const result = await handleRedisDel('user1')
  return result
}

// 修改用户
const handleSetUser = async ({ id, name, sex, age }) => {
  return await handleRedisSet('user1', JSON.stringify({ name, sex, age }))
}

module.exports = {
  handleGetUserList,
  handleGetUserDetail,
  handleAddUser,
  handleDelUser,
  handleSetUser
}
