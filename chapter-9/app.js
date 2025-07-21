const http = require('http'); // COre module for creating HTTP servers
const requestHandler = require('./user'); //Local module for handling user requests

const express = require('express'); // Importing express framework AND its a third-party module

const app = express(); // Creating an instance of express application

//using middleware
app.use((req,res,next)=>{
console.log('Middleware executed');
next(); // Call the next middleware in the stack
})
app.use((req,res,next)=>{
console.log('Second Middleware executed');
res.send(`<p>Hello ! Thank you to make our Nodejs easy using framework</p>`)
next()
})



const server = http.createServer(app);

const PORT = 3002;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});