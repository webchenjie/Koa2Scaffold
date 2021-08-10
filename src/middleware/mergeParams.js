const mergeParamsMiddleware = async (ctx, next) => {
  ctx.params = {
    ...ctx.query,
    ...ctx.request.body,
    ...ctx.request.files
  }
  await next()
}

module.exports = {
  mergeParamsMiddleware
}
