const Mongodb = require('mongodb')
const { mongodbConfig } = require('../../config')

const handleMongodbExec = collectionName => {
  return new Promise((resolve, reject) => {
    Mongodb.MongoClient.connect(mongodbConfig.host, (error, client) => {
      if (error) {
        reject(error)
      }
      const db = client.db(mongodbConfig.database)
      collection = db.collection(collectionName)
      resolve(collection)
    })
  })
}

module.exports = {
  handleMongodbExec
}
