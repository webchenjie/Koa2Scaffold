/**
 * 基础数据模型
 */
class BaseModel {
  constructor({ code, data, msg }) {
    this.code = code
    this.data = data
    this.msg = msg
  }
}

/**
* 成功数据模型
*/
class SuccessModel extends BaseModel {
  constructor({ code = 0, data = {}, msg = '成功' }) {
    super({
      code,
      data,
      msg
    })
  }
}

/**
* 失败数据模型
*/
class ErrorModel extends BaseModel {
  constructor({ code = -1, data = null, msg = '失败' }) {
    super({
      code,
      data,
      msg
    })
  }
}

module.exports = {
  SuccessModel,
  ErrorModel
}
