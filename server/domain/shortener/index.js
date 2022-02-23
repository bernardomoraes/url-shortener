const urlShortener = require('./urlShortenerUseCase')
const urlRedirector = require('./urlRedirectorUseCase')
const urlCrawler = require('./urlCrawlerUseCase')
const UrlRepository = require('../../infra/models/url');

module.exports = {
  urlShortener: new urlShortener(UrlRepository),
  urlRedirector: new urlRedirector(UrlRepository),
  urlCrawler: new urlCrawler(UrlRepository),
}
