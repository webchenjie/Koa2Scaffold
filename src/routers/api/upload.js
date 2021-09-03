const KoaRouter = require('koa-router')
const {
  apiPrefix
} = require('../../config')
const {
  SuccessModel,
  ErrorModel
} = require('../../model')
const {
  handleStreamFile
} = require('../../controller')

const router = new KoaRouter()

router.prefix(`${apiPrefix}/upload`)

/**
 * @api {post} /upload/image 上传图片
 * @apiVersion 1.0.0
 * @apiName image
 * @apiGroup 文件管理
 * @apiHeader {String} Content-Type multipart/form-data
 * @apiParam {String} file 文件（必填）
 * @apiSuccess {Number} code 结果标识
 * @apiSuccess {String} msg 结果说明
 * @apiSuccess {Object[]} data 结果数据
 * @apiSuccessExample {json} 成功响应
 *  {
      "code": 0,
      "data": "url",
      "msg": "上传成功了噢~"
    }
 */
router.post('/image', async ctx => {
  const {
    file
  } = ctx.params
  const {
    header
  } = ctx.request // 上传的文件在ctx.request.files.file
  if (file) {
    const data = await handleStreamFile(header, file)
    ctx.body = new SuccessModel({
      data,
      msg: '上传成功了噢~'
    })
  } else {
    ctx.body = new ErrorModel({
      msg: '上传失败了噢~'
    })
  }
})

module.exports = router
