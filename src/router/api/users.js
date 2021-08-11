const KoaRouter = require('koa-router')
const Joi = require('joi')
const { apiPrefix } = require('../../config')
const { SuccessModel, ErrorModel } = require('../../model')
const { validateParamsMiddleware } = require('../../middleware')
const {
  handleGetUserList,
  handleGetUserDetail,
  handleAddUser,
  handleDelUser,
  handleSetUser
} = require('../../controller')

const router = new KoaRouter()

router.prefix(`${apiPrefix}/users`)

// 获取用户列表
router.get('/getList', async ctx => {
  const { id } = ctx.params
  const data = await handleGetUserList(id)
  ctx.body = new SuccessModel({
    data,
    msg: `获取用户信息列表成功了噢~`
  })
})

// 获取用户详情
const getDetailSchema = Joi.object({
  id: Joi.required().error(new Error('id 不可为空~'))
})
router.get('/getDetail', validateParamsMiddleware(getDetailSchema), async ctx => {
  const { id } = ctx.params
  const data = await handleGetUserDetail(id)
  ctx.body = new SuccessModel({
    data,
    msg: `获取 id = ${id} 的用户信息成功了噢~`
  })
})

// 添加用户
const addUserSchema = Joi.object({
  name: Joi.required().error(new Error('name 不可为空~')),
  sex: Joi.required().error(new Error('sex 不可为空~')),
  age: Joi.required().error(new Error('age 不可为空~'))
})
router.post('/addUser', validateParamsMiddleware(addUserSchema), async ctx => {
  const { name, sex, age } = ctx.params
  const data = await handleAddUser({ name, sex, age })
  ctx.body = new SuccessModel({
    data,
    msg: `id = ${data} 添加成功了噢~`
  })
})

// 删除用户
const delUserSchema = Joi.object({
  id: Joi.required().error(new Error('id 不可为空~'))
})
router.post('/delUser', validateParamsMiddleware(delUserSchema), async ctx => {
  const { id } = ctx.params
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

// 修改用户
const setUserSchema = Joi.object({
  id: Joi.required().error(new Error('id 不可为空~')),
  name: Joi.required().error(new Error('name 不可为空~')),
  sex: Joi.required().error(new Error('sex 不可为空~')),
  age: Joi.required().error(new Error('age 不可为空~'))
})
router.post('/setUser', validateParamsMiddleware(setUserSchema), async ctx => {
  const { id, name, sex, age } = ctx.params
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
