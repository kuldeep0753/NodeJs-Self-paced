// Task:
// Create a page that shows a navigation bar of
// Myntra with the following links:
// A. Home
// B. Men
// C. Women
// D. Kids
// E. Cart
// Clicking on each link page should navigate to that
// page and a welcome to section text is shown
// there.

const http = require('http');
const server = http.createServer((req, res) => {
  console.log("check");
  res.setHeader('Content-Type', 'text/html');
  if (req.url === '/') { //By default is home
    res.write('<html><head><title>My First Page</title></head><body><h1>Home page</h1></body></html>');
    res.end(); //end the server response
  } else if (req.url === '/men') {
    res.write('<html><head><title>About Page</title></head><body><h1>men Us</h1></body></html>');
    res.end(); //end the server response
  } else if (req.url === '/women') {
    res.write('<html><head><title>About Page</title></head><body><h1>women Us</h1></body></html>');
    res.end(); //end the server response
  }
   else if(req.url === '/kids'){
    res.write('<html><head><title>About Page</title></head><body><h1>kids Us</h1></body></html>');
    res.end(); //end the server response
   }
   else if(req.url === '/carts'){
    res.write('<html><head><title>About Page</title></head><body><h1>Carts Us</h1></body></html>');
    res.end(); //end the server response
  }
  else {
    res.write('<html><head><title>404 Not Found</title></head><body><h1>Page Not Found</h1></body></html>');
    res.end(); //end the server response
  }
})

server.listen(3000);