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

dotenv.config()
TOKEN = process.env.TOKEN

let cars = [];

async function parseAndSendDrom() {
    let dromCars = [];
    for (let i = 0; i < config.urls.length; i++) {
        dromCars.append(await DromScrapper.getCars(config.urls[0]));
    }
    let newCarsCount = 0;
    for (let i = 0; i < dromCars.length; i++) {
        // Проверяем есть ли подобная запись в массиве cars
        const exists = cars.find((obj) => obj.url === dromCars[i].url);
        // Если нет, отправляем ее. При успешной отправки запись добавиться.
        if (!exists) {
            newCarsCount++;
            let errorFlag = false;
            for (let j = 0; j < config.discordIdes.length; j++) {
                // Ищем пользователей и отправляем им сообщения
                await client.users.fetch(config.discordIdes[j])
                    .then(user => {
                            console.log(`sending a link: ${dromCars[i].url}`)

                            let msgToSend = dromCars[i].url;

                            user.send(msgToSend)

                                .catch(err => {
                                    errorFlag = true;
                                    console.log(err);
                                })
                        }
                    )
                    .catch(err => {
                        console.log('error while sending a message')
                        console.log(err)
                        errorFlag = true;
                    })

            }
            if (!errorFlag) cars.push(dromCars[i])
            else process.exit(1);
        }
    }
    console.log(`New cars count: ${newCarsCount}`);
}

client.on("ready", async () => {
    console.log(`Entered as ${client.user.tag}`)
    await parseAndSendDrom()
    // Каждые 30 секунд полчаса (1800 секунд)
    setInterval(async () => {
        // Парсим страницы
        console.log('parsing again');
        await parseAndSendDrom();
    }, 1800000);
});

client.login(TOKEN)

client.on("messageCreate", async(message) => {
    // Защита, чтобюы бот не отвечал самому себе
    if (message.author.bot) {
        return;
    }
    else if (message.content === "stop") {
        process.exit(2);
    }
})