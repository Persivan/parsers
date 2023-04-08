const cheerio = require('cheerio')
const _ = require('lodash')


const sourceId = 0;
const sourceName = 'RanobeLib';
const baseUrl = 'https://ranobelib.me';
let ui = null;

const RanobeLibScraper = {
    async popularNovels(page, {showLatestNovels, filters}) {
        let url = `${baseUrl}/manga-list?sort=`;
        url += _.defaultTo(
            filters?.sort,
            showLatestNovels ? 'last_chapter_at' : 'rate',
        );
        url += '&dir=' + _.defaultTo(filters?.order, 'desc');
        url += '&page=' + page;

        if (filters?.type?.length) {
            url += filters.type.map(i => `&types[]=${i}`).join('');
        }

        if (filters?.format?.length) {
            url += filters.format.map(i => `&format[include][]=${i}`).join('');
        }

        if (filters?.status?.length) {
            url += filters.status.map(i => `&status[]=${i}`).join('');
        }

        if (filters?.statuss?.length) {
            url += filters.statuss.map(i => `&manga_status[]=${i}`).join('');
        }

        if (filters?.genres?.length) {
            url += filters.genres.map(i => `&genres[include][]=${i}`).join('');
        }

        if (filters?.tags?.length) {
            url += filters.tags.map(i => `&tags[include][]=${i}`).join('');
        }

        const result = await fetch(url);
        const body = await result.text();

        const loadedCheerio = cheerio.load(body);
        ui = loadedCheerio('a.header-right-menu__item')
            .attr('href')
            ?.replace?.(/[^0-9]/g, '');

        let novels = [];

        loadedCheerio('.media-card-wrap').each(function () {
            const novelName = loadedCheerio(this).find('.media-card__title').text();
            const novelCover = loadedCheerio(this)
                .find('a.media-card')
                .attr('data-src');
            const novelUrl = loadedCheerio(this).find('a.media-card').attr('href');

            const novel = {sourceId, novelName, novelCover, novelUrl};

            novels.push(novel);
        });

        return {novels};
    }
}

module.exports = RanobeLibScraper;