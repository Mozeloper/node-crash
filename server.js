import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";
const PORT = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename, __dirname);

const server = http.createServer(async(request, response) => {
  // response.write('Hello World');
  // response.setHeader('Content-Type',  'text/html')
  // response.statusCode = 404
  // response.writeHead(500, { "Content-Type": "application/json" });
  // response.end(JSON.stringify({ message: "Server Error" }));

  //   response.writeHead(200, { "Content-Type": "text/html" });
  //         response.end("<h1>Home page</h1>");

  try {
    // Check if Get request
    if (request.method === "GET") {
        let filePath;
      if (request.url === "/") {
        filePath = path.join(__dirname, 'public', 'index.html')
      } else if (request.url === "/about") {
       filePath = path.join(__dirname, 'public', 'about.html')
      } else {
         throw new Error("Not Found");
      }
      const data = await fs.readFile(filePath);
      response.setHeader('Content-Type', 'text/html')
      response.write(data)
      response.end()
    } else {
      throw new Error("Method not Allowed");
    }
  } catch (error) {
    response.writeHead(500, { "Content-Type": "text/plain" });
    response.end("<h1>Internal Server Error</h1>");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
