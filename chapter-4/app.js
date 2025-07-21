const http = require('http');

const server  = http.createServer((req, res) => {
  // console.log("Request is",req.url,req.method, req.headers);


  //  seding response
  if(req.url ==='/'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>My First Page</title></head><body><h1>Hello from Node.js Server</h1></body></html>');
    res.end(); //end the server response
  }else if(req.url === '/about'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>About Page</title></head><body><h1>About Us</h1></body></html>');
    res.end(); //end the server response
  }else{
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>404 Not Found</title></head><body><h1>Page Not Found</h1></body></html>');
    res.end(); //end the server response
  }
})

//Listen
server.listen(3001);