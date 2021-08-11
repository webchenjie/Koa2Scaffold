const ObjectId = require('mongodb').ObjectId
const { handleMongodbExec } = require('../db')

// 获取用户列表
const handleGetUserList = async id => {
  const collection = await handleMongodbExec('users')
  return await collection.find({ id }).toArray()
}

// 获取用户详情
const handleGetUserDetail = async id => {
  const collection = await handleMongodbExec('users')
  return await collection.find({ id })
}

// 添加用户
const handleAddUser = async ({ name, sex, age }) => {
  const collection = await handleMongodbExec('users')
  const result = await collection.insertOne({ name, sex, age })
  return result?.insertedId
}

// 删除用户
const handleDelUser = async id => {
  const collection = await handleMongodbExec('users')
  const result = await collection.deleteOne({ _id: ObjectId(id) })
  if (result?.deletedCount > 0) {
    return true
  }
  return false
}

// 修改用户
const handleSetUser = async ({ id, name, sex, age }) => {
  const collection = await handleMongodbExec('users')
  const result = await collection.updateOne({
    _id: ObjectId(id)
  }, {
    $set: { name, sex, age }
  })
  if (result?.matchedCount > 0) {
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
