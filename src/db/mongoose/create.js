const mongoose = require('mongoose')
const {
  mongodbConfig
} = require('../../config')

mongoose.connect(`${mongodbConfig.host}/${mongodbConfig.database}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection

// 发生错误
db.on('error', error => {
  console.log('mongoose 错误~', error)
})

// 连接成功
db.once('open', () => {
  console.log('mongoose 连接成功~')
})

module.exports = mongoose
