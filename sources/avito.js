/*
* Переписать под формат других файлов, чтобы экспорт был нормальным
* */







// Библа, чтобы парсить
const cheerio = require('cheerio')
// Библа для удобных фич
const _ = require('lodash')

// Константы источника
const sourceId = 1;
const sourceName = 'Avito';
const baseUrl = 'https://www.avito.ru/';
let ui = null;




module.exports = class AvitoScraper {
    // Авито параша, не дает себя запарсить, выдает страницу вида ../avitoParserAttempt.html
    async getCars (page, url) {
        const result = await fetch(url);
        const body = await result.text();

        const loadedCheerio = cheerio.load(body);

        let cars = [];



        return { cars };
    };
};