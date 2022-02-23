const UrlShortnerRouter = require('../server/presentation/urlShortnerRouter')
const UrlShortnerUseCase = require('../server/domain/shortner/urlShortnerUseCase')

makeSut = () => {
  class UrlShortnerUseCaseSpy {
    async execute(url) {
      this.url = url
    }
  }
  const urlShortnerUseCaseSpy = new UrlShortnerUseCaseSpy()
  const sut = new UrlShortnerRouter(urlShortnerUseCaseSpy)

  return {
    sut,
    urlShortnerUseCaseSpy
  }
}

describe('Url Shortner Use Cases', () => {
  describe('Shortner', () => {
    it('should return 400 if no URL is provided', async () => {
      const { sut } = makeSut()
      httpRequest = {
        body : {
        }
      }
      let httpResponse = await sut.route(httpRequest)
      expect(httpResponse.statusCode).toBe(400)
      
    })
    it('should call UrlShortnerUseCase with correct params', () => {
      const { sut, urlShortnerUseCaseSpy } = makeSut()
      httpRequest = {
        body : {
          url: 'http://www.google.com'
        }
      }
      sut.route(httpRequest)
      expect(urlShortnerUseCaseSpy.url).toBe(httpRequest.body.url)
    })
    it('should shorten an URL', async () => {
      const UrlRepositorySpy = {}
      UrlRepositorySpy.register = jest.fn()
      
      const url = 'http://www.google.com'
      const sut = new UrlShortnerUseCase(UrlRepositorySpy)
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
