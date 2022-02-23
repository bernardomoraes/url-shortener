const urlShortner = require('./urlShortnerUseCase')
const UrlRepository = require('../../infra/models/url');
const urlRedirector = require('./urlRedirectorUseCase')

module.exports = {
  urlShortner: new urlShortner(UrlRepository),
  urlRedirector: new urlRedirector(UrlRepository),
}
