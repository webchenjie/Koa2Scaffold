const Koa = require('koa')
const koaCors = require('@koa/cors')
const koaBody = require('koa-body')
const koaJson = require('koa-json')
const koaHelmet = require('koa-helmet')
const koaLogger = require('koa-logger')
const koaCompose = require('koa-compose')
const koaCompress = require('koa-compress')
const koaStatic = require('koa-static')
const koaViews = require('koa-views')
const koaOnerror = require('koa-onerror')
const day = require('dayjs')
const path = require('path')
const router = require('./router')
const { mergeParamsMiddleware } = require('./middleware')

const app = new Koa()

const koaMiddleware = koaCompose([
  koaCors(), // 自动添加跨域响应头
  koaJson(), // 返回数据 json 格式化
  koaHelmet(), // 自动添加安全响应头
  koaCompress(), // 响应压缩
  koaBody({ // 参数解析
    multipart: true,
    formidable: { maxFileSize: 1024 * 1024 * 1024 } // 1G
  }),
  koaLogger(str => { // 本地请求日志
    console.log(`${day().format('YYYY-MM-DD HH:mm:ss')}${str}`)
  }),
  koaStatic(path.join(__dirname, '../public')),
  koaViews(`${__dirname}/views`, { extension: 'ejs' })
])

koaOnerror(app) // 自动添加错误响应状态码和响应头

app.use(koaMiddleware)
app.use(mergeParamsMiddleware)
app.use(router())

// 错误监听
app.on('error', async (err, ctx) => {
  console.log('错误上下文：', ctx)
  console.error('错误信息：', err)
})

module.exports = app
