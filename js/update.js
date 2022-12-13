setTimeout(() => {
    const fs = require("fs");
    var data2 = fs.readFileSync("./funcBackup.js", { encoding: "utf8" });

    var data1 = fs.readFileSync("./bundle.js", { encoding: "utf8" });
    var combined = data1 + data2;

    fs.writeFileSync("bundle.js", combined);
}, 1000);
