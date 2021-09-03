const redis = require('redis')
const {
  redisConfig
} = require('../../config')

const client = redis.createClient(redisConfig.port, redisConfig.host)

client.on('error', error => {
  console.log('redis 错误~', error)
})

client.on('connect', () => {
  console.log('redis 连接成功~')
})

const handleRedisGet = key => {
  return new Promise((resolve, reject) => {
    client.get(key, (error, data) => {
      if (error) {
        reject(error)
      }
      resolve(data)
    })
  })
}

const handleRedisSet = (key, value) => {
  return new Promise((resolve, reject) => {
    client.set(key, value, (error, data) => {
      if (error) {
        reject(error)
      }
      resolve(data)
    })
  })
}

const handleRedisDel = key => {
  return new Promise((resolve, reject) => {
    client.del(key, (error, data) => {
      if (error) {
        reject(error)
      }
      resolve(data)
    })
  })
}

module.exports = {
  handleRedisGet,
  handleRedisSet,
  handleRedisDel
}
