const HttpResponse = require('./helpers/http-response');
module.exports = class UrlRedirectorRouter {
  constructor (UrlRedirectorUseCase) {
    this.UrlRedirectorUseCase = UrlRedirectorUseCase;
  }

  async route(httpRequest) {
    try {
      const { slug } = httpRequest.params;
      if (!slug) {
        return HttpResponse.badRequest('Slug is required');
      }

      const dbObject = await this.UrlRedirectorUseCase.execute(slug)
      
      if (!dbObject) {
        return HttpResponse.badRequest('Url not found');
      }
      
      return { redirect: dbObject.originalUrl };
      
    } catch (error) {
      console.log('error: ', {
        message: error.message,
        stack: error.stack,
      });

      return HttpResponse.serverError();
    }
  }
}