const KoaRouter = require('koa-router')
const { apiPrefix } = require('../config')
const { SuccessModel, ErrorModel } = require('../model')
const {
  handleGetUserList,
  handleGetUserDetail,
  handleAddUser,
  handleDelUser,
  handleSetUser
} = require('../controller')

const router = new KoaRouter()

router.prefix(`${apiPrefix}/users`)

// 获取用户列表
router.get('/getList', async ctx => {
  const { id } = ctx.query
  const data = await handleGetUserList(id)
  ctx.body = new SuccessModel({
    data,
    msg: `获取用户信息列表成功了噢~`
  })
})

// 获取用户详情
router.get('/getDetail', async ctx => {
  const { id } = ctx.query
  if (!id) {
    ctx.body = new ErrorModel({
      msg: `id 不可为空噢~`
    })
    return
  }
  const data = await handleGetUserDetail(id)
  ctx.body = new SuccessModel({
    data,
    msg: `获取 id = ${id} 的用户信息成功了噢~`
  })
})

router.post('/addUser', async ctx => {
  const { name, sex, age } = ctx.request.body
  if (!name || !sex || !age) {
    ctx.body = new ErrorModel({
      msg: `name、sex、age不可为空噢~`
    })
    return
  }
  const data = await handleAddUser({ name, sex, age })
  ctx.body = new SuccessModel({
    data,
    msg: `id = ${data} 添加成功了噢~`
  })
})

router.post('/delUser', async ctx => {
  const { id } = ctx.request.body
  if (!id) {
    ctx.body = new ErrorModel({
      msg: `id 不可为空噢~`
    })
    return
  }
  const data = await handleDelUser(id)
  if (data) {
    ctx.body = new SuccessModel({
      data,
      msg: `id = ${id} 删除成功了噢~`
    })
  } else {
    ctx.body = new ErrorModel({
      msg: `id = ${id} 删除失败了噢~`
    })
  }
})

router.post('/setUser', async ctx => {
  const { id, name, sex, age } = ctx.request.body
  if (!id || !name || !sex || !age) {
    ctx.body = new ErrorModel({
      msg: `id、name、sex、age不可为空噢~`
    })
    return
  }
  const data = await handleSetUser({ id, name, sex, age })
  if (data) {
    ctx.body = new SuccessModel({
      data,
      msg: `id = ${id} 修改成功了噢~`
    })
  } else {
    ctx.body = new ErrorModel({
      msg: `id = ${id} 修改失败了噢~`
    })
  }
})

module.exports = router
