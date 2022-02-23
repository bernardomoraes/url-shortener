const UrlRepository = require('../../infra/models/url');
class UrlRedirectorUseCase {
  async execute(slug) {
      const dbObject = await UrlRepository.get(slug)
      
      if (!dbObject) return
      
      dbObject.count = dbObject.count + 1;
      dbObject.save();
      return dbObject;
    
  }
}

module.exports = UrlRedirectorUseCase