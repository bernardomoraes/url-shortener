const urlsModel = require('../mongoDB/entities/url');
class UrlRepository {
  static async register(urlObject) {
    let dbObject = await urlsModel.findOne({shortUrl: urlObject.shortUrl}, urlObject);
    if (!dbObject) {
      dbObject = await urlsModel.create(urlObject);
    }
    return dbObject
  }

  static async get(slug) {
    const dbObject = await urlsModel.findOne({shortUrl: slug});
    return dbObject
  }
}

module.exports = UrlRepository