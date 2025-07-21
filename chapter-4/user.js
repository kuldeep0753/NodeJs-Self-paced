//User take input and send to server
// **Taking user Input: Form
// **redirect request:

const http = require('http');

const server= http.createServer((req, res) => {
    if(req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html>`);
    }
})