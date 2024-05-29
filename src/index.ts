import * as http from "http";
import * as fs from "fs";

const server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello, World!\n");
  }
);

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});


fs.writeFile("example.txt", "Hello, World!", (err: any) => {
  if (err) throw err;
  console.log("File has been saved!");
});
