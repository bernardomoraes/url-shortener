const urlShortner = require('./urlShortnerUseCase')
const urlRedirector = require('./urlRedirectorUseCase')
const urlCrawler = require('./urlCrawlerUseCase')
const UrlRepository = require('../../infra/models/url');

module.exports = {
  urlShortner: new urlShortner(UrlRepository),
  urlRedirector: new urlRedirector(UrlRepository),
  urlCrawler: new urlCrawler(UrlRepository),
}
