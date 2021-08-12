const mysqlConfig = require('./mysql')
const sequelizeConfig = require('./sequelize')
const mongodbConfig = require('./mongodb')
const redisConfig = require('./redis')

const config = {
  mysqlConfig, // mysql 配置
  sequelizeConfig, // sequelize 配置
  mongodbConfig, // mongodb 配置
  redisConfig, // redis 配置
  apiPrefix: '/api', // API 前缀
  viewPrefix: '/view', // View 前缀
  httpPort: '10240', // HTTP 端口
  /**
   * isSeparation 表示是否是前后端分离
   * 如果是则会引入 commonRouter，否则不会（自动），详看 router/index.js
   * 如果是还需要在入口的 index.js 中的 koa-onerror 中添加 redirect 来捕获错误
   * 如：koaOnerror(app, { redirect: '/500' })
   * 注意：如果是首页则应该使用 views 中的页面，而不是 public 目录中的页面
   */
  isSeparation: true
}

module.exports = config
