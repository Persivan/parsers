const cheerio = require('cheerio')


const sourceId = 2;
const sourceName = 'Drom';
const baseUrl = 'https://www.drom.ru/';

const DromScrapper = {
    async getCars(url) {
        console.log(`DromScrapper.getCars: started...`);
        const result = await fetch(url);
        const body = await result.text();

        let loadedCheerio = cheerio.load(body);

        let cars = [];

        loadedCheerio('a.css-xb5nz8.e1huvdhj1').each(function () {
            const name = loadedCheerio(this).find('span[data-ftid="bull_title"]').text();
            const imgurl = loadedCheerio(this).find('img[class="css-9w7beg evrha4s0"]').attr('data-src');
            const url = loadedCheerio(this).attr('href');
            const price = loadedCheerio(this).find('span[data-ftid="bull_price"]').text().replace(/\D+/g, ' ').trim();

            let car = {name, imgurl, url, price};

            cars.push(car);
        })
        console.log(`DromScrapper.getCars: completed (${cars.length})`);
        return cars;
    }
}

module.exports = DromScrapper;