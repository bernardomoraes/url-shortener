const HttpResponse = require('./helpers/http-response');
const { urlCrawler } = require('../domain/shortener')
module.exports = class UrlShortenerRouter {
  constructor (UrlShortenerUseCase) {
    this.UrlShortenerUseCase = UrlShortenerUseCase;
  }

  async route(httpRequest) {
    try {
      const { url } = httpRequest.body;
      if (!url) {
        return HttpResponse.badRequest('Url is required');
      }
      const response = await this.UrlShortenerUseCase.execute(url)
      
      if (!response) {
        return HttpResponse.serverError();
      }

      urlCrawler.execute(url);

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