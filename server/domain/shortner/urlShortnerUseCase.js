const cryptojs = require('crypto-js');
class UrlShortnerUseCase {
  constructor (UrlRepository) {
    this.UrlRepository = UrlRepository;
  }

  async execute(originalUrl) {
    // It's possible to have a better way to do this, 
    // something like using a crescent slicer from encoder string 
    // after verifing if the shortned url is used before and than using slice + 1
    // and verifing again util find one that's not used, but I have no time to do it.
    const shortUrl = this.encode(this.decode(cryptojs.MD5(originalUrl).toString())).slice(0,4);
    const urlObject = {
      originalUrl,
      shortUrl,
    }
    await this.UrlRepository.register(urlObject)

    return {
      shortUrl
    } 
    
  }
  

  decode(url) {
    const base62 = {
      charset: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        .split(''),
      decode: chars => chars.split('').reverse().reduce((prev, curr, i) =>
        prev + (base62.charset.indexOf(curr) * (62 ** i)), 0)
    };
    return base62.decode(url);
  }
  encode(url) {
    const base62 = {
      charset: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        .split(''),
      encode: integer => {
        if (integer === 0) {
          return 0;
        }
        let s = [];
        while (integer > 0) {
          s = [base62.charset[integer % 62], ...s];
          integer = Math.floor(integer / 62);
        }
        return s.join('');
      }
    };
    return base62.encode(url);
    
  }
}

module.exports = UrlShortnerUseCase