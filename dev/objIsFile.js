/*
* Забоошено, подобную конструкцию не знаю как создать.
* Класс для хранения классов внутри файлов. Полезно при перезагрузках программы.
*
*/
const fs = require('fs');

module.exports = {
    fileAsObject: class  {
        constructor(path) {
            if (!path || path === "") throw new Error("path can't be empty");
            this.path = path;
            this.mainObject = undefined;
            if (!fs.existsSync(this.path)) {
                console.log(`File '${this.path}' is not created yet\nCreating...`)
                fs.writeFileSync(this.path);
                console.log(`Created`)
            }
        }

        write (obj) {
            this.mainObject = obj;
            fs.writeFileSync(this.mainObject, JSON.stringify(this.mainObject));
        }

        read() {
            const fileContent = fs.readFileSync(this.path);
            this.mainObject = JSON.parse(fileContent);
            return this.mainObject;
        }
    }

}