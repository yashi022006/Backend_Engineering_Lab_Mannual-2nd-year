const fs=require('fs');
//first practice open,close,read,write functions as they need file descriptor
// open file (returns file descriptor)
/*let fd = fs.openSync("sync_fd.txt", "w+");

// write data
fs.writeSync(fd, "Hello using writeSync\n");

// append data
fs.appendFileSync(fd, "Hello using appendFileSync\n");

// read data
let buffer = Buffer.alloc(100);
let bytes = fs.readSync(fd, buffer, 0, buffer.length, 0);

console.log(buffer.toString("utf8", 0, bytes));
// close file
fs.closeSync(fd);
*/


/*
fs.open("new.txt", "w+", function (err, fd) {
    if (err) throw err;

    fs.write(fd, "Hello using write (async)\n", function () {

        fs.appendFile(fd, "Hello using appendFile (async)\n", function () {

            let buffer = Buffer.alloc(100);

            fs.read(fd, buffer, 0, buffer.length, 0, function (err, bytes) {
                if (err) throw err;

                console.log(buffer.toString("utf8", 0, bytes));

                fs.close(fd, function () {
                    console.log("File closed");
                });
            });
        });
    });
});
*/

// no need of fd and callback for writeFile and appendFile as they handle it internally
fs.writeFile("simple.txt", "Written using writeFile\n", function () {
    console.log("writeFile done");
});
fs.appendFile("simple.txt", "Appended using appendFile\n", function () {
    console.log("appendFile done");
});
fs.readFile("simple.txt", "utf8", function (err, data) {
    if (err) throw err;
    console.log(data);
});
fs.writeFileSync("sync_simple.txt", "Hello writeFileSync\n");
fs.appendFileSync("sync_simple.txt", "Hello appendFileSync\n");
let data = fs.readFileSync("sync_simple.txt", "utf8");
console.log(data);
fs.unlinkSync("sync_simple.txt");
console.log("File deleted using unlinkSync");
fs.unlink("simple.txt", function () {
    console.log("File deleted using unlink");
});

