const links = [
    'https://aliexpress.ru/item/1005003571974003.html',
    'https://aliexpress.ru/item/1005003571974003.html?sku_id=12000034752422272',
    'https://aliexpress.ru/item/1005003571974003.html?sku_id=12000034752422268',
    'https://aliexpress.ru/item/1005003571974003.html?sku_id=12000034156956313',
    'https://aliexpress.ru/item/1005005853953314.html',
]
const csvFile = 'example.csv';




const goods = []

const AliexpressScrapper = require('./sources/aliexpress');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// Function to fetch data and append to CSV
function fetchDataAndAppend() {
    AliexpressScrapper.getGoodInfo(links)
        .then(res => {
            const goods = [];
            res.forEach((price, index) => {
                goods.push({
                    link: links[index],
                    price: price,
                    date: new Date(Date.now()).toLocaleString()
                });
            });
            console.log(goods);
            appendToCSV(csvFile, goods);
        })
        .catch(error => {
            console.error('Error occurred:', error);
        });
}

// Initial run
fetchDataAndAppend();

// Schedule subsequent runs every hour
const interval = 60 * 60 * 1000; // 1 hour in milliseconds
setInterval(fetchDataAndAppend, interval);


// Append data to CSV file
function appendToCSV(file, newData) {
    const csvWriter = createCsvWriter({
        path: file,
        header: [
            { id: 'link', title: 'Link' },
            { id: 'price', title: 'Price' },
            { id: 'date', title: 'Date' }
        ],
        append: true
    });
    csvWriter.writeRecords(newData)
        .then(() => console.log('Data appended to CSV file successfully'));
}
