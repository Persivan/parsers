const Puppeteer = require('puppeteer')
const {Page} = require("puppeteer");


const sourceId = 3;
const sourceName = 'Aliexpress';
const baseUrl = 'https://aliexpress.ru/';

const AliexpressScrapper = {
    async getGoodInfo(urls) {
        const browser = await Puppeteer.launch({ headless: false, defaultViewport: { width: 1366, height: 768 } });
        const page = await browser.newPage();
        const prices = [];

        for (const url of urls) {
            prices.push(await this.getPrice(page, url));
            // Wait for 10 seconds between each getPrice() call
            await this.sleep(10000);
        }

        await browser.close();

        return prices.map(price => price.replace(/\D/g, ''));
    },

    async getPrice(page, url) {
        await page.goto(url);
        await page.waitForSelector('.snow-price_SnowPrice__mainS__1cmks6');
        return await page.$eval('.snow-price_SnowPrice__mainS__1cmks6', element => element.textContent);
    },

    // Function to sleep for a given number of milliseconds
    async sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
module.exports = AliexpressScrapper;
