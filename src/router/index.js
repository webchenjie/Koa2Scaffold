const combineRouters = require('koa-combine-routers')
const { isSeparation } = require('../config')

const routerList = [
  require('./upload'),
  require('./users')
]

// 如果不是前后端分离的项目则引入首页、错误页等公共路由
if (!isSeparation) {
  routerList.push(require('./common'))
}

const router = combineRouters(...routerList)

module.exports = router
