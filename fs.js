const fs = require("fs");

fs.writeFile(
    "./employees.json",
    '{"name": "Employee 1 Name", "salary": 2000}',
    "utf8",
    (err, data) => {
        if (err) console.log(err);
        console.log(data);
        console.log("successfully write file");
    }
);

fs.readFile("./employees.json", "utf8", (err, data) => {
    if (err) console.log(err);
    console.log(data);
    console.log("file read successfully");
});

fs.appendFile(
    "./employees.json",
    '\n{"name": "Employee 2 Name", "salary": 1500}',
    "utf8",
    (err, data) => {
        if (err) console.log(err);
        console.log(data);
        console.log("added successfully");
    }
);

fs.unlink("./employees.json", (err) => {
    if (err) console.log(err);
    else console.log("file deleted");
});