````markdown
# Day 3/100: Exploring Node.js, Setting Up the Environment, and Core Modules

## Brief Summary

Today, I delved into Node.js, a powerful JavaScript runtime built on Chrome's V8 engine. I explored how to set up the Node.js environment and utilized core modules like File System and HTTP for building server-side applications.

## Key Takeaways

### Introduction to Node.js

- Node.js allows JavaScript to run on the server side, enabling full-stack JavaScript development.
- Known for its non-blocking, event-driven architecture, making it ideal for scalable network applications.

```javascript
// Simple Node.js server
const http = require("http");
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World!\n");
});
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
```
````

### Setting Up Node.js Environment

- Setting up Node.js involves installing Node.js and npm (Node Package Manager), initializing a project, and managing dependencies.

```bash
# Install Node.js and npm
# Initialize a new Node.js project
npm init -y
# Install a package (e.g., Express)
npm install express
```

### Core Modules

#### File System (fs)

- Used for handling file operations like reading, writing, and deleting files.

```javascript
const fs = require("fs");
// Writing to a file
fs.writeFile("example.txt", "Hello, World!", (err) => {
  if (err) throw err;
  console.log("File has been saved!");
});
```

#### HTTP

- Enables the creation of web servers and handling of HTTP requests and responses.

```javascript
const http = require("http");
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World!\n");
});
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
```

## Challenges Faced and How I Overcame Them

- **Challenge:** Configuring the Node.js environment and understanding core modules was initially daunting.
- **Solution:** I overcame this by following detailed tutorials and practicing with small projects, gradually building my understanding and confidence.

## Conclusion

Exploring Node.js has been an enlightening experience, revealing the power of JavaScript on the server side. By setting up the environment and leveraging core modules, I took the first steps towards building robust server-side applications.

---

Thanks for reading! If you have any questions or feedback, feel free to reach out.

Happy coding!

```

This `README.md` provides a structured overview of your exploration of Node.js, including a brief summary, key takeaways with code examples, challenges faced, and how you overcame them. It serves as a comprehensive guide for readers interested in learning about Node.js.
```
