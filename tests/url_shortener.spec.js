const UrlShortenerRouter = require('../server/presentation/urlShortenerRouter')
const UrlShortenerUseCase = require('../server/domain/shortener/urlShortenerUseCase')

makeSut = () => {
  class UrlShortenerUseCaseSpy {
    async execute(url) {
      this.url = url
    }
  }
  const urlShortenerUseCaseSpy = new UrlShortenerUseCaseSpy()
  const sut = new UrlShortenerRouter(urlShortenerUseCaseSpy)

  return {
    sut,
    urlShortenerUseCaseSpy
  }
}

describe('Url Shortener Use Cases', () => {
  describe('Shortener', () => {
    it('should return 400 if no URL is provided', async () => {
      const { sut } = makeSut()
      httpRequest = {
        body : {
        }
      }
      let httpResponse = await sut.route(httpRequest)
      expect(httpResponse.statusCode).toBe(400)
      
    })
    it('should call UrlShortenerUseCase with correct params', () => {
      const { sut, urlShortenerUseCaseSpy } = makeSut()
      httpRequest = {
        body : {
          url: 'http://www.google.com'
        }
      }
      sut.route(httpRequest)
      expect(urlShortenerUseCaseSpy.url).toBe(httpRequest.body.url)
    })
    it('should shorten an URL', async () => {
      const UrlRepositorySpy = {}
      UrlRepositorySpy.register = jest.fn()
      
      const url = 'http://www.google.com'
      const sut = new UrlShortenerUseCase(UrlRepositorySpy)
      const { shortUrl } = await sut.execute(url)

      expect(shortUrl).toBe('ed64')
      expect(shortUrl.length).toBe(4)
      expect(shortUrl).toMatch(/^[a-zA-Z0-9]+$/)
      expect(UrlRepositorySpy.register).toHaveBeenCalledWith({
        originalUrl: url,
        shortUrl: shortUrl
      })
    })
    it('should crawl title from original url', async () => {

    })
  })
  describe('Most Used', () => {
    it('should return the most used URLs', () => {
      
    })
  })
  describe('Redirect', () => {
    it('should redirect to original URL', () => {
      
    })
  })
})
