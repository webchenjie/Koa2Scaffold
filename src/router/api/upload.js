const KoaRouter = require('koa-router')
const { apiPrefix } = require('../../config')
const { SuccessModel, ErrorModel } = require('../../model')
const { handleStreamFile } = require('../../controller')

const router = new KoaRouter()

router.prefix(`${apiPrefix}/upload`)

router.post('/', async ctx => {
  const { file } = ctx.params
  const { header } = ctx.request // 上传的文件在ctx.request.files.file
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
