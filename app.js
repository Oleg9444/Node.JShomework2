
const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    let parsedUrl = url.parse(req.url)
    console.log(parsedUrl.pathname);
    switch (parsedUrl.pathname) {
        case '/':
            fs.readFile('./index.html', (err, data) => {
                res.end(data)
            })
            break;
        case '/login':
            fs.readFile('./login.html', (err, data) => {
                res.end(data)
            })
            break;
        case '/register':
            fs.readFile('./register.html', (err, data) => {
                res.end(data)
            })
        default:
            fs.readFile('./404.html', (err, data) => {
                res.end(data)
            })
            break;
    }
   fs.readFile('./index.html', (err, data) => {
       res.end(data)
   })
});
server.listen(3000, (err) => {
    if (err) {
        console.log(ERROR)
    } else {
        console.log('Listen 3000')
    }
})