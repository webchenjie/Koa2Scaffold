const KoaRouter = require('koa-router')
const { viewPrefix } = require('../../config')

const router = new KoaRouter()

// 500
router.get('/500', async ctx => {
  await ctx.render('500')
})

// 404
router.get('*', async ctx => {
  await ctx.render('404')
})

module.exports = router
