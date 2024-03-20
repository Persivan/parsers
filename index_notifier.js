const dotenv = require("dotenv")
dotenv.config()
TOKEN = process.env.TOKEN

let channelToSpam = null;

// discord js settingss
const {Client, GatewayIntentBits} = require("discord.js");
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
});

client.login(TOKEN)
client.on("messageCreate", async (message) => {
    // Защита, чтобюы бот не отвечал самому себе
    if (message.author.bot) return;
    else if (message.content === "stop") {
        console.log("Someone said stop( " + message.author.tag)
        process.exit(2);
    }
    else if (message.content === "спамь сюда ♥") {
        await message.reply("Принято!");
        channelToSpam = message.channel;
    }
    else if (message.content === 'проверка спам атаки ♥') {
        if (!channelToSpam) {
            await message.reply('Канал под спам еще не выбран. Выбери написав в чат кодовую фразу)');
            return;
        }
        channelToSpam.send("Проверка прошла успешно")
            .then(message => console.log(`Sent message: ${message.content}`))
            .catch(console.error);
    }
})

client.on("ready", async () => {
    console.log(`Entered as ${client.user.tag}`);
    console.log('Не забудь указать канал для спама!');
});


// Далее идет cron и чтение файла


const fs = require('fs');
const csv = require('csv-parser');
const cron = require('node-cron');

// Object to store last prices of each link
const lastPrices = {};

// Function to read the CSV file and compare prices
function readCSV() {
    fs.createReadStream('example.csv')
        .pipe(csv())
        .on('data', (row) => {
            const { Link, Price } = row;
            if (lastPrices[Link] !== undefined && lastPrices[Link] !== Price) {
                console.log(`Price changed for ${Link}. New price: ${Price}`);
                channelToSpam.send(`Price changed for ${Link}. New price: ${Price}`)
                    .then(message => console.log(`Sent message: ${message.content}`))
                    .catch(console.error);
            }
            lastPrices[Link] = Price;
        })
        .on('end', () => {
            console.log('CSV file has been processed');
        });
}

// Schedule cron job to read CSV every minute
cron.schedule('* * * * *', () => {
    readCSV();
});

