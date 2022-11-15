var fs = require("fs");

var data = fs.readFileSync("./ems.csv", "utf-8");

data = data.split("\r\n");
data.shift();
data.pop();

class newNumber {
    constructor(number, word1, word2) {
        this.number = number;
        this.word1 = word1;
        this.word2 = word2;
        this.attempted = false;
        this.state = false;
    }
}

var rowsObject = [];

data.forEach((row) => {
    var nextRow = row.split(",");
    if (nextRow[2] == "") {
        nextRow[2] = null;
    }
    rowsObject.push(new newNumber(nextRow[0], nextRow[1], nextRow[2]));
});

console.log(rowsObject);

var json = JSON.stringify(rowsObject);

fs.writeFileSync("numbers.json", json, "utf-8");
