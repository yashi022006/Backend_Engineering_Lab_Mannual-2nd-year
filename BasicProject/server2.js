const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {

    const date = new Date();
    const base = `http://${req.headers.host}`;
    const myUrl = new URL(req.url, base);
    const pathname = myUrl.pathname;

    let filePath;

    switch (pathname) {
        case '/':
            fs.appendFile("userLog.txt", `${date}: Home Page\n`, () => {});
            filePath = path.join(__dirname, "Component", "Home.html");
            break;

        case '/about':
            fs.appendFile("userLog.txt", `${date}: About Page\n`, () => {});
            filePath = path.join(__dirname, "Component", "About.html");
            break;

        case '/contact':
            fs.appendFile("userLog.txt", `${date}: Contact Page\n`, () => {});
            filePath = path.join(__dirname, "Component", "Contact.html");
            break;

        case '/services':
            fs.appendFile("userLog.txt", `${date}: Services Page\n`, () => {});
            filePath = path.join(__dirname, "Component", "Services.html");
            break;

        default:
            fs.appendFile("userLog.txt", `${date}: Error Page\n`, () => {});
            filePath = path.join(__dirname, "Component", "Error.html");
    }
  console.log(myUrl);

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500);
            res.end("Server Error");
            return;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });

}).listen(8000, () => {
    console.log("http://localhost:8000/services");
    
});
