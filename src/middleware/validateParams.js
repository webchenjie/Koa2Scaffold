const { ErrorModel } = require('../model')

const validateParamsMiddleware = schema => {
  return async (ctx, next) => {
    const { error } = schema.validate(ctx.params)
    if (error) {
      ctx.body = new ErrorModel({
        msg: error.message
      })
      return
    }
    await next()
  }
}

module.exports = {
  validateParamsMiddleware
}
