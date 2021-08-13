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

/**
 * @api {get} /users/getList 获取用户列表
 * @apiVersion 1.0.0
 * @apiName getList
 * @apiGroup 用户管理
 * @apiHeader {String} Content-Type application/json
 * @apiParam {String} id 用户 id（非必填）
 * @apiSuccess {Number} code 结果标识
 * @apiSuccess {String} msg 结果说明
 * @apiSuccess {Object[]} data 结果数据
 * @apiSuccessExample {json} 成功响应
 *  {
      "code": 0,
      "data": [],
      "msg": "获取用户信息成功了噢~"
    }
 */
router.get('/getList', async ctx => {
  const { id } = ctx.params
  const data = await handleGetUserList(id)
  ctx.body = new SuccessModel({
    data,
    msg: `获取用户信息列表成功了噢~`
  })
})

/**
 * @api {get} /users/getDetail 获取用户详情
 * @apiVersion 1.0.0
 * @apiName getDetail
 * @apiGroup 用户管理
 * @apiHeader {String} Content-Type application/json
 * @apiParam {String} id 用户 id（必填）
 * @apiSuccess {Number} code 结果标识
 * @apiSuccess {String} msg 结果说明
 * @apiSuccess {Object} data 结果数据
 * @apiSuccessExample {json} 成功响应
 *  {
      "code": 0,
      "data": {},
      "msg": "获取用户信息成功了噢~"
    }
 */
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

/**
 * @api {post} /users/addUser 添加用户
 * @apiVersion 1.0.0
 * @apiName addUser
 * @apiGroup 用户管理
 * @apiHeader {String} Content-Type application/json
 * @apiParam {String} name 用户 name（必填）
 * @apiParam {String} sex 用户 sex（必填）
 * @apiParam {String} age 用户 age（必填）
 * @apiSuccess {Number} code 结果标识
 * @apiSuccess {String} msg 结果说明
 * @apiSuccess {Object} data 结果数据
 * @apiSuccessExample {json} 成功响应
 *  {
      "code": 0,
      "data": "id",
      "msg": "添加用户成功了噢~"
    }
 */
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

/**
 * @api {post} /users/delUser 删除用户
 * @apiVersion 1.0.0
 * @apiName delUser
 * @apiGroup 用户管理
 * @apiHeader {String} Content-Type application/json
 * @apiParam {String} id 用户 id（必填）
 * @apiSuccess {Number} code 结果标识
 * @apiSuccess {String} msg 结果说明
 * @apiSuccess {Object} data 结果数据
 * @apiSuccessExample {json} 成功响应
 *  {
      "code": 0,
      "data": "id",
      "msg": "删除用户成功了噢~"
    }
 */
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

/**
 * @api {post} /users/setUser 修改用户
 * @apiVersion 1.0.0
 * @apiName setUser
 * @apiGroup 用户管理
 * @apiHeader {String} Content-Type application/json
 * @apiParam {String} id 用户 id（必填）
 * @apiParam {String} name 用户 name（必填）
 * @apiParam {String} sex 用户 sex（必填）
 * @apiParam {String} age 用户 age（必填）
 * @apiSuccess {Number} code 结果标识
 * @apiSuccess {String} msg 结果说明
 * @apiSuccess {Object} data 结果数据
 * @apiSuccessExample {json} 成功响应
 *  {
      "code": 0,
      "data": "id",
      "msg": "修改用户成功了噢~"
    }
 */
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
