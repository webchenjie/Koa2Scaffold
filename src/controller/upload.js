const fs = require('fs')
const path = require('path')

// 文件处理
const handleStreamFile = async (header, file) => {
  const stream = fs.createReadStream(file.path)
  const fileName = `${new Date().getTime()}.${file.name}`
  const filePath = `${path.join(__dirname, '../../public/upload/')}/${fileName}`
  const upStream = fs.createWriteStream(filePath)
  stream.pipe(upStream)
  return `${header.host}/upload/${fileName}`
}

module.exports = {
  handleStreamFile
}
