import http from "http";
import url from "url";
import path from "path";
import fs from "fs";

function serve(rootDirectory, port) {
  let server = new http.Server();
  server.listen(port);
  console.log("Listening on port", port);

  server.on("request", (request, response) => {
    let endpoint = url.parse(request.url).pathname;
    if (endpoint === "/test/mirror") {
      response.setHeader("Content-Type", "text/plain; charset=UTF-8");

      response.writeHead(200);

      response.write(
        `${request.method} ${request.url} HTTP/${request.httpVersion}\r\n`
      );

      let headers = request.rawHeaders;
      for (let i = 0; i < headers.length; i += 2) {
        response.write(`${headers[i]}: ${headers[i + 1]}\r\n`);
      }

      response.write("\r\n");
    } else if (request.method === "PUT") {
      let filename = endpoint.substring(1);
      filename = filename.replace(/\.\.\//g, "");
      filename = path.resolve(process.cwd() + rootDirectory, filename);
      fs.mkdir(path.dirname(filename), { recursive: true }, (err) => {
        if (err) {
          console.error("Error creating directory:", err);
        } else {
          const fileStream = fs.createWriteStream(filename);

          request.on("error", (err) => {
            console.error("Request error", err);
            response.writeHead(500, { "Content-Type": "text/plain" });
            response.end("Error receiving file");
          });

          fileStream.on("error", (err) => {
            console.error("uploading error", err);
            response.writeHead(500, { "Content-Type": "text/plain" });
            response.end("Error");
          });

          fileStream.on("finish", () => {
            response.writeHead(201, { "Content-Type": "text/plain" });
            response.end("success");
          });
        }
      });
    } else {
      let filename = endpoint.substring(1);
      filename = filename.replace(/\.\.\//g, "");
      filename = path.resolve(process.cwd() + rootDirectory, filename);

      let type;
      switch (path.extname(filename)) {
        case ".html":
        case ".htm":
          type = "text/html";
          break;
        case ".js":
          type = "text/javascript";
          break;
        case ".css":
          type = "text/css";
          break;
        case ".png":
          type = "image/png";
          break;
        case ".txt":
          type = "test/plain";
          break;
        default:
          type = "application/octet-stream";
          break;
      }

      let stream = fs.createReadStream(filename);
      stream.once("readable", () => {
        reaponse.setHeader("Content-Type", type);
        response.writeHead(200);
        stream.pipe(response);
      });

      stream.on("error", (err) => {
        response.setHeader("Content-Type", "text/plain; charset=UTF-8");
        response.writeHead(404);
        response.end(err.message);
      });
    }
  });
}

serve(process.argv[2] || "/tmp", parseInt(process.argv[3]) || 8000);
