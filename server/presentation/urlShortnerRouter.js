const HttpResponse = require('./helpers/http-response');
const { urlCrawler } = require('../domain/shortner')
module.exports = class UrlShortnerRouter {
  constructor (UrlShortnerUseCase) {
    this.UrlShortnerUseCase = UrlShortnerUseCase;
  }

  async route(httpRequest) {
    try {
      const { url } = httpRequest.body;
      if (!url) {
        return HttpResponse.badRequest('Url is required');
      }
      const response = await this.UrlShortnerUseCase.execute(url)
      
      if (!response) {
        return HttpResponse.serverError();
      }

      await urlCrawler.execute(url);

      return { statusCode: 200, body: response };
      
    } catch (error) {
      console.log('error: ', {
        message: error.message,
        stack: error.stack,
      });
      return HttpResponse.serverError();
    }
  }
}