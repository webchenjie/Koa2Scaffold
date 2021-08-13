const KoaRouter = require('koa-router')
const { viewPrefix } = require('../../config')

const router = new KoaRouter()

router.prefix(`${viewPrefix}/home`)

// 首页
router.get('/', async ctx => {
  await ctx.render('home', {
    title: 'Koa2'
  })
})

module.exports = router
