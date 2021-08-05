const mysql = require('mysql2')
const { mysqlConfig } = require('../config')

const connection = mysql.createConnection(mysqlConfig)

const handleMysqlExec = sql => {
  return new Promise((resolve, reject) => {
    connection.query(sql, (err, results) => {
      if (err) {
        reject(err)
      }
      resolve(results)
    })
  })
}

module.exports = {
  handleMysqlExec
}
