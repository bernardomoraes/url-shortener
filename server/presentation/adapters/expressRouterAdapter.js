module.exports = class ExpressRouterAdapter {
  static adapt(router) {
    return async (req, res) => {
      const httpRequest = {
        body: req.body,
        params: req.params,
        query: req.query,
      }
      const httpResponse = await router.route(httpRequest)

      if (httpResponse.redirect) {
        res.redirect(httpResponse.redirect)
        return
      }
      res.status(httpResponse.statusCode).json(httpResponse.body)
    }
  }
}