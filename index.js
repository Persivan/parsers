const DromScrapper = require('./sources/drom.js')
const config = require('./config.js')
const dotenv = require("dotenv")

const {Client, GatewayIntentBits} = require("discord.js");
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
    ],
});

const fileSaverReader = require('./tools/file_saver_reader.js');

dotenv.config()
TOKEN = process.env.TOKEN

let cars = [];

/**
 * Нужно, чтобы прочитать значения из файла
 * @returns {Promise<void>}
 */
async function configure() {
    cars = await fileSaverReader.read('./temp/cars.txt');       // Читаем массив из файла если он есть
    if (!cars) cars = [];                                       // Если его нет, создаем пустой массив
}

async function getAllCars() {
    let allCars = []

    // Drom
    for (let i = 0; i < config.urls.length; i++) {
        allCars = allCars.concat(await DromScrapper.getCars(config.urls[i]));
    }

    return allCars
}

/**
 * Вернет массив элементов не входящих в главный массив, сравнение идет по параметру arg
 * @param mainArray
 * @param secondArray
 * @param arg
 * @returns {*}
 */
function getUniqueItems(mainArray, secondArray, arg) {
    return secondArray.filter((item) => {
        let itemExists = mainArray.some((mainItem) => mainItem[arg] === item[arg]);
        return !itemExists;
    });
}

async function parseAndSend() {
    // Получаем машинки со всех сайтов
    let allCarsFromUrls = await getAllCars();

    // Берем только те, которые не отправили (отправленные хранятся в cars и в файле ./temp/cars.txt)
    let newCars = getUniqueItems(cars, allCarsFromUrls, 'url');
    console.log(`We have ${newCars.length} new cars!`)

    // Отправляем список машинок, которые еще не отправляли
    let errorFlag = false;
    for (let j = 0; j < config.discordIdes.length; j++) {   // Перебор по пользователям
        // Ищем пользователей и отправляем им сообщения
        await client.users.fetch(config.discordIdes[j])
            .then(user => {
                    for (let i = 0; i < newCars.length; i++) {  // Перебор по списку отправляемых ссылок
                        console.log(`Sending a link: ${newCars[i].url}`)
                        let msgToSend = newCars[i].url;
                        user.send(msgToSend)
                            .catch(err => {
                                errorFlag = true;
                                console.log(err);
                            })
                    }

                }
            )
            .catch(err => {
                console.log('error while sending a message')
                console.log(err)
                errorFlag = true;
            })

    }

    // Обновляем список в программе и в файле
    if (!errorFlag && newCars.length > 0) {
        cars = cars.concat(newCars);
        fileSaverReader.save('temp/cars.txt', cars);
    }
}

client.on("ready", async () => {
    console.log(`Entered as ${client.user.tag}`)

    // Инициализируем глобальные переменные
    await configure();
    
    await parseAndSend()
    // Каждые 30 секунд полчаса (1800 секунд)
    setInterval(async () => {
        // Парсим страницы
        console.log('parsing again');
        await parseAndSend();
    }, 1800000);
});

client.login(TOKEN)

client.on("messageCreate", async (message) => {
    // Защита, чтобюы бот не отвечал самому себе
    if (message.author.bot) {
        return;
    } else if (message.content === "stop") {
        process.exit(2);
    }
})