const puppeteer = require('puppeteer');

class UrlCrawlerUseCase {
  constructor (UrlRepository) {
    this.UrlRepository = UrlRepository;
  }

  async execute(originalUrl) {
    console.log('originalUrl: ', originalUrl);
    const [page, browser] = await this.launchNewPage(originalUrl);
    const title = await page.title();
    await this.UrlRepository.findAndUpdate({originalUrl}, {title});
    
    await browser.close();
    return title;
  }
  
  async launchNewPage(url) {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    })
    const page = await browser.newPage();

    if (url) {
      await page.goto(url);
    }

    return [page, browser];
  }
}

module.exports = UrlCrawlerUseCase