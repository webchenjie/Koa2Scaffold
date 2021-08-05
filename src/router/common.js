const KoaRouter = require('koa-router')

const router = new KoaRouter()

// 首页
router.get('/', async ctx => {
  await ctx.render('index', {
    title: 'Koa2'
  })
})

// 500
router.get('/500', async ctx => {
  await ctx.render('500')
})

// 404
router.get('*', async ctx => {
  await ctx.render('404')
})

module.exports = router
