const UrlRepository = require('../../infra/models/url');
class UrlRedirectorUseCase {
  constructor (UrlRepository) {
    this.UrlRepository = UrlRepository;
  }
  
  async execute(slug) {
      const dbObject = await this.UrlRepository.get(slug)
      
      if (!dbObject) return
      
      dbObject.count = dbObject.count + 1;
      dbObject.save();
      return dbObject;
    
  }
}

module.exports = UrlRedirectorUseCase