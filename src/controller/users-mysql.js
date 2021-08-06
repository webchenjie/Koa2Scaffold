const { handleMysqlExec } = require('../db')

// 获取用户列表
const handleGetUserList = async id => {
  let sql = `select * from users where 1=1 `
  if (id) {
    sql += `and id='${id}'`
  }
  return await handleMysqlExec(sql)
}

// 获取用户详情
const handleGetUserDetail = async id => {
  const sql = `select * from users where id='${id}'`
  const [TextRow] = await handleMysqlExec(sql)
  return TextRow
}

// 添加用户
const handleAddUser = async ({ name, sex, age }) => {
  const sql = `insert into users (name, sex, age) values ('${name}', '${sex}', '${age}')`
  const { insertId } = await handleMysqlExec(sql)
  return insertId
}

// 删除用户
const handleDelUser = async (id) => {
  const sql = `delete from users where id='${id}'`
  const { affectedRows } = await handleMysqlExec(sql)
  if (affectedRows > 0) {
    return true
  }
  return false
}

// 修改用户
const handleSetUser = async ({ id, name, sex, age }) => {
  const sql = `update users set name='${name}', sex='${sex}', age='${age}' where id='${id}'`
  const { affectedRows } = await handleMysqlExec(sql)
  if (affectedRows > 0) {
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
