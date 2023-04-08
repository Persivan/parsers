/**
 * Сохранение/чтение из файла
 */
const util = require('util');
const fs = require('fs');
const readFileAsync = util.promisify(fs.readFile);

module.exports = {
    save: function (path, obj) {
        fs.writeFile(path, JSON.stringify(obj, null, 4), (err) => {
            if (err) throw err;
            console.log('Object saved to file!');
        });
    },

    read: async function (path) {
        try {
            const data = await readFileAsync(path, 'utf8');
            const obj = JSON.parse(data);
            console.log('Object from file:');
            console.log(obj);
            return obj;
        } catch (err) {
            console.log('read: error in reading or parsing file');
            return undefined;
        }
    }
}