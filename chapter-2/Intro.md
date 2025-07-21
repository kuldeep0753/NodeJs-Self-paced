First Node server

Here's a line-by-line breakdown of your Node.js code with explanations for each word and concept:

---

### **Line 1:**
```js
const http = require('http');
```

#### **Explanation:**
- **`const`**: Declares a constant variable that cannot be reassigned.
- **`http`**: A variable name used to store the imported HTTP module.
- **`require('http')`**: Imports Node.js's built-in HTTP module, which allows you to create a web server.

#### **Note:**
This line loads the HTTP module so you can use its functions to create a server.

---

### **Line 2:**
```js
const server = http.createServer((req, res) => {
```

#### **Explanation:**
- **`const`**: Declares another constant variable.
- **`server`**: A variable name to hold the server instance.
- **`http.createServer(...)`**: Creates a new HTTP server.
- **`(req, res) => { ... }`**: An arrow function that handles incoming requests.
  - **`req`**: Represents the request object (contains info like URL, headers).
  - **`res`**: Represents the response object (used to send data back to the client).

#### **Note:**
This line sets up the server and defines how it should respond to incoming requests.

---

### **Line 3:**
```js
  console.log(req);
```

#### **Explanation:**
- **`console.log(...)`**: Prints information to the console.
- **`req`**: Logs the request object so you can see details about the incoming request.

#### **Note:**
This helps you debug or inspect what the client is sending to the server.

---

### **Line 4:**
```js
});
```

#### **Explanation:**
- Closes the `createServer` function definition.

#### **Note:**
Ends the server creation logic.

---

### **Line 5:**
```js
server.listen(3000, () => {
```

#### **Explanation:**
- **`server.listen(...)`**: Starts the server and makes it listen on a specific port.
- **`3000`**: The port number where the server will listen for requests.
- **`() => { ... }`**: A callback function that runs once the server starts.

#### **Note:**
This line activates the server and sets it to listen on port 3000.

---

### **Line 6:**
```js
  console.log('Server is running on port 3000');
```

#### **Explanation:**
- **`console.log(...)`**: Prints a message to the console.
- **`'Server is running on port 3000'`**: A string message confirming the server is active.

#### **Note:**
This gives feedback that the server has started successfully.

#### **Explanation:**
- Closes the `listen` method's callback function.

#### **Note:**
Ends the logic for what happens when the server starts.
